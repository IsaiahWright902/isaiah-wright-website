"use client";

import { Stack } from "@mui/material";

import AboutSection from "@/components/HomePageSections/AboutSection";
import SkillsSection from "@/components/HomePageSections/Skills/SkillsSection";
import ExperienceSection from "@/components/HomePageSections/Experience/ExperienceSection";

export default function Home() {
  return (
    <Stack spacing={8}>
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
    </Stack>
  );
}
