"use client";

import PageContainer from "@/components/PageContainer/PageContainer";
import {
  CreateEquationDTO,
  CustomEquation,
  Operator,
  calculateEquationResult,
} from "@/utils/custom-equation-utils";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import toast from "react-hot-toast";
import CustomEquationItem from "./_components/EquationItem";
import NewEquationModal from "./_components/NewEquationModal";
import ConfirmDeleteEquationModal from "./_components/ConfirmDeleteEquationModal";
import UpdateEquationModal from "./_components/UpdateEquationModal";

export default function CustomEquationBlockPage() {
  const [isNewEquationModalOpen, setIsNewEquationModalOpen] = useState(false);
  const [equationToDelete, setEquationToDelete] =
    useState<CustomEquation | null>(null);

  const [equationToUpdate, setEquationToUpdate] =
    useState<CustomEquation | null>(null);

  const [customEquations, setCustomEquations] = useState<CustomEquation[]>([
    {
      id: 1,
      name: "Square Footage",
      result: {
        value: 120,
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
          value: 12,
          operator: Operator.Multiplication,
        },
      ],
    },
    {
      id: 1,
      name: "Volume",
      result: {
        value: 960,
        label: "Total Volume",
      },
      items: [
        {
          label: "Length",
          value: 10,
          operator: Operator.Multiplication,
        },
        {
          label: "Width",
          value: 12,
          operator: Operator.Multiplication,
        },
        {
          label: "Height",
          value: 8,
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

  const handleAddEquation = (data: CreateEquationDTO) => {
    const newEquation: CustomEquation = {
      id: customEquations.length + 2,
      name: data.name,
      result: {
        label: data.resultLabel,
        value: 0,
      },
      items: data.items,
    };

    setCustomEquations([...customEquations, newEquation]);
  };

  const handleUpdateEquation = (data: CreateEquationDTO) => {
    const foundEquation = customEquations.find(
      (x) => x.id === equationToUpdate!.id
    );

    if (!foundEquation) {
      toast.error("Could not update equation :(");
      setEquationToUpdate(null);
    }

    const updatedEquations = customEquations.map((equation) => {
      if (equation.id === equationToUpdate!.id) {
        return {
          id: equation.id,
          name: data.name ?? equation.name,
          result: {
            label: data.resultLabel ?? equation.result.label,
            value: calculateEquationResult(data.items),
          },
          items: data.items,
        };
      } else {
        return equation;
      }
    });

    // @ts-ignore
    setCustomEquations(updatedEquations);
    setEquationToUpdate(null);
  };

  const handleDeleteEquation = (confirmed: boolean) => {
    if (confirmed) {
      setCustomEquations(
        customEquations.filter((x) => x.id !== equationToDelete?.id)
      );

      toast.success(`Deleted ${equationToDelete?.name}!`);
    }

    setEquationToDelete(null);
  };

  return (
    <>
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
              below you will find an example that calculates Square Footage.
              Feel free to add your own equations or edit the existing example.
            </Typography>
          </Grid>
          <Grid item xs={12} pb={4}>
            <Stack
              direction="row"
              justifyContent={{ xs: "center", sm: "center", md: "flex-end" }}
            >
              <Button
                onClick={() => setIsNewEquationModalOpen(true)}
                variant="contained"
              >
                Add New Equation +
              </Button>
            </Stack>
          </Grid>
        </Grid>
        <Stack spacing={4}>
          {customEquations.map((equation, idx) => (
            <CustomEquationItem
              key={idx}
              customEquation={equation}
              handleInputChange={handleInputChange}
              setEquationToDelete={setEquationToDelete}
              setEquationToUpdate={setEquationToUpdate}
            />
          ))}
        </Stack>
      </PageContainer>
      <NewEquationModal
        isOpen={isNewEquationModalOpen}
        handleClose={() => setIsNewEquationModalOpen(false)}
        handleAddEquation={handleAddEquation}
      />
      <ConfirmDeleteEquationModal
        equationToDelete={equationToDelete}
        handleClose={() => setEquationToDelete(null)}
        handleDeleteEquation={handleDeleteEquation}
      />
      <UpdateEquationModal
        equationToUpdate={equationToUpdate}
        handleClose={() => setEquationToUpdate(null)}
        handleUpdateEquation={handleUpdateEquation}
      />
    </>
  );
}
