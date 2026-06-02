"use client";

import SectionContainer from "@/components/SectionContainer/SectionContainer";
import { Grid, Typography } from "@mui/material";
import ProjectItem from "./ProjectItem";

export type ProjectMapItem = {
  title: string;
  description: string;
  link: string;
};

export default function ProjectsSection() {
  const projects: ProjectMapItem[] = [
    {
      title: "Custom Equation Builder",
      description:
        "A form builder that enables a user to create there own custom forms with their own custom formulas.",
      link: "/custom-equation-builder",
    },
    {
      title: "Github Repo Cleaner",
      description:
        "A simple tool to bulk delete old or unused repositories from your GitHub account. Authentication is handled via GitHub SSO using a GitHub OAuth App that you configure.",
      link: "/git-repo-cleaner",
    },
  ];

  return (
    <SectionContainer title="Projects" subtitle="More coming soon!">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography>
            A collection of side projects I've built to explore ideas, try out new tech, and solve problems I find interesting. More on the way.
          </Typography>
        </Grid>
        {projects.map((project, idx) => (
          <ProjectItem key={idx} project={project} />
        ))}
      </Grid>
    </SectionContainer>
  );
}
