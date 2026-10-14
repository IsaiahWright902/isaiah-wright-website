"use client";

import { useEffect, useState } from "react";
import { Box } from "@mui/material";

const PHRASES = [
  "reliable cloud systems",
  "seamless upgrades",
  "infrastructure as code",
  "automated pipelines",
  "full-stack web apps",
  "secure AWS access",
];

/**
 * Swaps through the things I build, one at a time, each easing in as it arrives. It holds still on the first phrase for visitors who
 * prefer reduced motion. Every phrase is short enough to share one line with "I build" and the smiley, so the line never wraps.
 */
export default function RotatingPhrase({ color }: { color: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % PHRASES.length), 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box component="span" sx={{ display: "block", whiteSpace: "nowrap" }}>
      I build{" "}
      <Box
        key={index}
        component="span"
        sx={{
          color,
          fontWeight: 500,
          animation: "phraseIn 450ms cubic-bezier(0.16, 1, 0.3, 1) both",
          "@media (prefers-reduced-motion: reduce)": { animation: "none" },
        }}
      >
        {PHRASES[index]}
      </Box>{" "}
      :)
    </Box>
  );
}
