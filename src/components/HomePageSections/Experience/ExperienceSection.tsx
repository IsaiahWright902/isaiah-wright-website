"use client";
import { Grid } from "@mui/material";
import MLLogoWhite from "@public/madelabs-logo-white.png";
import MLLogoDark from "@public/madelabs-logo-dark.png";
import UWRGLogo from "@public/UWRG-Logo-sm.png";
import BCWLogo from "@public/codeworks.png";
import TylerTechLogo from "@public/tyler-tech-logo.png"
import ExperienceItem, { ExperienceItemDTO } from "./ExperienceItem";
import SectionContainer from "@/components/SectionContainer/SectionContainer";

export default function ExperienceSection() {
  const experienceItems: ExperienceItemDTO[] = [
    {
      companyName: "Tyler Technologies",
      position: "Cloud Ops Engineer",
      startDate: "May 2025",
      endDate: "Present",
      location: "Remote, United States",
      bulletPoints: [
        "Achieved zero downtime across 75+ Aurora PostgreSQL clusters by implementing automated blue/green upgrade pipelines for seamless major engine version upgrades.",
        "Delivered full AWS Aurora Blue/Green Deployment automation project using Terraform, IAM, Rundeck, Vault, and API integration from concept to production in 3 weeks.",
        "Pioneered secure AWS cross-account access solution using IAM trust policies and tag-based controls, enabling previously impossible programmatic and local automation workflows.",
        "Designed and maintained Terraform-based Infrastructure as Code (IaC), developing reusable modules to standardize AWS provisioning, reduce manual setup time, and improve configuration consistency across teams.",
        "Leveraged LLMs and agentic workflows in development process to accelerate infrastructure automation, code generation, and complex problem-solving, improving productivity and code quality.",
        "Developed custom Python and Bash automation scripts to extend Terraform functionality and support operational monitoring and remediation tasks.",
        "Modernized critical legacy .NET tool by upgrading outdated SSH libraries and refactoring core logic, improving performance and reliability while resolving multiple years of tech debt—work that became the foundation for organization-wide legacy migration initiative."
      ],
      logo: TylerTechLogo,
      logoMaxWidth: "325px",
    },
    {
      companyName: "Tyler Technologies",
      position: "Software Engineer",
      startDate: "May 2024",
      endDate: "May 2025",
      location: "Remote, United States",
      bulletPoints: [
        "Led multiple code refactoring initiatives that increased processing speed by 80-90% on critical workflows, improving application responsiveness and user experience across key business processes.",
        "Developed documentation strategy with leadership team, reducing onboarding time and improving knowledge transfer across engineering teams—recognized with company award for documentation excellence.",
        "Facilitated technical training sessions for team members on modern development best practices and frameworks, and led daily scrum meetings to drive team alignment and project momentum.",
        "Collaborated with DevOps and infrastructure teams to integrate shared services and APIs, optimizing operational efficiency and building expertise that led to promotion to Cloud Operations Engineer.",
        "Resolved 50+ bug and feature tickets using C# .NET and Angular, improving application functionality and system performance."
      ],
      logo: TylerTechLogo,
      logoMaxWidth: "325px",
    },
    {
      companyName: "MadeLabs",
      position: "Software Engineer",
      startDate: "October 2022",
      endDate: "February 2024",
      location: "Remote, United States",
      bulletPoints: [
        "Rebuilt enterprise application with one other developer in 3 months, resolving critical functionality issues and delivering production-ready solution that surpassed original 8-person, 1-year project.",
        "Developed full-stack features using TypeScript, React.js, Node.js, and C#, consistently achieving highest ticket velocity on team while building RESTful APIs and responsive UIs for client applications.",
        "Independently integrated Stripe payment processor for subscription services end-to-end, enabling recurring revenue functionality with secure, production-ready payment workflows.",
        "Implemented cloud-based solutions on AWS (EC2, S3, Lambda) and Google Cloud Platform for client projects, managing deployments and infrastructure.",
        "Served as technical resource for team members through pair programming, code reviews, and Agile sprint planning ceremonies, fostering knowledge sharing and collaborative problem-solving.",
        "Rebuilt complex rich text editor using Draft.js with enhanced features, improving long-term maintainability and user experience",
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
        "Developed estimation application as sole developer that increased cash job conversion rate by 40%, generating an estimated $1.7M in additional annual revenue.",
        "Designed and developed 2 full-stack applications using Vue.js, Node.js, and Express as only developer at company, managing entire SDLC from concept to production deployment.",
        "Conducted training workshops across 10+ Florida locations for 100+ associates, ensuring widespread adoption and proficiency of estimation application.",
        "Led requirements gathering sessions with stakeholders to define technical solutions and database schemas aligned with business objectives."
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
        "Completed 500+ hours of immersive software development training over 13 weeks.",
        "Developed multiple full-stack applications using modern frameworks and best practices.",
        "Practiced Agile methodologies including Scrum and Sprint planning for team collaboration.",
        "Implemented MVC and other design patterns for secure application architecture."
      ],
      logo: BCWLogo,
      logoMaxWidth: "200px",
    },
  ];

  return (
    <SectionContainer
      title="Experience"
      subtitle="Act now & you could be here at the top!"
    >
      <Grid container spacing={4}>
        {experienceItems.map((item, idx) => (
          <ExperienceItem key={idx} experienceItem={item} />
        ))}
      </Grid>
    </SectionContainer>
  );
}
