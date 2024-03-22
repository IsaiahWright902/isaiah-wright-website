import BaseModal from "@/components/Modals/BaseModal";
import {
  CreateEquationDTO,
  CustomEquation,
  Operator,
  createEquationValidator,
} from "@/utils/custom-equation-utils";
import { fields } from "@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Grid,
  Typography,
  Button,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import { useForm, useFieldArray } from "react-hook-form";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { useEffect } from "react";

export default function UpdateEquationModal({
  equationToUpdate,
  handleClose,
  handleUpdateEquation,
}: {
  equationToUpdate?: CustomEquation | null;
  handleClose: () => void;
  handleUpdateEquation: (data: CreateEquationDTO) => void;
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

  const { fields, append, update, remove } = useFieldArray({
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
    handleUpdateEquation(data);
  };

  useEffect(() => {
    reset({
      name: equationToUpdate?.name,
      resultLabel: equationToUpdate?.result.label,
      items: equationToUpdate?.items,
    });
  }, [equationToUpdate]);

  if (!equationToUpdate) return null;

  return (
    <BaseModal
      title={`Update Equation`}
      isOpen={!!equationToUpdate}
      handleClose={handleClose}
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
                  value={watch(`items.${idx}.operator`)}
                  {...register(`items.${idx}.operator`)}
                >
                  <MenuItem value={1}>Add (+)</MenuItem>
                  <MenuItem value={2}>Subtract (-)</MenuItem>
                  <MenuItem value={3}>Multiply (*)</MenuItem>
                  <MenuItem value={4}>Divide (/)</MenuItem>
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
              Update Equation
            </Button>
          </Grid>
        </Grid>
      </form>
    </BaseModal>
  );
}
