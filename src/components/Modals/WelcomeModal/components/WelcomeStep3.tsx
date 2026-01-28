"use client";
import { Typography, Stack, Button } from "@mui/material";
import { SetStateAction } from "react";
import { WelcomeSteps } from "../WelcomeModal";

export default function WelcomeStep3({
  userColor,
  handleClose,
  setCurrentStep,
}: {
  userColor: string;
  handleClose: () => void;
  setCurrentStep: React.Dispatch<SetStateAction<WelcomeSteps>>;
}) {
  return (
    <>
      <Typography>
        All set. Your preferences are saved and will persist across visits.
      </Typography>
      <Typography>
        You can update these settings anytime using the theme and color buttons in the navbar.
      </Typography>
      <Typography>
        Thanks for taking the time to personalize your experience. Explore the site to learn more about my work,
        technical background, and approach to building reliable systems. If you&apos;d like to connect or discuss
        a project, I&apos;d be happy to hear from you :)
      </Typography>
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
          onClick={handleClose}
        >
          Close Modal
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
