"use client";

import { Box, Chip, Paper, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { coreSelectors } from "@/store/CoreState/selector";
import { useAppSelector } from "@/store/store";

function CardShell({ tag, children }: { tag: string; children: React.ReactNode }) {
  const userColor = useAppSelector(coreSelectors.userColor);
  return (
    <Paper
      elevation={6}
      sx={{
        position: "relative",
        p: { xs: 2.5, md: 3.5 },
        pt: { xs: 3.5, md: 4.5 },
        borderRadius: "16px",
        border: `1px solid ${alpha(userColor, 0.5)}`,
      }}
    >
      <Chip
        label={tag}
        size="small"
        sx={{
          position: "absolute",
          top: -14,
          left: 20,
          fontWeight: 500,
          bgcolor: "background.paper",
          border: `1px solid ${alpha(userColor, 0.6)}`,
        }}
      />
      {children}
    </Paper>
  );
}

export function WhyCard() {
  const userColor = useAppSelector(coreSelectors.userColor);
  const rows = [
    { icon: CheckCircleOutlineIcon, when: "It works", then: "I want to know how." },
    { icon: ErrorOutlineIcon, when: "It breaks", then: "I want to know why it ever worked in the first place." },
  ];
  return (
    <CardShell tag="How I think">
      <Stack spacing={2.5}>
        {rows.map(({ icon: Icon, when, then }) => (
          <Stack
            key={when}
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{
              p: 2,
              borderRadius: "8px",
              border: `1px solid ${alpha(userColor, 0.35)}`,
              background: `linear-gradient(160deg, ${alpha(userColor, 0.1)}, transparent 70%)`,
            }}
          >
            <Icon sx={{ color: userColor, fontSize: 30, flexShrink: 0 }} />
            <Stack>
              <Typography variant="subtitle2" color="text.secondary">
                {when}
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 400 }}>
                {then}
              </Typography>
            </Stack>
          </Stack>
        ))}
        <Stack spacing={1}>
          <Typography variant="subtitle1" color="text.secondary">
            That curiosity led me from
          </Typography>
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Chip label="Software development" variant="outlined" sx={{ borderColor: userColor }} />
            <ArrowForwardIcon fontSize="small" sx={{ color: userColor }} />
            <Chip label="CloudOps" sx={{ bgcolor: userColor, color: "#fff" }} />
          </Stack>
        </Stack>
      </Stack>
    </CardShell>
  );
}

function Group({ title, summary }: { title: string; summary: string }) {
  return (
    <Stack spacing={1}>
      <Typography variant="h5" sx={{ fontWeight: 500 }}>
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {summary}
      </Typography>
    </Stack>
  );
}

function Connector() {
  const userColor = useAppSelector(coreSelectors.userColor);
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box sx={{ flex: 1, height: "1px", bgcolor: alpha(userColor, 0.4) }} />
      <Box
        sx={{
          display: "grid",
          placeItems: "center",
          width: 40,
          height: 40,
          borderRadius: "50%",
          color: "#fff",
          bgcolor: userColor,
          transform: "rotate(90deg)",
        }}
      >
        <SyncAltIcon fontSize="small" />
      </Box>
      <Box sx={{ flex: 1, height: "1px", bgcolor: alpha(userColor, 0.4) }} />
    </Stack>
  );
}

export function BothSidesCard() {
  return (
    <CardShell tag="Where I work">
      <Stack spacing={2.5}>
        <Group
          title="Application"
          summary="I've built front ends, back ends, and the databases behind them, from UI components to APIs to data models. I've done a little bit of everything."
        />
        <Connector />
        <Group
          title="Infrastructure"
          summary="I've provisioned and automated the cloud systems those apps run on, with infrastructure as code, containers, and automated pipelines. I also work with the business side, turning requirements into working systems."
        />
      </Stack>
    </CardShell>
  );
}

const PRINCIPLES = [
  "Curiosity",
  "Persistence",
  "A positive attitude",
  "Clear communication",
  "Shared ownership",
];

export function PrinciplesCard() {
  const userColor = useAppSelector(coreSelectors.userColor);
  return (
    <CardShell tag="What I bring to a team">
      <Stack spacing={1.5}>
        {PRINCIPLES.map((principle) => (
          <Stack
            key={principle}
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{
              p: 1.5,
              borderRadius: "8px",
              border: `1px solid ${alpha(userColor, 0.35)}`,
              background: `linear-gradient(160deg, ${alpha(userColor, 0.1)}, transparent 70%)`,
            }}
          >
            <CheckCircleOutlineIcon sx={{ color: userColor }} />
            <Typography variant="h4" sx={{ fontWeight: 400 }}>
              {principle}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </CardShell>
  );
}
