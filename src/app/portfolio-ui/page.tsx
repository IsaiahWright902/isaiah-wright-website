"use client";

import { ColorDot } from "@/components/ColorDot/ColorDot";
import UserColorDivider from "@/components/UserColorDivider/UserColorDivider";
import { coreSelectors } from "@/store/CoreState/selector";
import { useAppSelector } from "@/store/store";
import { theme } from "@/theme/ThemeRegistry";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";

export default function PortfolioUIPage() {
  const userColor = useAppSelector(coreSelectors.userColor);

  const colors: { color: string; name: string }[] = [
    {
      color: theme.palette.red.main,
      name: "Red",
    },
    {
      color: theme.palette.green.main,
      name: "Green",
    },
    {
      color: theme.palette.blue.main,
      name: "Blue",
    },
    {
      color: theme.palette.purple.main,
      name: "Purple",
    },
    {
      color: theme.palette.pink.main,
      name: "Pink",
    },
    {
      color: theme.palette.yellow.main,
      name: "Yellow",
    },
    {
      color: theme.palette.orange.main,
      name: "Orange",
    },
    {
      color: theme.palette.customGrey.main,
      name: "Grey",
    },
    {
      color: theme.palette.black.main,
      name: "Black",
    },
  ];

  return (
    <Stack spacing={4}>
      <Stack spacing={1}>
        <Typography variant="h1">Portfolio UI:</Typography>
        <Typography variant="body1">
          Explore the hub of my design choices – a page dedicated to showcasing
          all the UI elements at once. It&apos;s a practical tool for ensuring
          consistency and harmony for this website.
        </Typography>
      </Stack>
      <UserColorDivider />
      <Stack spacing={2}>
        <Typography variant="h3">Typography:</Typography>
        <Stack spacing={1}>
          <Typography variant="h1">H1 Variant</Typography>
          <Typography variant="h2">H2 Variant</Typography>
          <Typography variant="h3">H3 Variant</Typography>
          <Typography variant="h4">H4 Variant</Typography>
          <Typography variant="h5">H5 Variant</Typography>
          <Typography variant="body1">Body 1 Variant</Typography>
          <Typography variant="body2">Body 2 Variant</Typography>
          <Typography variant="subtitle1">Subtitle 1 Variant</Typography>
          <Typography variant="subtitle2">Subtitle 2 Variant</Typography>
        </Stack>
      </Stack>
      <UserColorDivider />
      <Stack spacing={2}>
        <Typography variant="h3">Pallette:</Typography>
        <Container disableGutters>
          <Grid container spacing={4}>
            {colors.map((item, idx) => (
              <ColorDot key={idx} color={item.color} name={item.name} />
            ))}
            <ColorDot color={userColor} name="User Color" />
          </Grid>
        </Container>
      </Stack>
      <UserColorDivider />
      <Stack spacing={2}>
        <Typography variant="h3">Buttons:</Typography>
        <Stack spacing={1} direction="row">
          <Button variant="outlined">Outlined</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="text">Text</Button>
        </Stack>
      </Stack>
      <UserColorDivider />
    </Stack>
  );
}
