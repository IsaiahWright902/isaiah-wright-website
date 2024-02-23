"use client";
import { Typography, Stack, Button } from "@mui/material";
import { SetStateAction } from "react";
import { WelcomeSteps } from "../WelcomeModal";

export default function WelcomeStep3({
  userColor,
  handleClose,
}: {
  userColor: string;
  handleClose: () => void;
}) {
  return (
    <>
      <Typography>
        Fantastic choice! Your color preferences are now the guiding stars as we
        set the stage for an exciting journey through my website.
      </Typography>
      <Typography>
        You can change these settings via the dropdown menu on the Navbar at
        anytime.
      </Typography>
      <Typography>
        Get ready to embark on a thrilling exploration of creativity and
        innovation, where each project is a unique chapter waiting to unfold.
        So, kick back, relax, and let&apos;s discover together if I&apos;m the
        right dev to bring your visions to life!
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
      </Stack>
    </>
  );
}
