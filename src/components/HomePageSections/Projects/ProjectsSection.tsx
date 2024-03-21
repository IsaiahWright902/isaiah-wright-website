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
  ];

  return (
    <SectionContainer title="Projects">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography>
            Welcome to my dynamic project showcase! This site is your gateway to
            witnessing the evolution of my creative endeavors. I built this site
            to support many different side projects all within a single deployed
            environment. Here, I continually add new projects, testing ideas and
            sharing the outcomes with you. Join me on this journey of
            exploration and innovation!
          </Typography>
        </Grid>
        {projects.map((project, idx) => (
          <ProjectItem key={idx} project={project} />
        ))}
      </Grid>
    </SectionContainer>
  );
}
