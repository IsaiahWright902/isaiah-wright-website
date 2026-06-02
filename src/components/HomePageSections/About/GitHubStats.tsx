"use client";

import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CodeIcon from "@mui/icons-material/Code";
import StarIcon from "@mui/icons-material/Star";
import FolderIcon from "@mui/icons-material/Folder";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import { coreSelectors } from "@/store/CoreState/selector";
import { useAppSelector } from "@/store/store";

type GitHubStatsData = {
  publicRepos: number;
  totalStars: number;
  commitsThisWeek: number;
};

function useCountUp(target: number, duration = 1000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (target === 0) return;
    const start = Date.now();
    const tick = () => {
      const progress = Math.min((Date.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration]);

  return count;
}

function yearsOfExperience() {
  const ms = Date.now() - new Date("January 2020").getTime();
  return Math.floor(ms / (1000 * 60 * 60 * 24 * 365.25));
}

function StatCard({
  icon,
  value,
  label,
  suffix = "",
  color,
}: {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  color: string;
}) {
  const count = useCountUp(value);

  return (
    <Stack
      alignItems="center"
      spacing={0.5}
      sx={{ flex: 1, minWidth: 80 }}
    >
      <Box sx={{ color, display: "flex" }}>{icon}</Box>
      <Typography variant="h4" sx={{ color, fontWeight: 600, lineHeight: 1 }}>
        {count}{suffix}
      </Typography>
      <Typography
        variant="caption"
        textAlign="center"
        sx={{ color: "text.secondary", lineHeight: 1.3 }}
      >
        {label}
      </Typography>
    </Stack>
  );
}

export default function GitHubStats() {
  const userColor = useAppSelector(coreSelectors.userColor);
  const [stats, setStats] = useState<GitHubStatsData | null>(null);

  useEffect(() => {
    fetch("/api/github-stats")
      .then((r) => r.json())
      .then(setStats)
      .catch(() => {});
  }, []);

  return (
    <Stack
      direction="row"
      sx={{
        mt: 3,
        p: 2,
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
        flexWrap: "wrap",
        gap: 3,
      }}
    >
      <StatCard
        icon={<WorkHistoryIcon fontSize="small" />}
        value={yearsOfExperience()}
        suffix="+"
        label="yrs experience"
        color={userColor}
      />
      <StatCard
        icon={<FolderIcon fontSize="small" />}
        value={stats?.publicRepos ?? 0}
        label="public repos"
        color={userColor}
      />
      <StatCard
        icon={<StarIcon fontSize="small" />}
        value={stats?.totalStars ?? 0}
        label="github stars"
        color={userColor}
      />
      <StatCard
        icon={<CodeIcon fontSize="small" />}
        value={stats?.commitsThisWeek ?? 0}
        label="commits this week"
        color={userColor}
      />
    </Stack>
  );
}
