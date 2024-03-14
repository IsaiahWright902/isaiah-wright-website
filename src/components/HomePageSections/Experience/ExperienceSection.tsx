"use client";

import { coreSelectors } from "@/store/CoreState/selector";
import { Container, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import MLLogoWhite from "@public/madelabs-logo-white.png";
import MLLogoDark from "@public/madelabs-logo-dark.png";
import UWRGLogo from "@public/UWRG-Logo-sm.png";
import BCWLogo from "@public/codeworks.png";
import ExperienceItem, { ExperienceItemDTO } from "./ExperienceItem";

export default function ExperienceSection() {
  const userColor = useSelector(coreSelectors.userColor);
  const useLightMode = useSelector(coreSelectors.useLightMode);

  const experienceItems: ExperienceItemDTO[] = [
    {
      companyName: "MadeLabs",
      position: "Software Engineer",
      startDate: "October 2022",
      endDate: "February 2024",
      location: "Remote, United States",
      bulletPoints: [
        "Contributed to both front-end and back-end development tasks.",
        "Assist fellow team members and foster positive work relations via teaching.",
        "Proposed enhancements in design and adopted best design principles in line with company's branding guideline.",
        "Maintained existing software systems by identifying and correcting software defects.",
        "Independently executed a comprehensive integration of Stripe as the payment processor for subscription services, achieving seamless functionality.",
        "Revamped a rich text editor using Draft.js, while ensuring long-term maintainability.",
      ],
      logo: MLLogoWhite,
      darkModeLogo: MLLogoDark,
      logoMaxWidth: "400px",
    },
    {
      companyName: "United Water Restoration Group",
      position: "Full-Stack Developer",
      startDate: "April 2021",
      endDate: "October 2022",
      location: "Ormond Beach, Florida",
      bulletPoints: [
        "Created two full-stack applications from concept to production individually.",
        "Oversaw project development milestones from initial steps through final delivery.",
        "Participated in requirements gathering to solidify prerequisites and determine best technical solution to meet business needs.",
        "Maintained clear documentation of system architectures, workflows, and coding standards for reference by other team members.",
        "Assisted in the development of an estimation app that increased cash job sell rate by 20%, contributing to enhanced revenue generation and streamlined operations.",
        "Participated in onboarding of team members, delivering targeted training sessions on two full-stack applications to optimize utilization and productivity.",
      ],
      logo: UWRGLogo,
      logoMaxWidth: "200px",
    },
    {
      companyName: "Boise Code Works",
      position: "Full Stack Software Development Student",
      startDate: "January 2020",
      endDate: "April 2020",
      location: "Boise, Idaho",
      bulletPoints: [
        "13 Week immersive course completed 500+ hours learning and utilizing best practices in software development.",
        "Built full stack applications utilizing modern tech stacks such as JavaScript, .Net, and Vue.js.",
        "Used Scrum and Sprint planning in order to effectively collaborate in a team.",
        "Learned design patterns such as MVC to make an application more secure.",
        "Certificate of Completion (2020)",
      ],
      logo: BCWLogo,
      logoMaxWidth: "200px",
    },
  ];

  return (
    <Container
      disableGutters
      //   REMOVE ME
      sx={{
        minHeight: "50vh",
      }}
    >
      <Grid container spacing={2} pb={2}>
        <Grid item xs={12}>
          <Typography variant="h1" textAlign={{ xs: "center", md: "left" }}>
            Experience
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign={{ xs: "center", md: "left" }}
          >
            (Act now & you could be here at the top!)
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        {experienceItems.map((item, idx) => (
          <ExperienceItem key={idx} experienceItem={item} />
        ))}
      </Grid>
    </Container>
  );
}
