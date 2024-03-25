"use client";

import BaseModal from "../BaseModal";
import { modalSelectors } from "@/store/ModalState/selector";
import { modalActions } from "@/store/ModalState/reducer";
import { coreSelectors } from "@/store/CoreState/selector";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { theme } from "@/theme/ThemeRegistry";
import { hexToRgbA } from "@/utils/general-utils";
import { SketchPicker } from "react-color";
import { useState } from "react";
import { coreActions } from "@/store/CoreState/reducer";
import { useAppDispatch, useAppSelector } from "@/store/store";

export default function UserColorPickerModal() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(modalSelectors.userColorPickerModal);
  const userColor = useAppSelector(coreSelectors.userColor);
  const useLightMode = useAppSelector(coreSelectors.useLightMode);

  const handleClose = () => {
    dispatch(modalActions.close("userColorPickerModal"));
  };

  const [color, setColor] = useState<string>("");

  const handleSetUserColor = (val: string) => {
    dispatch(coreActions.setUserColor(val));
  };

  const handleChangeColor = (val: string) => {
    setColor(val);
    handleSetUserColor(val);
  };

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
    <BaseModal isOpen={isOpen} title="Change Color" handleClose={handleClose}>
      <Stack pt={2} pb={2} spacing={4} minHeight="200px">
        <Stack spacing={2}>
          <Typography variant="body1">Current Selected Color:</Typography>
          <Box
            width="100%"
            height="50px"
            sx={{
              background: userColor,
            }}
          ></Box>
        </Stack>
        <Stack spacing={1}>
          <Typography variant="body1">Choose Color:</Typography>
          <Grid
            container
            spacing={2}
            justifyContent={{ xs: "center", lg: "space-evenly" }}
          >
            {colors.map((color, idx) => (
              <Grid item xs={3} lg={1} key={idx}>
                <Box
                  onClick={() => handleSetUserColor(color)}
                  width="40px"
                  height="40px"
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
              </Grid>
            ))}
          </Grid>
        </Stack>
        <Stack spacing={2}>
          <Typography variant="body1">Choose Custom Color:</Typography>
          <Stack alignItems="center" justifyContent="center">
            <SketchPicker
              color={color}
              onChange={(c) => handleChangeColor(c.hex)}
              disableAlpha
            />
          </Stack>
        </Stack>
        <Stack pt={2}>
          <Button variant="outlined">Close Modal</Button>
        </Stack>
      </Stack>
    </BaseModal>
  );
}
