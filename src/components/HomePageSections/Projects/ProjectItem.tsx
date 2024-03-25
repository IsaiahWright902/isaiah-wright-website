import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { ProjectMapItem } from "./ProjectsSection";
import { useAppSelector } from "@/store/store";
import { coreSelectors } from "@/store/CoreState/selector";
import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/navigation";

export default function ProjectItem({ project }: { project: ProjectMapItem }) {
  const router = useRouter();
  const userColor = useAppSelector(coreSelectors.userColor);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    router.push(project.link);
  };

  return (
    <Grid
      item
      xs={12}
      sm={4}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{ cursor: "pointer" }}
    >
      <Paper
        elevation={isHovered ? 10 : 4}
        sx={{ border: `1px solid ${userColor}`, borderRadius: "8px" }}
      >
        <Box sx={{ padding: "10px" }}>
          <Stack spacing={2}>
            <Typography variant="h5">{project.title}</Typography>
            <Typography>{project.description}</Typography>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{
                opacity: isHovered ? 1 : 0,
                transition: "all 1s",
              }}
            >
              <Typography variant="subtitle1">View Project</Typography>
              <ArrowForwardIcon fontSize="small" />
            </Stack>
          </Stack>
        </Box>
      </Paper>
    </Grid>
  );
}
