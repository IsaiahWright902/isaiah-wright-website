import { Box, Chip, Grid, Paper, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { ProjectMapItem } from "./ProjectsSection";
import { useAppSelector } from "@/store/store";
import { coreSelectors } from "@/store/CoreState/selector";
import { spotlightSx, trackPointer } from "@/components/Spotlight/spotlight";

export default function ProjectItem({ project }: { project: ProjectMapItem }) {
  const userColor = useAppSelector(coreSelectors.userColor);
  const { featured, external, image } = project;

  const linkProps = external
    ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
    : { href: project.link };

  return (
    <Grid item xs={12} sm={featured ? 12 : 6}>
      <Paper
        component={external ? "a" : Link}
        {...linkProps}
        onPointerMove={trackPointer}
        elevation={4}
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: { xs: "column", md: featured ? "row" : "column" },
          height: "100%",
          overflow: "hidden",
          textDecoration: "none",
          color: "inherit",
          border: `1px solid ${userColor}`,
          borderRadius: "8px",
          transition:
            "transform 300ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 300ms",
          ...spotlightSx(userColor),
          "&:hover, &:focus-visible": {
            transform: "translateY(-3px)",
            boxShadow: 10,
          },
          "&:hover .project-arrow, &:focus-visible .project-arrow": {
            transform: "translateX(4px)",
          },
          "&:active": { transform: "translateY(-1px) scale(0.995)" },
          "@media (prefers-reduced-motion: reduce)": {
            transition: "none",
            "&:hover, &:focus-visible, &:active": { transform: "none" },
            "& .project-arrow": { transition: "none" },
          },
        }}
      >
        {image && (
          <Box
            sx={{
              position: "relative",
              flex: { md: "0 0 55%" },
              minHeight: { xs: 200, md: 300 },
              borderBottom: {
                xs: `1px solid ${alpha(userColor, 0.5)}`,
                md: "none",
              },
              borderRight: {
                md: `1px solid ${alpha(userColor, 0.5)}`,
              },
            }}
          >
            <Image
              src={image}
              alt={project.imageAlt ?? project.title}
              fill
              sizes="(min-width: 900px) 55vw, 100vw"
              style={{ objectFit: "cover", objectPosition: "top left" }}
            />
          </Box>
        )}
        <Stack
          spacing={2}
          justifyContent="space-between"
          sx={{ p: { xs: 2, md: 3 }, flex: 1 }}
        >
          <Stack spacing={1.5}>
            <Typography variant={featured ? "h3" : "h5"} sx={{ fontWeight: 400 }}>
              {project.title}
            </Typography>
            <Typography>{project.description}</Typography>
            {project.tags && (
              <Stack direction="row" flexWrap="wrap" gap={1} pt={0.5}>
                {project.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    variant="outlined"
                    sx={{ borderColor: alpha(userColor, 0.6) }}
                  />
                ))}
              </Stack>
            )}
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
              {external ? "Visit site" : "View project"}
            </Typography>
            {external ? (
              <OpenInNewIcon fontSize="small" />
            ) : (
              <ArrowForwardIcon
                fontSize="small"
                className="project-arrow"
                sx={{ transition: "transform 300ms cubic-bezier(0.16, 1, 0.3, 1)" }}
              />
            )}
          </Stack>
        </Stack>
      </Paper>
    </Grid>
  );
}
