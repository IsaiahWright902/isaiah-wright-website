"use client";

import { Grid, Stack, Box, Typography } from "@mui/material";

export function ColorDot({
  color,
  name,
  size = "50px",
}: {
  color: string;
  name?: string;
  size?: string;
}) {
  return (
    <Grid item xs={3} lg={1}>
      <Stack
        spacing={1}
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Box
          width={size}
          height={size}
          borderRadius="50%"
          sx={{
            background: color,
          }}
        ></Box>

        <Typography variant="subtitle1">{name}</Typography>
      </Stack>
    </Grid>
  );
}
