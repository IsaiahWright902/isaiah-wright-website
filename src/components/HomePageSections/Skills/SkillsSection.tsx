"use client";
import { Grid, Paper, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { coreSelectors } from "@/store/CoreState/selector";
import { skillSelectors } from "@/store/SkillState/selector";
import UserChip from "@/components/UserChip/UserChip";
import SkillSearchFilters from "./SkillSearchFilters";
import { useEffect, useState } from "react";
import { Skill, SkillCategory } from "@/store/SkillState/reducer";
import { searchSelectors } from "@/store/SearchSlice/selector";
import { IsYOEInSearchRange } from "@/store/SearchSlice/reducer";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import { useAppSelector } from "@/store/store";

const CATEGORY_ORDER: { category: SkillCategory; label: string }[] = [
  { category: SkillCategory.FrontEnd, label: "Front End" },
  { category: SkillCategory.BackEnd, label: "Back End" },
  { category: SkillCategory.Language, label: "Languages" },
  { category: SkillCategory.Mobile, label: "Mobile" },
  { category: SkillCategory.DatabaseTechnology, label: "Databases" },
  { category: SkillCategory.CloudService, label: "Cloud Services" },
  { category: SkillCategory.Infrastructure, label: "DevOps and Infrastructure" },
  { category: SkillCategory.Other, label: "Other" },
  { category: SkillCategory.SoftSkill, label: "Soft Skills" },
];

export default function SkillsSection() {
  const [view, setView] = useState<"category" | "list">("category");
  const filteredSkills = useFilteredSkillList();
  const userColor = useAppSelector(coreSelectors.userColor);
  const total = useAppSelector(skillSelectors.allSkills).length;

  return (
    <SectionContainer
      title="Skills"
      subtitle="Hire me & help boost these metrics!"
    >
      <Paper
        elevation={6}
        sx={{
          p: { xs: 2.5, md: 3.5 },
          borderRadius: "16px",
          border: `1px solid ${alpha(userColor, 0.5)}`,
        }}
      >
        <Grid container spacing={2}>
          <SkillSearchFilters />
          <Grid item xs={12}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
              gap={1}
              pt={1}
            >
              <Typography variant="body2" color="text.secondary">
                Showing {filteredSkills.length} of {total}. Hover a skill for details.
              </Typography>
              <ToggleButtonGroup
                exclusive
                size="small"
                value={view}
                onChange={(_, next) => next && setView(next)}
                aria-label="Skill layout"
              >
                <ToggleButton value="category">By category</ToggleButton>
                <ToggleButton value="list">A to Z</ToggleButton>
              </ToggleButtonGroup>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            {filteredSkills.length === 0 ? (
              <Typography color="text.secondary">No Results Found :(</Typography>
            ) : view === "list" ? (
              <Stack direction="row" flexWrap="wrap" gap={1.25}>
                {filteredSkills.map((skill) => (
                  <UserChip key={skill.name} skill={skill} />
                ))}
              </Stack>
            ) : (
              <Stack spacing={2.5}>
                {CATEGORY_ORDER.map(({ category, label }) => {
                  const group = filteredSkills.filter((x) => x.category === category);
                  if (group.length === 0) return null;
                  return (
                    <Stack key={label} spacing={1}>
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
                      <Stack direction="row" flexWrap="wrap" gap={1.25}>
                        {group.map((skill) => (
                          <UserChip key={skill.name} skill={skill} />
                        ))}
                      </Stack>
                    </Stack>
                  );
                })}
              </Stack>
            )}
          </Grid>
        </Grid>
      </Paper>
    </SectionContainer>
  );
}

function useFilteredSkillList() {
  const skillFilters = useAppSelector(searchSelectors.skillSearchFilters);
  const allSkills = useAppSelector(skillSelectors.allSkills);

  const [filteredSkills, setFilteredSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const normalizedSearch = skillFilters.search.toLowerCase();
    setFilteredSkills(
      allSkills
        .filter((x) => {
          const matchesSearch = x.name
            .toLocaleLowerCase()
            .includes(normalizedSearch);

          const categoryMatches =
            skillFilters.category === "" ||
            x.category === skillFilters.category;

          const proficiencyMatches =
            skillFilters.proficiency === "" ||
            x.proficiency === skillFilters.proficiency;

          const yearsOfExperiencePasses =
            skillFilters.yearsOfExperience === "" ||
            IsYOEInSearchRange(
              skillFilters.yearsOfExperience,
              x.yearsOfExperience
            );

          return (
            matchesSearch &&
            categoryMatches &&
            proficiencyMatches &&
            yearsOfExperiencePasses
          );
        })
        .sort((a, b) => a.name.localeCompare(b.name))
    );
  }, [skillFilters, allSkills]);

  return filteredSkills;
}
