"use client";

import PageContainer from "@/components/PageContainer/PageContainer";
import { theme } from "@/theme/ThemeRegistry";
import { GetOperatorDisplay } from "@/utils/custom-equation-utils";
import {
  Grid,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export enum Operator {
  Addition = 1,
  Subtraction = 2,
  Multiplication = 3,
  Division = 4,
}

type CustomEquationGroup = {
  id: number;
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
      result: {
        value: 0,
        label: "Total SqFt",
      },
      items: [
        {
          label: "Length",
          value: 10,
          operator: Operator.Addition,
        },
        {
          label: "Width",
          value: 5,
          operator: Operator.Subtraction,
        },
        {
          label: "Height",
          value: 5,
          operator: Operator.Multiplication,
        },
      ],
    },
  ]);

  const calculateResult = (items: CustomEquationBlock[]) => {
    const total = items.reduce((acc, item) => {
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
    }, 0);

    return !total ? 0 : total;
  };

  const handleInputChange = (id: number, valueIndex: number, value: number) => {
    const newEquations = [...equationGroups];

    const equationToUpdate = newEquations.find((x) => x.id === id);

    if (!equationToUpdate) {
      toast.error("Something went wrong");
      return;
    }

    equationToUpdate.items[valueIndex].value = value;
    equationToUpdate.result.value = calculateResult(equationToUpdate.items);

    setEquationGroups(newEquations);
  };

  return (
    <PageContainer
      title="Custom Equation Builder"
      description="A form builder that enables a user to create there own custom forms with their own custom formulas."
    >
      {equationGroups.map((eg) => (
        <ResponsiveGrid
          key={eg.id}
          equationGroup={eg}
          handleInputChange={handleInputChange}
        />
      ))}
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
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const gridSize = 12 / (equationGroup.items.length + 1);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          spacing={2}
        >
          <Typography variant="subtitle1">Edit</Typography>
          <Typography variant="subtitle1">Delete</Typography>
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
  );
}
