"use client";

import { Box, Stack, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { coreSelectors } from "@/store/CoreState/selector";
import { useAppSelector } from "@/store/store";
import Reveal from "@/components/Reveal/Reveal";

/** One marketing-style block: a small label, a strong headline, a short blurb with checkmarks, and a visual beside it. */
export default function IntroRow({
  label,
  headline,
  body,
  bullets = [],
  visual,
  visualFirst = false,
}: {
  label: string;
  headline: string;
  body: string;
  bullets?: string[];
  visual: React.ReactNode;
  visualFirst?: boolean;
}) {
  const userColor = useAppSelector(coreSelectors.userColor);

  return (
    <Reveal>
      <Box
        sx={{
          display: "grid",
          alignItems: "center",
          gap: { xs: 3, md: 8 },
          gridTemplateColumns: { xs: "minmax(0, 1fr)", md: "repeat(2, minmax(0, 1fr))" },
        }}
      >
        <Stack spacing={2} sx={{ order: { xs: 1, md: visualFirst ? 2 : 1 } }}>
          <Typography
            sx={{
              color: userColor,
              fontWeight: 600,
              fontSize: "0.8rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {label}
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 500, lineHeight: 1.15 }}>
            {headline}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {body}
          </Typography>
          {bullets.length > 0 && (
            <Stack spacing={1.25} pt={0.5}>
              {bullets.map((bullet) => (
                <Stack key={bullet} direction="row" spacing={1.5} alignItems="flex-start">
                  <CheckCircleIcon sx={{ color: userColor, fontSize: 22, mt: "2px", flexShrink: 0 }} />
                  <Typography variant="body1">{bullet}</Typography>
                </Stack>
              ))}
            </Stack>
          )}
        </Stack>
        <Box sx={{ order: { xs: 2, md: visualFirst ? 1 : 2 } }}>{visual}</Box>
      </Box>
    </Reveal>
  );
}
