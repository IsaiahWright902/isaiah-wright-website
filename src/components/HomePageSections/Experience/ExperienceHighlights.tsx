"use client";

import { Box, Chip, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import type { CSSProperties, ElementType } from "react";
import { coreSelectors } from "@/store/CoreState/selector";
import { useAppSelector } from "@/store/store";
import CountUp from "./CountUp";

export type HighlightStat = {
  /** A number counts up on screen. A string (like a range) is shown as written. */
  value: number | string;
  prefix?: string;
  suffix?: string;
  label: string;
};

export type HighlightAchievement = {
  icon: ElementType;
  title: string;
  detail: string;
};

export type HighlightsDTO = {
  stats: HighlightStat[];
  achievements: HighlightAchievement[];
  stack: string[];
};

const rise = (i: number): { className: string; style: CSSProperties } => ({
  className: "hero-rise",
  style: { "--i": i } as CSSProperties,
});

export default function ExperienceHighlights({ highlights }: { highlights: HighlightsDTO }) {
  const userColor = useAppSelector(coreSelectors.userColor);
  const { stats, achievements, stack } = highlights;

  return (
    <Stack spacing={4} pt={2}>
      {stats.length > 0 && (
        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: {
              xs: "repeat(2, minmax(0, 1fr))",
              md: `repeat(${Math.min(stats.length, 4)}, minmax(0, 1fr))`,
            },
          }}
        >
          {stats.map((stat, i) => (
            <Box
              key={stat.label}
              {...rise(i)}
              sx={{
                p: 2,
                borderRadius: "8px",
                border: `1px solid ${alpha(userColor, 0.4)}`,
                background: `linear-gradient(160deg, ${alpha(userColor, 0.12)}, transparent 70%)`,
                gridColumn: { xs: stats.length % 2 === 1 && i === stats.length - 1 ? "1 / -1" : "auto", md: "auto" },
              }}
            >
              <Typography
                component="div"
                sx={{
                  fontSize: "clamp(30px, 4.5vw, 48px)",
                  fontWeight: 600,
                  lineHeight: 1.1,
                  color: userColor,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {typeof stat.value === "number" ? (
                  <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                ) : (
                  `${stat.prefix ?? ""}${stat.value}${stat.suffix ?? ""}`
                )}
              </Typography>
              <Typography variant="body2" color="text.secondary" pt={0.5}>
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      )}

      {achievements.length > 0 && (
        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: { xs: "minmax(0, 1fr)", md: "repeat(2, minmax(0, 1fr))" },
          }}
        >
          {achievements.map((a, i) => {
            const Icon = a.icon;
            return (
              <Stack key={a.title} direction="row" spacing={2} alignItems="flex-start" {...rise(stats.length + i)}>
                <Box
                  sx={{
                    flexShrink: 0,
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    color: userColor,
                    border: `1px solid ${userColor}`,
                    background: alpha(userColor, 0.12),
                  }}
                >
                  <Icon fontSize="small" />
                </Box>
                <Stack>
                  <Typography sx={{ fontWeight: 500 }}>{a.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {a.detail}
                  </Typography>
                </Stack>
              </Stack>
            );
          })}
        </Box>
      )}

      {stack.length > 0 && (
        <Stack direction="row" flexWrap="wrap" gap={1}>
          {stack.map((tech) => (
            <Chip key={tech} label={tech} size="small" variant="outlined" sx={{ borderColor: alpha(userColor, 0.6) }} />
          ))}
        </Stack>
      )}
    </Stack>
  );
}
