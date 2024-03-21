"use client";

import { coreSelectors } from "@/store/CoreState/selector";
import { useAppSelector } from "@/store/store";
import { theme } from "@/theme/ThemeRegistry";
import {
  CustomEquation,
  getOperatorDisplay,
} from "@/utils/custom-equation-utils";
import { getAnalogousColor } from "@/utils/general-utils";
import {
  useMediaQuery,
  Box,
  Grid,
  Stack,
  Typography,
  IconButton,
  TextField,
  Tooltip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CustomEquationItem({
  customEquation,
  handleInputChange,
}: {
  customEquation: CustomEquation;
  handleInputChange: (id: number, index: number, value: number) => void;
}) {
  const userColor = useAppSelector(coreSelectors.userColor);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const gridSize = 12 / (customEquation.items.length + 1);
  return (
    <Box
      sx={{
        border: `2px solid ${getAnalogousColor(userColor)}`,
        padding: "15px",
        borderRadius: "8px",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            justifyContent="space-between"
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography variant="h4">{customEquation.name}</Typography>
              <Tooltip title="Edit Equation">
                <IconButton>
                  <EditIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Stack>

            <Stack justifyContent="flex-end">
              <Tooltip title="Delete Equation">
                <IconButton>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>
        </Grid>
        {customEquation.items.map((item, idx) => (
          <Grid key={idx} item xs={isMobile ? 12 : gridSize}>
            <TextField
              InputProps={{
                inputProps: { min: 0 },
              }}
              value={item.value}
              onChange={(e) =>
                handleInputChange(
                  customEquation.id,
                  idx,
                  parseFloat(e.target.value)
                )
              }
              type="number"
              fullWidth
              variant="standard"
              label={`${item.label} ${getOperatorDisplay(item.operator)}`}
            />
          </Grid>
        ))}
        <Grid item xs={isMobile ? 12 : gridSize}>
          <Stack direction="row" alignItems="center"></Stack>

          <TextField
            fullWidth
            value={customEquation.result.value}
            disabled
            variant="outlined"
            label={customEquation.result.label}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
