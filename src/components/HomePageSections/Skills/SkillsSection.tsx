"use client";
import { Grid, Stack, Typography } from "@mui/material";
import { skillSelectors } from "@/store/SkillState/selector";
import UserChip from "@/components/UserChip/UserChip";
import SkillSearchFilters from "./SkillSearchFilters";
import { useEffect, useState } from "react";
import { Skill } from "@/store/SkillState/reducer";
import { searchSelectors } from "@/store/SearchSlice/selector";
import { IsYOEInSearchRange } from "@/store/SearchSlice/reducer";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import { useAppSelector } from "@/store/store";

export default function SkillsSection() {
  const filteredSkills = useFilteredSkillList();

  return (
    <SectionContainer
      title="Skills"
      subtitle="Hire me & help boost these metrics!"
    >
      <Grid container spacing={2}>
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
            {filteredSkills.length >= 1 ? (
              filteredSkills.map((skill, idx) => (
                <UserChip key={idx} skill={skill} />
              ))
            ) : (
              <Stack direction="row" justifyContent="center">
                {" "}
                <Typography textAlign="center">No Results Found :(</Typography>
              </Stack>
            )}
          </Stack>
        </Grid>
      </Grid>
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
