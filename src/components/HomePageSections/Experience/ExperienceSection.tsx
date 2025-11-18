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
        "Engineered secure AWS cross-account access using IAM trust policies and tag-based controls, enabling local and programmatic automation.",
        "Delivered a full AWS Aurora Blue/Green Deployment automation project (Terraform, IAM, Rundeck, Vault, API integration) from concept to production within a three-week timeline.",
        "Achieved zero downtime across 75+ Aurora PostgreSQL clusters by implementing automated blue/green upgrade pipelines, ensuring seamless major engine version upgrades.",
        "Modernized a legacy .NET tool by upgrading outdated SSH libraries and refactoring core logic, improving performance and reliability resolving multiple years of tech debt.",
        "Designed and maintained Terraform-based Infrastructure as Code (IaC) to standardize AWS provisioning, reduce manual setup time, and improve configuration consistency.",
        "Develop custom Python and Bash automation scripts to extend Terraform functionality and support operational monitoring and remediation tasks.",
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
        "Resolved bug and feature tickets using C# .NET, and Angular enhancing application functionality and user experience by systematically identifying and addressing issues to improve overall system performance.",
        "Led multiple code refactors, breaking code into cleaner, more readable components, resulting in an 80% increase in processing speed on key workflows, which significantly improved application responsiveness.",
        "Collaborated with cross-departmental teams to understand and integrate shared and external services, effectively sharing insights and best practices to enhance overall operational efficiency.",
        "Assisted in developing a comprehensive documentation strategy in collaboration with leadership, streamlining processes and improving team knowledge sharing and onboarding for new members.",
        "Facilitated team training sessions, providing tailored learning resources on modern best practices and fostering a culture of continuous improvement and technical growth.",
        "Led daily morning stand-up/scrum meetings, ensuring team alignment, task clarity, and efficient sprint progress tracking.",
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
        "Collaborated on both front-end and back-end tasks, leveraging expertise in technologies such as Typescript, React.js, Node.js, C# and many others, to deliver robust and integrated solutions.",
        "Performed ongoing maintenance on existing software systems, proactively identifying and resolving software defects to ensure optimal performance and user satisfaction.",
        "Provided tailored solutions for Madelabs' clients, ensuring satisfaction and project success through effective communication and problem-solving.",
        "Assist fellow team members and foster positive work relations via teaching",
        "Independently executed a comprehensive integration of Stripe as the payment processor for subscription services, achieving seamless functionality.",
        "Revamped a rich text editor using Draft.js, while ensuring long-term scalability and maintainability",
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
        "Independently conceived, designed, and developed two full-stack applications utilizing Vue.js for frontend and Node.js for backend within a year timeframe.",
        "Led all phases of the development lifecycle, from initial concept to production deployment, ensuring adherence to project timelines and quality standards.",
        "Participated in requirements gathering to solidify prerequisites and determine best technical solution to meet business needs.",
        "Maintained clear documentation of system architectures, workflows, and coding standards for reference by other team members.",
        "Assisted in the development of an estimation app that increased cash job sell rate by 20%, contributing to enhanced revenue generation and streamlined operations.",
        " Conducted comprehensive training workshops for associates across various locations in Florida, showcasing essential features and best practices of our estimation app. Traveled extensively to ensure widespread adoption and proficiency among team members",
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
