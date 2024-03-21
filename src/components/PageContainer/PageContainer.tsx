"use client";

import { Container, Grid, Typography } from "@mui/material";
import UserColorDivider from "../UserColorDivider/UserColorDivider";

export default function PageContainer({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <Container disableGutters>
      <Grid container spacing={2} pb={2}>
        <Grid item xs={12}>
          <Typography variant="h1">{title}</Typography>
        </Grid>
        <Grid item xs={12} pb={2}>
          {description && (
            <Typography variant="body1">{description}</Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          <UserColorDivider />
        </Grid>
      </Grid>
      {children}
    </Container>
  );
}
