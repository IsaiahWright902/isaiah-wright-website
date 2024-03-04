"use client";

import { theme } from "@/theme/ThemeRegistry";
import { hexToRgbA } from "@/utils/general-utils";
import { Typography, Stack, Box, Button } from "@mui/material";
import { SetStateAction } from "react";
import { WelcomeSteps } from "../WelcomeModal";

export default function WelcomeStep2({
  useLightMode,
  userColor,
  setCurrentStep,
  handleSetUserColor,
}: {
  useLightMode: boolean;
  userColor: string;
  setCurrentStep: React.Dispatch<SetStateAction<WelcomeSteps>>;
  handleSetUserColor: (val: string) => void;
}) {
  const colors: string[] = [
    theme.palette.red.main,
    theme.palette.green.main,
    theme.palette.blue.main,
    theme.palette.purple.main,
    theme.palette.pink.main,
    theme.palette.yellow.main,
    theme.palette.orange.main,
  ];

  return (
    <>
      <Typography>
        Next up! You are the art director of your own experience! Your journey
        through my website begins with a choice – the color that resonates with
        you. Let&apos;s paint this canvas together and make your visit truly
        vibrant!
      </Typography>
      <Typography>Please choose a color below!</Typography>

      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        pt={2}
      >
        {colors.map((color, idx) => (
          <Box
            key={idx}
            onClick={() => handleSetUserColor(color)}
            width="50px"
            height="50px"
            borderRadius="50%"
            sx={{
              background: color,
              cursor: "pointer",
              transition: "all 0.3s",
              "&:hover": {
                boxShadow: `0 4px 8px ${
                  useLightMode
                    ? "rgba(0, 0, 0, 0.4)"
                    : hexToRgbA("#f0f2f5", 0.4)
                } `,
              },
            }}
          ></Box>
        ))}
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
          variant="outlined"
          onClick={() => setCurrentStep(WelcomeSteps.Step4)}
        >
          I don&apos;t like any of these colors...
        </Button>
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
          onClick={() => setCurrentStep(WelcomeSteps.Step1)}
        >
          Back
        </Button>
      </Stack>
    </>
  );
}
