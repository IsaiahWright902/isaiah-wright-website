"use client";

import { ColorDot } from "@/components/ColorDot/ColorDot";
import PageContainer from "@/components/PageContainer/PageContainer";
import UserChip from "@/components/UserChip/UserChip";
import UserColorDivider from "@/components/UserColorDivider/UserColorDivider";
import { coreSelectors } from "@/store/CoreState/selector";
import { Skill, SkillCategory, SkillProficiency } from "@/store/SkillState/reducer";
import { useAppSelector } from "@/store/store";
import { theme } from "@/theme/ThemeRegistry";
import { getTextColorBasedOnUserColor, hexToRgbA } from "@/utils/general-utils";
import {
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  TextField,
  Chip,
  List,
  ListItem,
  ListItemText,
  Box,
  Link,
  Paper,
  Card,
  CardContent,
} from "@mui/material";

export default function PortfolioUIPage() {
  const userColor = useAppSelector(coreSelectors.userColor);
  const useLightMode = useAppSelector(coreSelectors.useLightMode);

  const colors: { color: string; name: string }[] = [
    {
      color: theme.palette.red.main,
      name: "Red",
    },
    {
      color: theme.palette.green.main,
      name: "Green",
    },
    {
      color: theme.palette.blue.main,
      name: "Blue",
    },
    {
      color: theme.palette.purple.main,
      name: "Purple",
    },
    {
      color: theme.palette.pink.main,
      name: "Pink",
    },
    {
      color: theme.palette.yellow.main,
      name: "Yellow",
    },
    {
      color: theme.palette.orange.main,
      name: "Orange",
    },
    {
      color: theme.palette.customGrey.main,
      name: "Grey",
    },
    {
      color: theme.palette.black.main,
      name: "Black",
    },
  ];

  const exampleSkill: Skill = {
    name: "TypeScript",
    yearsOfExperience: 5,
    proficiency: SkillProficiency.Advanced,
    category: SkillCategory.Language,
  };

  return (
    <PageContainer
      title="Portfolio UI"
      description="A comprehensive showcase of all UI components and design elements used throughout this site. This page serves as a living style guide to ensure visual consistency and design harmony."
    >
      <Stack spacing={6}>
        {/* Typography Section */}
        <Stack spacing={3}>
          <Typography variant="h3">Typography</Typography>
          <Stack spacing={2}>
            <Typography variant="h1">Heading 1 - Main Page Titles</Typography>
            <Typography variant="h2">Heading 2 - Section Titles</Typography>
            <Typography variant="h3">Heading 3 - Subsection Titles</Typography>
            <Typography variant="h4">Heading 4 - Component Titles</Typography>
            <Typography variant="h5">Heading 5 - Small Headings</Typography>
            <Typography variant="h6">Heading 6 - Card/Box Titles</Typography>
            <Typography variant="body1">
              Body 1 - Primary body text used for main content paragraphs and descriptions.
              This is the default text style for most content on the site.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Body 2 - Secondary body text used for supporting content, descriptions, and
              additional information with reduced emphasis.
            </Typography>
            <Typography variant="subtitle1">
              Subtitle 1 - Used for list items and secondary headings
            </Typography>
            <Typography variant="subtitle2">
              Subtitle 2 - Used for smaller captions and labels
            </Typography>
          </Stack>
        </Stack>

        <UserColorDivider />

        {/* Color Palette Section */}
        <Stack spacing={3}>
          <Typography variant="h3">Color Palette</Typography>
          <Typography variant="body2" color="text.secondary">
            The site features 9 preset color themes plus a custom color picker.
            Your current selection influences buttons, dividers, chips, and other accent elements throughout the site.
          </Typography>
          <Container disableGutters>
            <Grid container spacing={4}>
              {colors.map((item, idx) => (
                <ColorDot key={idx} color={item.color} name={item.name} />
              ))}
              <ColorDot color={userColor} name="User Color" />
            </Grid>
          </Container>
        </Stack>

        <UserColorDivider />

        {/* Buttons Section */}
        <Stack spacing={3}>
          <Typography variant="h3">Buttons</Typography>
          <Stack spacing={3}>
            <Box>
              <Typography variant="h6" gutterBottom>
                Standard Button Variants
              </Typography>
              <Stack spacing={2} direction="row" flexWrap="wrap" useFlexGap>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
                <Button variant="text">Text</Button>
              </Stack>
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom>
                Buttons with User Color
              </Typography>
              <Stack spacing={2} direction="row" flexWrap="wrap" useFlexGap>
                <Button
                  variant="contained"
                  sx={{
                    background: userColor,
                    color: getTextColorBasedOnUserColor(userColor),
                    "&:hover": {
                      background: userColor,
                      opacity: 0.9,
                    },
                  }}
                >
                  User Color Contained
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: userColor,
                    color: userColor,
                    "&:hover": {
                      borderColor: userColor,
                      background: hexToRgbA(userColor, 0.1),
                    },
                  }}
                >
                  User Color Outlined
                </Button>
              </Stack>
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom>
                Button Sizes
              </Typography>
              <Stack spacing={2} direction="row" alignItems="center" flexWrap="wrap" useFlexGap>
                <Button variant="contained" size="small">
                  Small
                </Button>
                <Button variant="contained" size="medium">
                  Medium
                </Button>
                <Button variant="contained" size="large">
                  Large
                </Button>
              </Stack>
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom>
                Disabled State
              </Typography>
              <Stack spacing={2} direction="row" flexWrap="wrap" useFlexGap>
                <Button variant="contained" disabled>
                  Disabled Contained
                </Button>
                <Button variant="outlined" disabled>
                  Disabled Outlined
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Stack>

        <UserColorDivider />

        {/* Chips Section */}
        <Stack spacing={3}>
          <Typography variant="h3">Chips</Typography>
          <Stack spacing={3}>
            <Box>
              <Typography variant="h6" gutterBottom>
                Standard Chips
              </Typography>
              <Stack spacing={1} direction="row" flexWrap="wrap" useFlexGap>
                <Chip label="Default Chip" />
                <Chip label="Outlined Chip" variant="outlined" />
                <Chip label="Small Chip" size="small" />
              </Stack>
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom>
                User Color Chips
              </Typography>
              <Stack spacing={1} direction="row" flexWrap="wrap" useFlexGap>
                <Chip
                  label="Tech Stack Item"
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
                <Chip
                  label="Interactive Chip"
                  size="small"
                  sx={{
                    background: userColor,
                    color: getTextColorBasedOnUserColor(userColor),
                    cursor: "pointer",
                  }}
                />
              </Stack>
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom>
                Skill Chip (Interactive)
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Hover over the chip to see the proficiency visualization
              </Typography>
              <UserChip skill={exampleSkill} />
            </Box>
          </Stack>
        </Stack>

        <UserColorDivider />

        {/* Form Elements Section */}
        <Stack spacing={3}>
          <Typography variant="h3">Form Elements</Typography>
          <Stack spacing={3}>
            <Box>
              <Typography variant="h6" gutterBottom>
                Text Fields
              </Typography>
              <Stack spacing={2}>
                <TextField label="Standard TextField" variant="outlined" fullWidth />
                <TextField
                  label="Filled TextField"
                  variant="filled"
                  fullWidth
                  helperText="Helper text example"
                />
                <TextField
                  label="Required Field"
                  variant="outlined"
                  required
                  fullWidth
                />
                <TextField
                  label="Error State"
                  variant="outlined"
                  error
                  helperText="This field has an error"
                  fullWidth
                />
              </Stack>
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom>
                Multiline Text Field
              </Typography>
              <TextField
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                placeholder="Enter your message here..."
              />
            </Box>
          </Stack>
        </Stack>

        <UserColorDivider />

        {/* Cards and Containers Section */}
        <Stack spacing={3}>
          <Typography variant="h3">Cards & Containers</Typography>
          <Stack spacing={3}>
            <Box>
              <Typography variant="h6" gutterBottom>
                Paper Component
              </Typography>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="body1">
                  Paper component with elevation. Used for elevated surfaces and containers.
                </Typography>
              </Paper>
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom>
                Card Component
              </Typography>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Card Title
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Card content goes here. Used for grouping related information
                    with visual separation.
                  </Typography>
                </CardContent>
              </Card>
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom>
                Highlighted Box
              </Typography>
              <Box sx={{ bgcolor: "action.hover", p: 2, borderRadius: 1 }}>
                <Typography variant="subtitle2" gutterBottom fontWeight="bold">
                  Highlighted Content
                </Typography>
                <Typography variant="body2">
                  This box style is used for callouts and emphasized sections
                  throughout the site.
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Stack>

        <UserColorDivider />

        {/* Lists Section */}
        <Stack spacing={3}>
          <Typography variant="h3">Lists</Typography>
          <Stack spacing={3}>
            <Box>
              <Typography variant="h6" gutterBottom>
                Standard List
              </Typography>
              <List dense>
                <ListItem disableGutters>
                  <ListItemText primary="List Item 1" secondary="Secondary text" />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText primary="List Item 2" secondary="Secondary text" />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText primary="List Item 3" secondary="Secondary text" />
                </ListItem>
              </List>
            </Box>
          </Stack>
        </Stack>

        <UserColorDivider />

        {/* Links Section */}
        <Stack spacing={3}>
          <Typography variant="h3">Links</Typography>
          <Stack spacing={2}>
            <Link href="#" underline="hover">
              Hover Underline Link
            </Link>
            <Link href="#" underline="always">
              Always Underline Link
            </Link>
            <Link href="#" underline="none">
              No Underline Link
            </Link>
            <Link href="#" sx={{ color: userColor }}>
              Link with User Color
            </Link>
          </Stack>
        </Stack>

        <UserColorDivider />

        {/* Dividers Section */}
        <Stack spacing={3}>
          <Typography variant="h3">Dividers</Typography>
          <Stack spacing={3}>
            <Box>
              <Typography variant="h6" gutterBottom>
                User Color Divider
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Custom divider that uses your selected theme color
              </Typography>
              <UserColorDivider />
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </PageContainer>
  );
}
