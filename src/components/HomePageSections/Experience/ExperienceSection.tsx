"use client";

import { Container, Grid, Typography } from "@mui/material";

export default function ExperienceSection() {
  return (
    <Container
      disableGutters
      //   REMOVE ME
      sx={{
        minHeight: "50vh",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h1" textAlign={{ xs: "center", md: "left" }}>
            Experience
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
