"use client";
import { Container, Grid, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { skillSelectors } from "@/store/SkillState/selector";
import UserChip from "@/components/UserChip/UserChip";
import SkillSearchFilters from "./SkillSearchFilters";
import { useEffect, useState } from "react";
import { Skill } from "@/store/SkillState/reducer";
import { searchSelectors } from "@/store/SearchSlice/selector";
import { IsYOEInSearchRange } from "@/store/SearchSlice/reducer";

export default function SkillsSection() {
  const filteredSkills = useFilteredSkillList();

  return (
    <Container
      disableGutters
      //   REMOVE ME
      sx={{
        minHeight: "50vh",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h1" textAlign={{ xs: "center", md: "left" }}>
            Skills
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign={{ xs: "center", md: "left" }}
          >
            (Hire me & help boost these metrics!)
          </Typography>
        </Grid>
        <SkillSearchFilters />

        <Grid item xs={12}>
          <Stack
            direction="row"
            alignItems="center"
            flexWrap="wrap"
            spacing={2}
            pt={2}
            gap="20px"
          >
            {filteredSkills.map((skill, idx) => (
              <UserChip key={idx} skill={skill} />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

function useFilteredSkillList() {
  const skillFilters = useSelector(searchSelectors.skillSearchFilters);
  const allSkills = useSelector(skillSelectors.allSkills);

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
            skillFilters.category === null ||
            x.category === skillFilters.category;

          const proficiencyMatches =
            skillFilters.proficiency === null ||
            x.proficiency === skillFilters.proficiency;

          const yearsOfExperiencePasses =
            skillFilters.yearsOfExperience === null ||
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
