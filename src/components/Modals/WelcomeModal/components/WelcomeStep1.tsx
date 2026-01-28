"use client";
import { hexToRgbA } from "@/utils/general-utils";
import { Typography, Stack, Button } from "@mui/material";
import { SetStateAction } from "react";
import { WelcomeSteps } from "../WelcomeModal";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function WelcomeStep1({
  useLightMode,
  userColor,
  toggleThemePreference,
  setCurrentStep,
}: {
  useLightMode: boolean;
  userColor: string;
  toggleThemePreference: (val: boolean) => void;
  setCurrentStep: React.Dispatch<SetStateAction<WelcomeSteps>>;
}) {
  return (
    <>
      <Typography>
        Hey! I&apos;m Isaiah. Thanks for stopping by.
      </Typography>
      <Typography>
        Since this looks like your first visit, I built in a few customization options.
        The site responds to your choices — pick what works for you, and it&apos;ll stick around for next time.
      </Typography>
      <Typography>
        First up: Light Mode or Dark Mode?
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-evenly"
        pt={2}
      >
        <Stack
          onClick={() => toggleThemePreference(true)}
          alignItems="center"
          spacing={1}
          sx={{
            padding: "15px",
            borderRadius: "16px",
            cursor: "pointer",
            transition: "all 0.3s",
            boxShadow: useLightMode ? `0 4px 8px rgba(0, 0, 0, 0.4)` : "",
            borderColor: "#fddd00",
            "&:hover": {
              boxShadow: `0 4px 8px ${
                useLightMode ? "rgba(0, 0, 0, 0.4)" : hexToRgbA("#f0f2f5", 0.4)
              } `,
            },
          }}
        >
          <LightModeIcon
            sx={{
              fill: `#777`,
            }}
          />
          <Typography>Light Mode</Typography>
        </Stack>
        <Stack
          onClick={() => toggleThemePreference(false)}
          alignItems="center"
          spacing={1}
          sx={{
            padding: "15px",
            borderRadius: "16px",
            cursor: "pointer",
            transition: "all 0.3s",
            boxShadow: !useLightMode ? "0 4px 8px rgba(0, 0, 0, 0.4)" : "",
            "&:hover": {
              boxShadow: `0 4px 8px ${
                useLightMode ? "rgba(0, 0, 0, 0.4)" : hexToRgbA("#f0f2f5", 0.4)
              } `,
            },
          }}
        >
          <DarkModeIcon
            sx={{
              fill: `#777`,
            }}
          />
          <Typography>Dark Mode</Typography>
        </Stack>
      </Stack>
      <Stack pt={2}>
        <Button
          style={{
            background: userColor,
          }}
          variant="contained"
          onClick={() => setCurrentStep(WelcomeSteps.Step2)}
        >
          Continue
        </Button>
      </Stack>
    </>
  );
}
