"use client";
import { Grid, Box, Typography, Tooltip, useMediaQuery } from "@mui/material";
import { theme } from "@/theme/ThemeRegistry";
import MLLogoWhite from "@public/madelabs-logo-white.png";
import MLLogoDark from "@public/madelabs-logo-dark.png";
import UWRGLogo from "@public/UWRG-Logo-sm.png";
import BCWLogo from "@public/codeworks.png";
import TylerTechLogo from "@public/tyler-tech-logo.png";
import ExperienceItem, { ExperienceItemDTO } from "./ExperienceItem";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import { useState, useRef, useLayoutEffect } from "react";
import { coreSelectors } from "@/store/CoreState/selector";
import { useAppSelector } from "@/store/store";

function parseStartDate(str: string): number {
  return new Date(str).getTime();
}

// Chronological order: oldest → newest (left → right on timeline)
const experienceItems: ExperienceItemDTO[] = [
  {
    companyName: "Boise Code Works",
    position: "Full Stack Dev Student",
    startDate: "January 2020",
    endDate: "April 2020",
    location: "Boise, Idaho",
    bulletPoints: [
      "Completed 500+ hours of immersive software development training over 13 weeks.",
      "Developed multiple full-stack applications using modern frameworks and best practices.",
      "Practiced Agile methodologies including Scrum and Sprint planning for team collaboration.",
      "Implemented MVC and other design patterns for secure application architecture.",
    ],
    logo: BCWLogo,
    logoMaxWidth: "200px",
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
      "Led requirements gathering sessions with stakeholders to define technical solutions and database schemas aligned with business objectives.",
    ],
    logo: UWRGLogo,
    logoMaxWidth: "200px",
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
      "Rebuilt complex rich text editor using Draft.js with enhanced features, improving long-term maintainability and user experience.",
    ],
    logo: MLLogoWhite,
    darkModeLogo: MLLogoDark,
    logoMaxWidth: "400px",
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
      "Resolved 50+ bug and feature tickets using C# .NET and Angular, improving application functionality and system performance.",
    ],
    logo: TylerTechLogo,
    logoMaxWidth: "325px",
  },
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
      "Modernized critical legacy .NET tool by upgrading outdated SSH libraries and refactoring core logic, improving performance and reliability while resolving multiple years of tech debt—work that became the foundation for organization-wide legacy migration initiative.",
    ],
    logo: TylerTechLogo,
    logoMaxWidth: "325px",
  },
];

// Proportional positions: span from first start date → today (Present dot at 95%)
const startTimes = experienceItems.map((item) => parseStartDate(item.startDate));
const minTime = startTimes[0];
const maxTime = Date.now();
const dotPositions = startTimes.map(
  (t) => 5 + ((t - minTime) / (maxTime - minTime)) * 90
);

export default function ExperienceSection() {
  const [selectedIdx, setSelectedIdx] = useState(experienceItems.length - 1);
  const [direction, setDirection] = useState<"right" | "left">("right");
  const userColor = useAppSelector(coreSelectors.userColor);
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardMinHeight, setCardMinHeight] = useState(0);

  useLayoutEffect(() => {
    if (cardRef.current) {
      setCardMinHeight((prev) => Math.max(prev, cardRef.current!.offsetHeight));
    }
  }, [selectedIdx]);

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleSelect = (idx: number) => {
    setDirection(idx > selectedIdx ? "right" : "left");
    setSelectedIdx(idx);
  };

  const progressWidth =
    !isMobile && selectedIdx === experienceItems.length - 1
      ? 90
      : dotPositions[selectedIdx] - 5;

  return (
    <SectionContainer
      title="Experience"
    >
      {/* Timeline */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ position: "relative", height: { xs: 44, md: 80 } }}>
          {/* Gray background line */}
          <Box
            sx={{
              position: "absolute",
              top: 12,
              left: "5%",
              right: "5%",
              height: 2,
              bgcolor: "divider",
            }}
          />
          {/* Colored progress fill */}
          <Box
            sx={{
              position: "absolute",
              top: 12,
              left: "5%",
              width: `${progressWidth}%`,
              height: 2,
              bgcolor: userColor,
              transition: "width 0.4s ease",
            }}
          />

          {experienceItems.map((item, idx) => (
            <Tooltip
              key={idx}
              title={`${item.position} · ${item.companyName} · ${item.startDate} – ${item.endDate}`}
              placement="top"
              arrow
            >
            <Box
              onClick={() => handleSelect(idx)}
              sx={{
                position: "absolute",
                left: `${dotPositions[idx]}%`,
                top: 0,
                transform: "translateX(-50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                zIndex: 1,
                gap: 0.5,
                width: { xs: "44px", md: "18%" },
                minHeight: 44,
                justifyContent: "flex-start",
                pt: "2px",
                "&:hover .dot": { borderColor: userColor },
              }}
            >
              <Box
                className="dot"
                sx={{
                  width: { xs: 22, md: 20 },
                  height: { xs: 22, md: 20 },
                  borderRadius: "50%",
                  border: "2px solid",
                  borderColor: idx === selectedIdx ? userColor : "text.disabled",
                  bgcolor: idx === selectedIdx ? userColor : "background.paper",
                  transition: "border-color 0.25s ease, background-color 0.25s ease",
                  transform: idx === selectedIdx ? undefined : "scale(1)",
                  animation: idx === selectedIdx ? "dotPulse 1.5s ease-in-out infinite" : "none",
                  flexShrink: 0,
                }}
              />
              {/* Labels: desktop only */}
              <Box sx={{ display: { xs: "none", md: "contents" } }}>
                <Typography
                  variant="caption"
                  textAlign="center"
                  sx={{
                    lineHeight: 1.3,
                    fontWeight: idx === selectedIdx ? 600 : 400,
                    color: idx === selectedIdx ? userColor : "text.secondary",
                    transition: "color 0.25s",
                    display: "block",
                  }}
                >
                  {item.position}
                </Typography>
                <Typography
                  variant="caption"
                  textAlign="center"
                  sx={{
                    opacity: idx === selectedIdx ? 0.7 : 0.4,
                    fontSize: "0.65rem",
                    transition: "opacity 0.25s",
                    display: "block",
                  }}
                >
                  {item.startDate}
                </Typography>
              </Box>
            </Box>
            </Tooltip>
          ))}

          {/* Present dot — desktop only */}
          <Tooltip title="Present · Tyler Technologies – Cloud Ops Engineer" placement="top" arrow>
          <Box
            onClick={() => handleSelect(experienceItems.length - 1)}
            sx={{
              display: { xs: "none", md: "flex" },
              position: "absolute",
              left: "95%",
              top: 0,
              transform: "translateX(-50%)",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
              zIndex: 1,
              gap: 0.5,
              width: "10%",
              pt: "2px",
            }}
          >
            <Box
              sx={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                border: "2px solid",
                borderColor: userColor,
                bgcolor: selectedIdx === experienceItems.length - 1 ? userColor : "background.paper",
                transition: "background-color 0.25s ease",
                transform: selectedIdx === experienceItems.length - 1 ? undefined : "scale(1)",
                animation: selectedIdx === experienceItems.length - 1 ? "dotPulse 1.5s ease-in-out infinite" : "none",
                flexShrink: 0,
              }}
            />
            <Typography
              variant="caption"
              textAlign="center"
              sx={{
                lineHeight: 1.3,
                fontWeight: selectedIdx === experienceItems.length - 1 ? 600 : 400,
                color: selectedIdx === experienceItems.length - 1 ? userColor : "text.secondary",
                transition: "color 0.25s",
                display: "block",
              }}
            >
              Present
            </Typography>
            <Typography
              variant="caption"
              textAlign="center"
              sx={{
                opacity: selectedIdx === experienceItems.length - 1 ? 0.7 : 0.4,
                fontSize: "0.65rem",
                transition: "opacity 0.25s",
                display: "block",
              }}
            >
              {new Date().toLocaleString("default", { month: "long", year: "numeric" })}
            </Typography>
          </Box>
          </Tooltip>
        </Box>
      </Box>

      {/* Active card */}
      <Box sx={{ minHeight: cardMinHeight }}>
        <Box ref={cardRef}>
          <Box
            key={selectedIdx}
            sx={{
              animation:
                direction === "right"
                  ? "slideInFromRight 0.3s ease"
                  : "slideInFromLeft 0.3s ease",
            }}
          >
            <Grid container spacing={4}>
              <ExperienceItem experienceItem={experienceItems[selectedIdx]} />
            </Grid>
          </Box>
        </Box>
      </Box>
    </SectionContainer>
  );
}
