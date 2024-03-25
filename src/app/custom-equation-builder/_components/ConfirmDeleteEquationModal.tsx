"use client";

import BaseModal from "@/components/Modals/BaseModal";
import { CustomEquation } from "@/utils/custom-equation-utils";
import { Button, Grid, Typography } from "@mui/material";

export default function ConfirmDeleteEquationModal({
  equationToDelete,
  handleClose,
  handleDeleteEquation,
}: {
  equationToDelete?: CustomEquation | null;
  handleClose: () => void;
  handleDeleteEquation: (confirmed: boolean) => void;
}) {
  return (
    <BaseModal
      title="Confirm Delete"
      isOpen={!!equationToDelete}
      handleClose={handleClose}
    >
      <Grid container pt={2} spacing={4}>
        <Grid item xs={12}>
          <Typography>
            Are you sure you want to delete{" "}
            <span>{equationToDelete?.name}?</span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={() => handleDeleteEquation(true)}
            fullWidth
            variant="contained"
          >
            Confirm
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={() => handleDeleteEquation(false)}
            color="error"
            fullWidth
            variant="outlined"
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </BaseModal>
  );
}
