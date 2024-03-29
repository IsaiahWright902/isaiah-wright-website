"use client";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
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
  maxWidth?: string;
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
  maxWidth = "sm",
}: BaseModalProps) {
  return (
    <Dialog
      open={isOpen}
      fullWidth={fullWidth}
      onClose={handleClose}
      // @ts-ignore
      maxWidth={maxWidth}
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
            <HighlightOffIcon
              sx={{
                fill: `#777`,
              }}
            />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent sx={{ minHeight: "200px" }}>{children}</DialogContent>
    </Dialog>
  );
}
