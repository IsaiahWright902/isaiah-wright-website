"use client";

import { coreSelectors } from "@/store/CoreState/selector";
import {
  GetSkillProficiencyDisplay,
  Skill,
  SkillProficiency,
} from "@/store/SkillState/reducer";
import { theme } from "@/theme/ThemeRegistry";
import {
  getAnalogousColor,
  getTextColorBasedOnUserColor,
  hexToRgbA,
} from "@/utils/general-utils";
import {
  Box,
  Chip,
  Stack,
  Tooltip,
  Typography,
  Zoom,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

export default function UserChip({ skill }: { skill: Skill }) {
  const userColor = useSelector(coreSelectors.userColor);
  const useLightMode = useSelector(coreSelectors.useLightMode);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const getProficiencyPercent = (val: SkillProficiency) => {
    switch (val) {
      case SkillProficiency.Beginner:
        return 33.33;
      case SkillProficiency.Intermediate:
        return 66.66;
      case SkillProficiency.Advanced:
        return 100;
      default:
        return 0;
    }
  };

  const calculateExperiencePercentage = (yearsOfExperience: number) => {
    const clampedExperience = Math.min(Math.max(yearsOfExperience, 0), 4);
    const percentage = (clampedExperience / 4) * 100;
    return Math.round(percentage * 100) / 100;
  };

  const getEndAngle = (val: number) => {
    return val < 100 ? 360 * (val / 100) : 360;
  };

  const pData = [
    { name: "Proficiency", value: getProficiencyPercent(skill.proficiency) },
  ];

  const yData = [
    {
      name: "Years Of Experience",
      value: calculateExperiencePercentage(skill.yearsOfExperience),
    },
  ];

  const [open, setOpen] = useState(false);

  const handleTooltipClick = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    else setOpen(false);
  };

  const analogousColor = getAnalogousColor(userColor);

  return (
    <>
      <Tooltip
        componentsProps={{
          tooltip: {
            sx: {
              backgroundColor: "transparent ",
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
                background: theme.palette.customGrey.dark,
                opacity: 0.97,
                borderRadius: "8px",
              }}
            >
              <Stack spacing={2} padding={2}>
                <Typography textAlign="center" color="white ">
                  {skill.name}:
                </Typography>

                <Stack
                  direction="row"
                  alignItems="baseline"
                  justifyContent="center"
                  spacing={1}
                >
                  <Box
                    width="12px"
                    height="12px"
                    sx={{
                      background: userColor,
                    }}
                  ></Box>
                  <Typography variant="subtitle1" color={`${userColor} `}>
                    Proficiency:
                  </Typography>
                  <Typography variant="subtitle1" color="white ">
                    {GetSkillProficiencyDisplay(skill.proficiency)}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="baseline"
                  justifyContent="center"
                  spacing={1}
                >
                  <Box
                    width="12px"
                    height="12px"
                    sx={{
                      background: analogousColor,
                    }}
                  ></Box>
                  <Typography variant="subtitle1" color={analogousColor}>
                    Years of Experience:
                  </Typography>
                  <Typography variant="subtitle1" color="white ">
                    {skill.yearsOfExperience}{" "}
                    {skill.yearsOfExperience > 1 ? "Years" : "Year"}
                  </Typography>
                </Stack>

                <Stack alignItems="center" justifyContent="center">
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={pData}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={90}
                        fill={userColor}
                        startAngle={0}
                        endAngle={getEndAngle(pData[0].value)}
                      ></Pie>
                      <Pie
                        data={yData}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={50}
                        fill={analogousColor}
                        startAngle={0}
                        endAngle={getEndAngle(yData[0].value)}
                      />
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
