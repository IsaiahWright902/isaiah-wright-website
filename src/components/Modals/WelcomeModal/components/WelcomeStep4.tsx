"use client";

import { Typography, Stack, Button } from "@mui/material";
import { SetStateAction, useState } from "react";
import { SketchPicker } from "react-color";
import { WelcomeSteps } from "../WelcomeModal";

export default function WelcomeStep4({
  userColor,
  setCurrentStep,
  handleSetUserColor,
}: {
  userColor: string;
  setCurrentStep: React.Dispatch<SetStateAction<WelcomeSteps>>;
  handleSetUserColor: (val: string) => void;
}) {
  const [color, setColor] = useState<string>("");

  const handleChangeColor = (val: string) => {
    setColor(val);
    handleSetUserColor(val);
  };

  return (
    <>
      <Typography>
        Well this is awkward. Fair enough — my presets didn&apos;t quite work for you.
      </Typography>
      <Typography>
        Use the color picker below to create your own.
        Whatever you pick will be applied across the site.
      </Typography>
      <Stack alignItems="center" justifyContent="center" pt={2}>
        <SketchPicker
          color={color}
          onChange={(c) => handleChangeColor(c.hex)}
          disableAlpha
        />
      </Stack>

      <Stack
        direction="column"
        alignItems="center"
        width="100%"
        spacing={2}
        pt={2}
      >
        <Button
          fullWidth
          style={{
            background: userColor,
          }}
          variant="contained"
          onClick={() => setCurrentStep(WelcomeSteps.Step3)}
        >
          Continue
        </Button>
        <Button
          fullWidth
          variant="text"
          onClick={() => setCurrentStep(WelcomeSteps.Step2)}
        >
          Back
        </Button>
      </Stack>
    </>
  );
}
