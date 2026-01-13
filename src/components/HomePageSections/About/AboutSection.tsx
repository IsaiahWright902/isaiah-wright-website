"use client";

import {
  Container,
  Grid,
  Stack,
  Typography,
  Box,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import HeadShot from "@public/headshotNew.jpeg";
import UpdatedHeadShot from "@public/updatedHeadshot.jpg"
import { coreSelectors } from "@/store/CoreState/selector";
import { theme } from "@/theme/ThemeRegistry";
import AboutStyles from "./AboutStyles.module.css";
import { useAppSelector } from "@/store/store";

export default function AboutSection() {
  const userColor = useAppSelector(coreSelectors.userColor);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container disableGutters>
      <Grid
        container
        spacing={2}
        direction={{
          xs: "column-reverse",
          sm: "column-reverse",
          md: "column-reverse",
          lg: "row",
        }}
      >
        <Grid item xs={12} sm={6}>
          <Stack spacing={2}>
            <Typography variant="h5" textAlign={{ xs: "center", md: "left" }}>
              Hi, my name is
            </Typography>
            <Typography variant="h1" textAlign={{ xs: "center", md: "left" }}>
              Isaiah Wright,
            </Typography>
            <Typography variant="h3" textAlign={{ xs: "center", md: "left" }}>
             I build reliable cloud systems {isMobile ? null : ":)"}
            </Typography>
            <Typography variant="body1">
              I’ve always been the kind of person who asks why — sometimes too much. 
              When something works, I want to know how. When it breaks, I want to know why it ever worked in the first place. 
              That curiosity pulled me into software development early on, and eventually into CloudOps, 
              where I get to think about systems end to end — from application code to the infrastructure that keeps it running.
            </Typography>
            <Typography variant="body1">
              With a full-stack development background, I’m comfortable on both sides of the fence and often find myself bridging 
              the gap between developers and infrastructure. I’m comfortable speaking up when something can be done better, 
              especially if it helps reduce friction or improve reliability. 
              I enjoy translating requirements, building automation, and creating tools that make people’s lives easier instead of harder.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "25px",
            }}
          >
            <Box
              width={"100%"}
              height={"100%"}
              className={AboutStyles.heroImage}
              borderRadius="50%"
              sx={{
                border: `2px solid ${userColor}`,
                overflow: "hidden",
              }}
            >
              <Stack
                sx={{
                  height: "100%",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  // src={HeadShot}
                  src={UpdatedHeadShot}
                  alt="Headshot"
                  className={AboutStyles.heroImage}
                  width={0}
                  height={0}
                  style={{
                    clipPath: "circle()",
                    overflow: "hidden",
                    width: "74%",
                    height: "auto",
                  }}
                />
              </Stack>
            </Box>
          </Stack>
        </Grid>
      </Grid>
      <Grid container spacing={2} pt={2}>
        <Grid item xs={12}>
          I’m motivated by challenge and continuous improvement, and I enjoy working closely with others to solve hard problems. 
          I bring curiosity, persistence, and a positive attitude to the teams I work with, 
          and I value clear communication and shared ownership. 
          I’m always looking for opportunities to grow, contribute, and make both systems and teams stronger.
        </Grid>
      </Grid>
    </Container>
  );
}
