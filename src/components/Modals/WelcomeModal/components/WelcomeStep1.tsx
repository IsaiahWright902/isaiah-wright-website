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
        Welcome! I&apos;m Isaiah, and I&apos;m thrilled to welcome you to my
        website. It&apos;s truly an honor to have you here.
      </Typography>
      <Typography>
        It looks like this may be your first time visiting my site. I&apos;ve
        crafted it with a variety of functionalities to showcase my skills and
        deep passion for software development. I hope you find it both
        informative and engaging.
      </Typography>
      <Typography>
        First things first! Do you prefer Light Mode or Dark Mode?
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
