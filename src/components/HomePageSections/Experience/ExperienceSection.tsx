"use client";
import {
  Grid,
  Box,
  Typography,
  Tooltip,
  ToggleButton,
  ToggleButtonGroup,
  useMediaQuery,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import { theme } from "@/theme/ThemeRegistry";
import MLLogoWhite from "@public/madelabs-logo-white.png";
import MLLogoDark from "@public/madelabs-logo-dark.png";
import UWRGLogo from "@public/UWRG-Logo-sm.png";
import BCWLogo from "@public/codeworks.png";
import TylerTechLogo from "@public/tyler-tech-logo.png";
import ExperienceItem, { ExperienceItemDTO, ExperienceView } from "./ExperienceItem";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { coreSelectors } from "@/store/CoreState/selector";
import { useAppSelector } from "@/store/store";

function parseStartDate(str: string): number {
  return new Date(str).getTime();
}

// Chronological order: oldest → newest (left → right on timeline)
const experienceItems: ExperienceItemDTO[] = [
  {
    companyName: "Boise Code Works",
    shortLabel: "Code Works",
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
    highlights: {
      stats: [
        { value: 500, suffix: "+", label: "hours of immersive training" },
        { value: 13, label: "weeks, start to finish" },
      ],
      achievements: [
        {
          icon: RocketLaunchOutlinedIcon,
          title: "Shipped full-stack apps",
          detail: "Built multiple applications with modern frameworks and best practices.",
        },
        {
          icon: GroupsOutlinedIcon,
          title: "Learned to work as a team",
          detail: "Practiced Scrum and sprint planning on every project.",
        },
        {
          icon: AccountTreeOutlinedIcon,
          title: "Design patterns for secure apps",
          detail: "Applied MVC and other patterns to keep architecture secure.",
        },
      ],
      stack: ["Full stack", "MVC", "Agile", "Scrum"],
    },
  },
  {
    companyName: "United Water Restoration Group",
    shortLabel: "UWRG",
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
    highlights: {
      stats: [
        { value: 40, suffix: "%", label: "higher cash job conversion rate" },
        { value: 1.7, prefix: "$", suffix: "M", label: "estimated added annual revenue" },
        { value: 100, suffix: "+", label: "associates trained" },
        { value: 10, suffix: "+", label: "Florida locations trained" },
      ],
      achievements: [
        {
          icon: WorkspacePremiumOutlinedIcon,
          title: "Sole developer, start to finish",
          detail: "Designed and shipped 2 full-stack applications across the entire lifecycle.",
        },
        {
          icon: SchoolOutlinedIcon,
          title: "Got a whole company using it",
          detail: "Ran training workshops so the estimation app was adopted statewide.",
        },
        {
          icon: ForumOutlinedIcon,
          title: "Started with the business",
          detail: "Led requirements sessions to shape the schemas and technical solutions.",
        },
      ],
      stack: ["Vue.js", "Node.js", "Express"],
    },
  },
  {
    companyName: "MadeLabs",
    shortLabel: "MadeLabs",
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
    highlights: {
      stats: [
        { value: 3, label: "months to rebuild an app that surpassed an 8-person, 1-year project" },
        { value: 2, label: "developers on that rebuild, me included" },
      ],
      achievements: [
        {
          icon: SpeedOutlinedIcon,
          title: "Highest ticket velocity on the team",
          detail: "Consistently shipped features across TypeScript, React, Node.js and C#.",
        },
        {
          icon: PaymentsOutlinedIcon,
          title: "Subscriptions, end to end",
          detail: "Integrated Stripe on my own, from recurring billing to secure payment flows.",
        },
        {
          icon: BuildOutlinedIcon,
          title: "Rebuilt the rich text editor",
          detail: "Reworked it in Draft.js with more features and easier long-term upkeep.",
        },
        {
          icon: GroupsOutlinedIcon,
          title: "The go-to teammate",
          detail: "Pair programming, code reviews and sprint planning to lift the team.",
        },
      ],
      stack: ["TypeScript", "React", "Node.js", "C#", "AWS", "Google Cloud", "Stripe", "Draft.js"],
    },
  },
  {
    companyName: "Tyler Technologies",
    shortLabel: "Tyler SWE",
    position: "Software Engineer",
    startDate: "May 2024",
    endDate: "May 2025",
    location: "Remote, United States",
    bulletPoints: [
      "Led multiple code refactoring initiatives that increased processing speed by 80-90% on critical workflows, improving application responsiveness and user experience across key business processes.",
      "Developed documentation strategy with leadership team, reducing onboarding time and improving knowledge transfer across engineering teams, recognized with company award for documentation excellence.",
      "Facilitated technical training sessions for team members on modern development best practices and frameworks, and led daily scrum meetings to drive team alignment and project momentum.",
      "Collaborated with DevOps and infrastructure teams to integrate shared services and APIs, optimizing operational efficiency and building expertise that led to promotion to Cloud Operations Engineer.",
      "Resolved 50+ bug and feature tickets using C# .NET and Angular, improving application functionality and system performance.",
    ],
    logo: TylerTechLogo,
    logoMaxWidth: "325px",
    highlights: {
      stats: [
        { value: "80-90", suffix: "%", label: "faster processing on critical workflows" },
        { value: 50, suffix: "+", label: "bug and feature tickets resolved" },
      ],
      achievements: [
        {
          icon: CodeOutlinedIcon,
          title: "Led multiple successful refactors",
          detail: "Drove the refactoring initiatives behind the 80-90% speedups on critical workflows.",
        },
        {
          icon: EmojiEventsOutlinedIcon,
          title: "Company award for documentation excellence",
          detail: "Built a documentation strategy with leadership that cut onboarding time.",
        },
        {
          icon: TrendingUpOutlinedIcon,
          title: "Promoted to Cloud Operations Engineer",
          detail: "Earned it by working with DevOps on shared services and APIs.",
        },
        {
          icon: SchoolOutlinedIcon,
          title: "Taught the team",
          detail: "Ran training on modern practices and led the daily scrum.",
        },
      ],
      stack: ["C#", ".NET", "Angular", "Scrum"],
    },
  },
  {
    companyName: "Tyler Technologies",
    shortLabel: "Tyler Cloud",
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
      "Modernized critical legacy .NET tool by upgrading outdated SSH libraries and refactoring core logic, improving performance and reliability while resolving multiple years of tech debt. That work became the foundation for organization-wide legacy migration initiative.",
    ],
    logo: TylerTechLogo,
    logoMaxWidth: "325px",
    highlights: {
      stats: [
        { value: 75, suffix: "+", label: "Aurora PostgreSQL clusters upgraded" },
        { value: 0, label: "downtime across all of them" },
        { value: 3, label: "weeks from concept to production" },
      ],
      achievements: [
        {
          icon: LockOutlinedIcon,
          title: "Pioneered secure cross-account access",
          detail: "IAM trust policies and tag-based controls unlocked automation that wasn't possible before.",
        },
        {
          icon: AccountTreeOutlinedIcon,
          title: "Foundation for an org-wide migration",
          detail: "Modernizing a legacy .NET tool cleared years of tech debt and started the initiative.",
        },
        {
          icon: BuildOutlinedIcon,
          title: "Reusable Terraform modules",
          detail: "Standardized AWS provisioning so teams set up faster and more consistently.",
        },
        {
          icon: AutoAwesomeOutlinedIcon,
          title: "AI-assisted engineering",
          detail: "Used LLMs and agentic workflows to speed up automation and code generation.",
        },
      ],
      stack: ["Terraform", "AWS", "IAM", "Rundeck", "Vault", "Python", "Bash", ".NET"],
    },
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
  const [view, setView] = useState<ExperienceView>("highlights");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("experience-view");
      if (saved === "highlights" || saved === "resume") setView(saved);
    } catch {}
  }, []);

  const changeView = (next: ExperienceView | null) => {
    if (!next) return;
    setView(next);
    try {
      localStorage.setItem("experience-view", next);
    } catch {}
  };
  const userColor = useAppSelector(coreSelectors.userColor);
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardHeight, setCardHeight] = useState<number | null>(null);

  // Follows the real height of whichever card is showing, so the page below glides to fit it instead of keeping the tallest card's height.
  useLayoutEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    setCardHeight(el.offsetHeight);
    const observer = new ResizeObserver(() => setCardHeight(el.offsetHeight));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleSelect = (idx: number) => {
    setDirection(idx > selectedIdx ? "right" : "left");
    setSelectedIdx(idx);
  };

  // On a phone there is no Present dot, so the dots spread evenly and the line ends at the last one instead of trailing off past it.
  const positions = isMobile
    ? experienceItems.map((_, i) => 5 + (i / (experienceItems.length - 1)) * 90)
    : dotPositions;

  const progressWidth =
    !isMobile && selectedIdx === experienceItems.length - 1
      ? 90
      : positions[selectedIdx] - 5;

  return (
    <SectionContainer
      title="Experience"
    >
      {/* Timeline */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ position: "relative", height: { xs: 78, md: 80 } }}>
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
              title={`${item.position} · ${item.companyName} · ${item.startDate} - ${item.endDate}`}
              placement="top"
              arrow
            >
            <Box
              onClick={() => handleSelect(idx)}
              sx={{
                position: "absolute",
                left: `${positions[idx]}%`,
                top: 0,
                transform: "translateX(-50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                zIndex: 1,
                gap: 0.5,
                width: { xs: "72px", md: "18%" },
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
              {/* Phone: a short name and the year under each dot, so the timeline explains itself before anything is tapped */}
              <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column", alignItems: "center" }}>
                <Typography
                  variant="caption"
                  textAlign="center"
                  sx={{
                    fontSize: "0.7rem",
                    lineHeight: 1.25,
                    fontWeight: idx === selectedIdx ? 600 : 400,
                    color: idx === selectedIdx ? userColor : "text.secondary",
                    transition: "color 0.25s",
                  }}
                >
                  {item.shortLabel ?? item.companyName}
                </Typography>
                <Typography
                  variant="caption"
                  textAlign="center"
                  sx={{ fontSize: "0.65rem", opacity: idx === selectedIdx ? 0.8 : 0.5 }}
                >
                  {item.startDate.split(" ")[1]}
                </Typography>
              </Box>
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
          <Tooltip title="Present · Tyler Technologies - Cloud Ops Engineer" placement="top" arrow>
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

      <Box sx={{ display: "flex", justifyContent: { xs: "stretch", md: "flex-end" }, mb: 2 }}>
        <ToggleButtonGroup
          exclusive
          size="small"
          value={view}
          onChange={(_, next) => changeView(next)}
          aria-label="Experience view"
          sx={{ width: { xs: "100%", md: "auto" } }}
        >
          <ToggleButton
            value="highlights"
            sx={{
              flex: { xs: 1, md: "none" },
              px: 2.5,
              textTransform: "none",
              "&.Mui-selected, &.Mui-selected:hover": {
                background: alpha(userColor, 0.18),
                borderColor: userColor,
              },
            }}
          >
            Highlights
          </ToggleButton>
          <ToggleButton
            value="resume"
            sx={{
              flex: { xs: 1, md: "none" },
              px: 2.5,
              textTransform: "none",
              "&.Mui-selected, &.Mui-selected:hover": {
                background: alpha(userColor, 0.18),
                borderColor: userColor,
              },
            }}
          >
            Resume bullets
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {/* Active card */}
      <Box
        sx={{
          height: cardHeight ?? "auto",
          overflow: "hidden",
          p: "4px 8px 14px",
          m: "-4px -8px -14px",
          transition: "height 400ms cubic-bezier(0.16, 1, 0.3, 1)",
          "@media (prefers-reduced-motion: reduce)": { transition: "none" },
        }}
      >
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
              <ExperienceItem experienceItem={experienceItems[selectedIdx]} view={view} />
            </Grid>
          </Box>
        </Box>
      </Box>
    </SectionContainer>
  );
}
