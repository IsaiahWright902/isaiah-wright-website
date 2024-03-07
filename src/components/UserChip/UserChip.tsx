"use client";

import { coreSelectors } from "@/store/CoreState/selector";
import { Skill } from "@/store/SkillState/reducer";
import { getTextColorBasedOnUserColor, hexToRgbA } from "@/utils/general-utils";
import { Box, Chip, Paper, Tooltip, Typography, Zoom } from "@mui/material";
import { useSelector } from "react-redux";

export default function UserChip({ skill }: { skill: Skill }) {
  const userColor = useSelector(coreSelectors.userColor);
  const useLightMode = useSelector(coreSelectors.useLightMode);

  return (
    <Tooltip
      TransitionComponent={Zoom}
      title={
        <Box
          sx={{
            minWidth: "400px",
            minHeight: "200px",
          }}
        >
          <Typography>Content here</Typography>
        </Box>
      }
    >
      <Chip
        label={skill?.name}
        sx={{
          background: userColor,
          fontSize: "16px",
          cursor: "pointer",
          color: getTextColorBasedOnUserColor(userColor),
          "&:hover": {
            boxShadow: `0 4px 8px ${
              useLightMode ? "rgba(0, 0, 0, 0.4)" : hexToRgbA("#f0f2f5", 0.4)
            } `,
          },
        }}
      />
    </Tooltip>
  );
}
