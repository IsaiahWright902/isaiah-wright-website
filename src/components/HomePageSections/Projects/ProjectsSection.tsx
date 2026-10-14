"use client";

import SectionContainer from "@/components/SectionContainer/SectionContainer";
import { Grid, Typography } from "@mui/material";
import ProjectItem from "./ProjectItem";
import DrScreeningShot from "@public/drscreening-site.jpg";
import type { StaticImageData } from "next/image";

export type ProjectMapItem = {
  title: string;
  description: string;
  link: string;
  external?: boolean;
  featured?: boolean;
  image?: StaticImageData;
  imageAlt?: string;
  tags?: string[];
};

const projects: ProjectMapItem[] = [
  {
    title: "D.R. Screening",
    description:
      "A live marketing site for a Palm Coast screen repair and rescreening company. I built it, host it and maintain it, from the service pages to the deploy pipeline.",
    link: "https://dr-screening.com",
    external: true,
    featured: true,
    image: DrScreeningShot,
    imageAlt: "The D.R. Screening website home page",
    tags: ["Next.js", "Material UI", "Docker", "Terraform", "Cloud Run"],
  },
  {
    title: "Custom Equation Builder",
    description:
      "A form builder that lets a user create their own custom forms with their own custom formulas.",
    link: "/custom-equation-builder",
    tags: ["React", "Redux", "mathjs"],
  },
  {
    title: "Github Repo Cleaner",
    description:
      "A simple tool to bulk delete old or unused repositories from your GitHub account. Authentication is handled via GitHub SSO using a GitHub OAuth App that you configure.",
    link: "/git-repo-cleaner",
    tags: ["Next.js", "GitHub OAuth"],
  },
];

export default function ProjectsSection() {
  return (
    <SectionContainer title="Projects" subtitle="More coming soon!">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography>
            A collection of side projects I&apos;ve built to explore ideas, try
            out new tech, and solve problems I find interesting. More on the
            way.
          </Typography>
        </Grid>
        {projects.map((project) => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </Grid>
    </SectionContainer>
  );
}
