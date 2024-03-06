"use client";

import { coreSelectors } from "@/store/CoreState/selector";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useSelector } from "react-redux";
import Image from "next/image";
import HeadShot from "@public/headshotNew.jpeg";
import { theme } from "@/theme/ThemeRegistry";

export default function Home() {
  const userColor = useSelector(coreSelectors.userColor);
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
        sx={{
          transition: "all 0.5s",
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
              I build full stack applications {isMobile ? null : ":)"}
            </Typography>
            <Typography variant="body1">
              I have always been interested in computers and how they work. When
              I click a button I find myself asking: Why does something happen?
              What is the process and how does this work? These questions would
              swirl around my head and I was determined to find an answer. The
              more knowledge I gained about computers, I found myself wanting to
              understand them further and began building applications.
            </Typography>
            <Typography variant="body1">
              To my luck there was a great coding bootcamp in my area where I
              could go to professionally grow my skills. I went through the 13
              week program, every week asking myself even more questions. As I
              learned about the industry I fell in love with it even more. I
              enjoyed learning how to develop applications, making me realize
              that software development was a passion of mine. I love what i do,
              and I strive to make everything I work on the best it can be.
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
              padding: "25px",
            }}
          >
            <Box
              width={"100%"}
              height={"100%"}
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
                }}
              >
                <Image
                  src={HeadShot}
                  alt="Headshot"
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
          I am very challenge motivated. Some of my strengths are determination,
          discipline, commitment and grit. I am a dedicated individual and do
          not give up easily. I look forward to what life has to offer me and
          view everything optimistically. I am excited to push myself to grow
          both personally and professionally. I am a great team player and enjoy
          encouraging those around me.
        </Grid>
      </Grid>
    </Container>
  );
}
