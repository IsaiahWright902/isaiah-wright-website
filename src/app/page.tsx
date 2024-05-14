"use client";

import { Stack } from "@mui/material";

import AboutSection from "@/components/HomePageSections/About/AboutSection";
import SkillsSection from "@/components/HomePageSections/Skills/SkillsSection";
import ExperienceSection from "@/components/HomePageSections/Experience/ExperienceSection";
import ContactSection from "@/components/HomePageSections/Contact/ContactSection";
import ProjectsSection from "@/components/HomePageSections/Projects/ProjectsSection";

export default function Home() {
  return (
    <Stack spacing={8}>
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </Stack>
  );
}
