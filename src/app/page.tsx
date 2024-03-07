"use client";

import { Stack } from "@mui/material";

import AboutSection from "@/components/HomePageSections/AboutSection";
import SkillsSection from "@/components/HomePageSections/Skills/SkillsSection";

export default function Home() {
  return (
    <Stack spacing={8}>
      <AboutSection />
      <SkillsSection />
    </Stack>
  );
}
