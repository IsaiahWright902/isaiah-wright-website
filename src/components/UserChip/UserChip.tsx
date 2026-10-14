"use client";

import { coreSelectors } from "@/store/CoreState/selector";
import {
  GetSkillProficiencyDisplay,
  Skill,
  SkillProficiency,
} from "@/store/SkillState/reducer";
import { useAppSelector } from "@/store/store";
import { theme } from "@/theme/ThemeRegistry";
import { getAnalogousColor } from "@/utils/general-utils";
import { Box, Chip, Stack, Tooltip, Typography, Zoom } from "@mui/material";
import { alpha } from "@mui/material/styles";
import React from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

export default function UserChip({ skill }: { skill: Skill }) {
  const userColor = useAppSelector(coreSelectors.userColor);

  const getProficiencyPercent = (val: SkillProficiency) => {
    switch (val) {
      case SkillProficiency.SomeKnowledge:
        return 25;
      case SkillProficiency.Beginner:
        return 50;
      case SkillProficiency.Intermediate:
        return 75;
      case SkillProficiency.Advanced:
        return 100;
      default:
        return 0;
    }
  };

  const calculateExperiencePercentage = (yearsOfExperience: number) => {
    const clampedExperience = Math.min(Math.max(yearsOfExperience, 0), 4);
    const percentage = (clampedExperience / 5) * 100;
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
                    {skill.yearsOfExperience >= 10
                      ? skill.yearsOfExperience + "+"
                      : skill.yearsOfExperience}{" "}
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
          variant="outlined"
          sx={{
            fontSize: "15px",
            cursor: "pointer",
            borderColor: alpha(userColor, 0.6),
            bgcolor: alpha(userColor, 0.08),
            transition: "background-color 0.2s, border-color 0.2s",
            "&:hover": {
              bgcolor: alpha(userColor, 0.24),
              borderColor: userColor,
            },
          }}
        />
      </Tooltip>
    </>
  );
}
