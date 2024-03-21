"use client";

import PageContainer from "@/components/PageContainer/PageContainer";
import { theme } from "@/theme/ThemeRegistry";
import { GetOperatorDisplay } from "@/utils/custom-equation-utils";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppSelector } from "@/store/store";
import { coreSelectors } from "@/store/CoreState/selector";
import { getAnalogousColor, getComplementColor } from "@/utils/general-utils";

export enum Operator {
  Addition = 1,
  Subtraction = 2,
  Multiplication = 3,
  Division = 4,
}

type CustomEquationGroup = {
  id: number;
  name: string;
  items: CustomEquationBlock[];
  result: EquationResult;
};

type EquationResult = {
  value: number;
  label: string;
};

type CustomEquationBlock = {
  label: string;
  value: number;
  operator: Operator;
};

export default function CustomEquationBlockPage() {
  const [equationGroups, setEquationGroups] = useState<CustomEquationGroup[]>([
    {
      id: 1,
      name: "Square Footage",
      result: {
        value: 0,
        label: "Total SqFt",
      },
      items: [
        {
          label: "Length",
          value: 10,
          operator: Operator.Multiplication,
        },
        {
          label: "Width",
          value: 5,
          operator: Operator.Multiplication,
        },
        {
          label: "Height",
          value: 5,
          operator: Operator.Multiplication,
        },
      ],
    },
    {
      id: 2,
      name: "Square Footage 2",
      result: {
        value: 0,
        label: "Total SqFt",
      },
      items: [
        {
          label: "Length",
          value: 20,
          operator: Operator.Addition,
        },
        {
          label: "Width",
          value: 5,
          operator: Operator.Division,
        },
      ],
    },
  ]);

  const calculateResult = (items: CustomEquationBlock[]) => {
    let isMultiplicationOnly = items.every(
      (item) => item.operator === Operator.Multiplication
    );

    const total = items.reduce(
      (acc, item) => {
        switch (item.operator) {
          case Operator.Addition:
            return acc + item.value;
          case Operator.Subtraction:
            return acc - item.value;
          case Operator.Multiplication:
            return acc * item.value;
          case Operator.Division:
            return acc / item.value;
          default:
            return acc;
        }
      },
      isMultiplicationOnly ? 1 : 0
    );

    return isNaN(total) ? 0 : total;
  };

  const handleInputChange = (id: number, valueIndex: number, value: number) => {
    const newEquations = [...equationGroups];

    const equationToUpdate = newEquations.find((x) => x.id === id);

    if (!equationToUpdate) {
      toast.error("Something went wrong");
      return;
    }

    // @ts-ignore
    equationToUpdate.items[valueIndex].value = isNaN(value) ? "" : value;
    equationToUpdate.result.value = calculateResult(equationToUpdate.items);

    setEquationGroups(newEquations);
  };

  return (
    <PageContainer
      title="Custom Equation Builder"
      description="A form builder that enables a user to create there own custom forms with their own custom formulas."
    >
      <Grid container spacing={4} pb={4}>
        <Grid item xs={12} pb={2}>
          <Typography variant="h3">Explanation:</Typography>
          <Typography>
            This UI allows you to build you own custom math equations with
            labels and values. To illustrate what this functionality can do
            below you will find an example that calculates Square Footage. Feel
            free to add your own equations or edit the existing example.
          </Typography>
        </Grid>
        <Grid item xs={12} pb={4}>
          <Stack
            direction="row"
            justifyContent={{ xs: "center", sm: "center", md: "flex-end" }}
          >
            <Button variant="contained">Add New Equation +</Button>
          </Stack>
        </Grid>
      </Grid>
      <Stack spacing={4}>
        {equationGroups.map((eg) => (
          <ResponsiveGrid
            key={eg.id}
            equationGroup={eg}
            handleInputChange={handleInputChange}
          />
        ))}
      </Stack>
    </PageContainer>
  );
}

function ResponsiveGrid({
  equationGroup,
  handleInputChange,
}: {
  equationGroup: CustomEquationGroup;
  handleInputChange: (id: number, index: number, value: number) => void;
}) {
  const userColor = useAppSelector(coreSelectors.userColor);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const gridSize = 12 / (equationGroup.items.length + 1);

  return (
    <Box
      sx={{
        border: `2px solid ${getAnalogousColor(userColor)}`,
        padding: "15px",
        borderRadius: "8px",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            justifyContent="space-between"
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography variant="h4">{equationGroup.name}</Typography>
              <Tooltip title="Edit Equation">
                <IconButton>
                  <EditIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Stack>

            <Stack justifyContent="flex-end">
              <Tooltip title="Delete Equation">
                <IconButton>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>
        </Grid>
        {equationGroup.items.map((item, idx) => (
          <Grid key={idx} item xs={isMobile ? 12 : gridSize}>
            <TextField
              InputProps={{
                inputProps: { min: 0 },
              }}
              value={item.value}
              onChange={(e) =>
                handleInputChange(
                  equationGroup.id,
                  idx,
                  parseFloat(e.target.value)
                )
              }
              type="number"
              fullWidth
              variant="standard"
              label={`${item.label} ${GetOperatorDisplay(item.operator)}`}
            />
          </Grid>
        ))}
        <Grid item xs={isMobile ? 12 : gridSize}>
          <Stack direction="row" alignItems="center"></Stack>

          <TextField
            fullWidth
            value={equationGroup.result.value}
            disabled
            variant="outlined"
            label={equationGroup.result.label}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
