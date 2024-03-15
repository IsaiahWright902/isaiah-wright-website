"use client";
import { Container, Grid, Typography } from "@mui/material";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export default function SectionContainer({
  title,
  subtitle,
  children,
}: SectionHeaderProps) {
  return (
    <Container
      disableGutters
      sx={{
        minHeight: "50vh",
      }}
    >
      <Grid container spacing={2} pb={2}>
        <Grid item xs={12}>
          <Typography variant="h1" textAlign={{ xs: "center", md: "left" }}>
            {title}
          </Typography>
          {subtitle && (
            <Typography
              variant="subtitle1"
              textAlign={{ xs: "center", md: "left" }}
            >
              ({subtitle})
            </Typography>
          )}
        </Grid>
      </Grid>
      {children}
    </Container>
  );
}
