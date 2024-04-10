import BaseModal from "@/components/Modals/BaseModal";
import {
  Button,
  Grid,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useFieldArray, useForm } from "react-hook-form";
import {
  CreateEquationDTO,
  Operator,
  createEquationValidator,
} from "@/utils/custom-equation-utils";
import { zodResolver } from "@hookform/resolvers/zod";

export default function NewEquationModal({
  isOpen,
  handleClose,
  handleAddEquation,
}: {
  isOpen: boolean;
  handleClose: () => void;
  handleAddEquation: (data: CreateEquationDTO) => void;
}) {
  const {
    handleSubmit,
    register,
    reset,
    control,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm<CreateEquationDTO>({
    defaultValues: {
      name: "",
      resultLabel: "",
      items: [
        {
          label: "",
          operator: 1,
          value: 0,
        },
      ],
    },
    resolver: zodResolver(createEquationValidator),
  });

  const { fields, append, remove } = useFieldArray({
    name: "items",
    control,
  });

  const handleAppend = () => {
    append({
      label: "",
      operator: 1,
      value: 0,
    });
  };

  const onSubmit = (data: CreateEquationDTO) => {
    handleAddEquation(data);
    reset();
    handleClose();
  };

  const handleCloseWithReset = () => {
    reset();
    handleClose();
  };

  return (
    <BaseModal
      isOpen={isOpen}
      title="Create New Equation"
      handleClose={handleCloseWithReset}
      maxWidth="sm"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid pt={2} pb={2} container spacing={4} alignItems="flex-end">
          <Grid item xs={12}>
            <Typography>
              Note: Result will be totaled going in order from top to bottom.
              Plan your order of operations accordingly.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("name")}
              helperText={errors.name?.message}
              error={!!errors.name?.message}
              fullWidth
              variant="standard"
              label="Name"
              placeholder="Enter name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("resultLabel")}
              helperText={errors.resultLabel?.message}
              error={!!errors.resultLabel?.message}
              fullWidth
              variant="standard"
              label="Result Label"
              placeholder="Enter Result Label"
            />
          </Grid>

          <Grid item xs={12}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h5">Fields:</Typography>
              <Tooltip title="Add Field">
                <IconButton onClick={handleAppend}>
                  <AddIcon />
                </IconButton>
              </Tooltip>
            </Stack>
          </Grid>
        </Grid>
        {fields.map((fields, idx) => {
          const fieldError = errors?.items?.[idx];

          return (
            <Grid key={idx} container spacing={2} pt={2}>
              <Grid item xs={12} sm={5}>
                <TextField
                  {...register(`items.${idx}.label`)}
                  helperText={fieldError?.label?.message}
                  error={!!fieldError?.label?.message}
                  fullWidth
                  variant="standard"
                  label="Field Name"
                  placeholder="Enter Field Name"
                />
              </Grid>
              <Grid item xs={12} sm={5}>
                <TextField
                  fullWidth
                  select
                  variant="standard"
                  label="Operator"
                  defaultValue={Operator.Addition}
                  {...register(`items.${idx}.operator`)}
                >
                  <MenuItem value={Operator.Addition}>Add (+)</MenuItem>
                  <MenuItem value={Operator.Subtraction}>Subtract (-)</MenuItem>
                  <MenuItem value={Operator.Multiplication}>
                    Multiply (*)
                  </MenuItem>
                  <MenuItem value={Operator.Division}>Divide (/)</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={2}>
                {watch("items")?.length > 1 && (
                  <Tooltip title="Delete Field">
                    <IconButton onClick={() => remove(idx)}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                )}
              </Grid>
            </Grid>
          );
        })}

        <Grid container spacing={2} pt={6}>
          <Grid item xs={12} pt={4}>
            <Button
              onClick={handleSubmit(onSubmit)}
              fullWidth
              variant="contained"
            >
              Add Equation +
            </Button>
          </Grid>
        </Grid>
      </form>
    </BaseModal>
  );
}
