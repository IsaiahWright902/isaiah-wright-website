"use client";

import { coreSelectors } from "@/store/CoreState/selector";
import { Skill } from "@/store/SkillState/reducer";
import { theme } from "@/theme/ThemeRegistry";
import {
  getComplementColor,
  getTextColorBasedOnUserColor,
  hexToRgbA,
} from "@/utils/general-utils";
import {
  Box,
  Button,
  Chip,
  ClickAwayListener,
  Stack,
  Tooltip,
  Typography,
  Zoom,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
  Label,
} from "recharts";

const data = [
  { name: "Proficiency", value: 4 },
  { name: "Years Of Experience", value: 1 },

  //   { name: "Group C", value: 300 },
  //   { name: "Group D", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function UserChip({ skill }: { skill: Skill }) {
  const userColor = useSelector(coreSelectors.userColor);
  const useLightMode = useSelector(coreSelectors.useLightMode);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);

  const handleTooltipClick = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    else setOpen(false);
  };

  const getCellFillColor = (name: string) => {
    if (name === "Proficiency") {
      return userColor;
    } else {
      return getComplementColor(userColor) ?? "white";
    }
  };

  return (
    <>
      <Tooltip
        // open={open}
        // onMouseEnter={() => setOpen(true)}
        // onMouseLeave={() => setOpen(false)}
        // onMouseLeave={handleMouseLeave}
        // onMouseDown={handleTooltipClick}
        componentsProps={{
          tooltip: {
            sx: {
              backgroundColor: "transparent !important",
            },
          },
        }}
        TransitionComponent={Zoom}
        title={
          <>
            <Box
              sx={{
                minWidth: "400px",
                minHeight: "200px",
                overflowY: "hidden",
                background: useLightMode
                  ? theme.palette.black.dark
                  : theme.palette.black.main,
                opacity: 0.97,
                borderRadius: "8px",
              }}
            >
              <Stack spacing={2} padding={2}>
                <Typography textAlign="center" color="white !important">
                  {skill.name}:
                </Typography>
                <Typography>Proficiency: {skill.proficiency}</Typography>
                <Stack alignItems="center" justifyContent="center">
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Legend
                        layout="horizontal"
                        verticalAlign="top"
                        align="center"
                      />
                      <Pie
                        data={data}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        // label={(entry) => entry.value}
                      >
                        {data.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={getCellFillColor(entry.name)}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </Stack>
              </Stack>
            </Box>
          </>
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
    </>
  );
}
