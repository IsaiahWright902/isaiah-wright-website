"use client";

import PageContainer from "@/components/PageContainer/PageContainer";
import {
  CustomEquation,
  Operator,
  calculateEquationResult,
} from "@/utils/custom-equation-utils";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import toast from "react-hot-toast";
import CustomEquationItem from "./_components/EquationItem";

export default function CustomEquationBlockPage() {
  const [customEquations, setCustomEquations] = useState<CustomEquation[]>([
    {
      id: 1,
      name: "Square Footage",
      result: {
        value: 250,
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
  ]);

  const handleInputChange = (id: number, valueIndex: number, value: number) => {
    const newEquations = [...customEquations];

    const equationToUpdate = newEquations.find((x) => x.id === id);

    if (!equationToUpdate) {
      toast.error("Something went wrong");
      return;
    }

    // @ts-ignore
    equationToUpdate.items[valueIndex].value = isNaN(value) ? "" : value;
    equationToUpdate.result.value = calculateEquationResult(
      equationToUpdate.items
    );

    setCustomEquations(newEquations);
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
        {customEquations.map((equation) => (
          <CustomEquationItem
            key={equation.id}
            customEquation={equation}
            handleInputChange={handleInputChange}
          />
        ))}
      </Stack>
    </PageContainer>
  );
}
