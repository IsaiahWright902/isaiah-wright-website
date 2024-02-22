"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
  Stack,
  Typography,
  Zoom,
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import React from "react";

export type BaseModalProps = {
  isOpen: boolean;
  title?: string;
  fullWidth?: boolean;
  handleClose: () => void;
  children: React.ReactNode;
};

const Transition2 = React.forwardRef(function Transition2(props, ref) {
  // @ts-ignore
  return <Zoom ref={ref} style={{ transformOrigin: "center" }} {...props} />;
});

export default function BaseModal({
  isOpen,
  title,
  fullWidth = true,
  handleClose,
  children,
}: BaseModalProps) {
  return (
    <Dialog
      open={isOpen}
      fullWidth={fullWidth}
      onClose={handleClose}
      // @ts-ignore
      TransitionComponent={Transition2}
    >
      <DialogTitle>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h4">{title}</Typography>
          <IconButton onClick={handleClose}>
            <HighlightOffIcon />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <Stack pt={2} pb={2} spacing={2} minHeight="200px">
          {children}
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
