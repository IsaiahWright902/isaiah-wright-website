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
        Oops, color calamity! Not feeling the vibes? No sweat, chief artist!
        It&apos;s time to break free from the palette prison and embark on a
        wild color safari with your very own picker. Show those hues who&apos;s
        boss and find the shade that screams &apos;you.&apos; Let&apos;s paint
        the town... err, website, red, blue, or whatever color tickles your
        fancy!
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
