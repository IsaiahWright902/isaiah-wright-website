"use client";
import { Box, Grid, Stack, Typography, Chip, List, ListItem, ListItemText } from "@mui/material";
import UserColorDivider from "@/components/UserColorDivider/UserColorDivider";
import PageContainer from "@/components/PageContainer/PageContainer";
import { useAppSelector } from "@/store/store";
import { coreSelectors } from "@/store/CoreState/selector";
import { getTextColorBasedOnUserColor, hexToRgbA } from "@/utils/general-utils";

export default function OverviewPage() {
  const userColor = useAppSelector(coreSelectors.userColor);
  const useLightMode = useAppSelector(coreSelectors.useLightMode);

  const frontendTech = ["Next.js 14", "TypeScript", "Redux Toolkit", "Material-UI", "Emotion", "React Hook Form", "Zod"];
  const backendTech = ["Next.js API Routes", "SendGrid Mail API"];
  const testingTech = ["Jest", "React Testing Library"];
  const devOpsTech = ["Docker", "GitHub Actions", "GCR", "Google Cloud Run", "Terraform"];

  const features = [
    { title: "Theme Customization", desc: "9 preset themes plus custom color picker with dynamic UI updates" },
    { title: "Light/Dark Mode", desc: "Persistent preferences using Redux Persist" },
    { title: "Interactive Skills", desc: "Searchable/filterable skills with proficiency visualization" },
    { title: "Contact Form", desc: "Validation and email delivery via SendGrid API" },
    { title: "Interactive Projects", desc: "Live demos including Custom Equation Builder and GitHub Repo Cleaner" },
    { title: "Responsive Design", desc: "Mobile-first approach with Material-UI breakpoints" },
    { title: "Performance Optimized", desc: "SSR with Next.js and optimized asset delivery" },
  ];

  const architecturePoints = [
    "Component-Driven Design - Modular, reusable components",
    "Type Safety - Full TypeScript implementation",
    "State Persistence - User preferences synced across sessions",
    "API Integration - RESTful design with error handling and validation",
    "Automated Workflows - PR automation with Docker validation and Dependabot",
  ];

  return (
    <PageContainer
      title="Overview"
      description="A modern, interactive portfolio website showcasing professional experience, technical skills, and projects. Built with a focus on user customization, performance, and clean architecture, demonstrating full-stack development capabilities from frontend design to cloud deployment."
    >
      <Stack spacing={6}>
        {/* Key Features */}
        <Stack spacing={3} pt={3}>
          <Typography variant="h3">Key Features:</Typography>
          <Grid container spacing={2}>
            {features.map((feature, idx) => (
              <Grid item xs={12} sm={6} key={idx}>
                <Box>
                  <Typography variant="h6" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Stack>

        <UserColorDivider />

        <Stack spacing={3}>
          <Typography variant="h3">Tech Stack:</Typography>

          <Box>
            <Typography variant="h6" gutterBottom>
              Frontend
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {frontendTech.map((tech, idx) => (
                <Chip
                  key={idx}
                  label={tech}
                  size="small"
                  sx={{
                    cursor: "pointer",
                    background: userColor,
                    color: getTextColorBasedOnUserColor(userColor),
                    "&:hover": {
                      boxShadow: `0 4px 8px ${
                        useLightMode ? "rgba(0, 0, 0, 0.4)" : hexToRgbA("#f0f2f5", 0.4)
                      }`,
                    },
                  }}
                />
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              Backend
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {backendTech.map((tech, idx) => (
                <Chip
                  key={idx}
                  label={tech}
                  size="small"
                  sx={{
                    cursor: "pointer",
                    background: userColor,
                    color: getTextColorBasedOnUserColor(userColor),
                    "&:hover": {
                      boxShadow: `0 4px 8px ${
                        useLightMode ? "rgba(0, 0, 0, 0.4)" : hexToRgbA("#f0f2f5", 0.4)
                      }`,
                    },
                  }}
                />
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              Testing
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {testingTech.map((tech, idx) => (
                <Chip
                  key={idx}
                  label={tech}
                  size="small"
                  sx={{
                    cursor: "pointer",
                    background: userColor,
                    color: getTextColorBasedOnUserColor(userColor),
                    "&:hover": {
                      boxShadow: `0 4px 8px ${
                        useLightMode ? "rgba(0, 0, 0, 0.4)" : hexToRgbA("#f0f2f5", 0.4)
                      }`,
                    },
                  }}
                />
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              DevOps & Deployment
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {devOpsTech.map((tech, idx) => (
                <Chip
                  key={idx}
                  label={tech}
                  size="small"
                  sx={{
                    background: userColor,
                    color: getTextColorBasedOnUserColor(userColor),
                    "&:hover": {
                      boxShadow: `0 4px 8px ${
                        useLightMode ? "rgba(0, 0, 0, 0.4)" : hexToRgbA("#f0f2f5", 0.4)
                      }`,
                    },
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Stack>

        <UserColorDivider />

        {/* Architecture Highlights */}
        <Stack spacing={3}>
          <Typography variant="h3">Architecture Highlights:</Typography>
          <List dense>
            {architecturePoints.map((point, idx) => (
              <ListItem key={idx} disableGutters>
                <ListItemText
                  primary={point.split(" - ")[0]}
                  secondary={point.split(" - ")[1]}
                />
              </ListItem>
            ))}
          </List>
        </Stack>

        <UserColorDivider />

        {/* Infrastructure & CloudOps */}
        <Stack spacing={3}>
          <Typography variant="h3">Infrastructure & CloudOps:</Typography>

          <Stack spacing={2}>
            <Typography variant="h6">Cloud Architecture</Typography>
            <Typography variant="body2" color="text.secondary">
              This portfolio is currently hosted on Google Cloud Run for cost efficiency,
              but includes full Terraform infrastructure code demonstrating AWS deployment capabilities.
            </Typography>
          </Stack>

          <Stack spacing={2}>
            <Typography variant="subtitle1" fontWeight="bold">
              Current Deployment (GCP)
            </Typography>
            <List dense>
              <ListItem disableGutters>
                <ListItemText
                  primary="Platform"
                  secondary="Google Cloud Run (serverless containers)"
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText
                  primary="Scaling"
                  secondary="Automatic 0-N instances based on traffic"
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText
                  primary="Cost"
                  secondary="~$3-5/month with serverless pricing"
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText
                  primary="Deployment"
                  secondary="Automated via GitHub Actions to GCR → Cloud Run"
                />
              </ListItem>
            </List>
          </Stack>

          <Stack spacing={2}>
            <Typography variant="subtitle1" fontWeight="bold">
              Alternative Infrastructure (AWS - Terraform)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The /terraform directory contains complete Infrastructure as Code for AWS deployment:
            </Typography>
            <List dense>
              <ListItem disableGutters>
                <ListItemText primary="Custom Terraform modules for networking, security, compute, and container registry" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Custom VPC with public/private subnets and routing" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="EC2 instances with Docker runtime" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="ECR for Docker image storage" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Security groups with least-privilege access controls" />
              </ListItem>
            </List>
          </Stack>

          <Box sx={{ bgcolor: "action.hover", p: 2, borderRadius: 1 }}>
            <Typography variant="subtitle2" gutterBottom fontWeight="bold">
              Why GCP over AWS for this project?
            </Typography>
            <Typography variant="body2">
              While the AWS infrastructure demonstrates complex IaC capabilities, Cloud Run&apos;s
              serverless model provides 60-70% cost reduction, zero infrastructure maintenance,
              automatic scaling from zero, and is better suited for a low-traffic portfolio site.
            </Typography>
          </Box>
        </Stack>

        <UserColorDivider />

        {/* Project Structure */}
        <Stack spacing={3}>
          <Typography variant="h3">Project Structure:</Typography>
          <Box
            component="pre"
            sx={{
              bgcolor: "background.paper",
              p: 2,
              borderRadius: 1,
              overflow: "auto",
              fontSize: "0.875rem",
              border: 1,
              borderColor: "divider"
            }}
          >
{`.
├── src/
│   ├── app/                    # Next.js app router pages
│   ├── components/             # Reusable React components
│   │   ├── HomePageSections/   # Main portfolio sections
│   │   ├── Modals/             # Modal components
│   │   └── Navbar/             # Navigation components
│   ├── store/                  # Redux state management
│   ├── theme/                  # MUI theme configuration
│   ├── utils/                  # Utility functions
│   └── validators/             # Zod validation schemas
├── terraform/                  # AWS Infrastructure as Code
│   ├── main.tf                 # Root configuration
│   └── modules/                # Reusable Terraform modules
│       ├── networking/         # VPC, subnets, routing
│       ├── security/           # Security groups
│       ├── container/          # ECR repository
│       ├── instance/           # EC2 compute
│       └── ami/                # AMI selection
└── .github/workflows/          # CI/CD automation`}
          </Box>
        </Stack>
      </Stack>
    </PageContainer>
  );
}

