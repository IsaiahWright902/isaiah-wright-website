"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export type BaseModalProps = {
  isOpen: boolean;
  title?: string;
  fullWidth?: boolean;
  handleClose: () => void;
  children: React.ReactNode;
};

export default function BaseModal({
  isOpen,
  title,
  fullWidth = true,
  handleClose,
  children,
}: BaseModalProps) {
  return (
    <Dialog open={isOpen} fullWidth={fullWidth} onClose={handleClose}>
      <DialogTitle sx={{ backgroundColor: `customGrey.light` }}>
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
