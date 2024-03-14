"use client";

import { coreSelectors } from "@/store/CoreState/selector";
import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Image from "next/image";

import ExperienceStyles from "./ExperienceStyles.module.css";
import MLLogoWhite from "@public/madelabs-logo-white.png";
import MLLogoDark from "@public/madelabs-logo-dark.png";

export default function ExperienceSection() {
  const userColor = useSelector(coreSelectors.userColor);
  const useLightMode = useSelector(coreSelectors.useLightMode);

  const madeLabsBullets = [
    "Contributed to both front-end and back-end development tasks.",
    "Independently executed a comprehensive integration of Stripe as the payment processor for subscription services, achieving seamless functionality.",
    "Implemented performance enhancements and major infrastructure changes to streamline development processes.",
    "Revamped a rich text editor using Draft.js, while ensuring long-term maintainability.",
    "Proposed enhancements in design and adopted best design principles in line with company's branding guideline",
  ];

  return (
    <Container
      disableGutters
      //   REMOVE ME
      sx={{
        minHeight: "50vh",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h1" textAlign={{ xs: "center", md: "left" }}>
            Experience
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign={{ xs: "center", md: "left" }}
          >
            (Act now & you could be here at the top!)
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper
            elevation={4}
            sx={{
              minHeight: "400px",
              borderRadius: "16px",
              border: `1px solid ${userColor}`,
            }}
          >
            <Grid container spacing={2} padding={5} alignItems="center">
              <Grid item xs={12} sm={4}>
                <Stack spacing={2}>
                  <Typography variant="h3">MadeLabs</Typography>
                  <Typography variant="h4">Software Engineer</Typography>
                  <Typography variant="h5">
                    October 2022 - February 2024
                  </Typography>
                  <Typography variant="h5">Remote, United States</Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Stack spacing={2} alignItems="center" justifyContent="center">
                  {useLightMode ? (
                    <Image
                      src={MLLogoWhite}
                      alt="Headshot"
                      className={ExperienceStyles.experienceImage}
                      width={0}
                      height={0}
                      style={
                        {
                          // width: "400px",
                          // height: "auto",
                        }
                      }
                    />
                  ) : (
                    <Image
                      src={MLLogoDark}
                      alt="Headshot"
                      className={ExperienceStyles.experienceImage}
                      width={0}
                      height={0}
                      style={{
                        // width: "400px",
                        height: "auto",
                      }}
                    />
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={2} pt={2}>
                  {madeLabsBullets.map((item, idx) => (
                    <ExperienceBulletPoint key={idx} text={item} />
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

function ExperienceBulletPoint({ text }: { text: string }) {
  const userColor = useSelector(coreSelectors.userColor);
  return (
    <Stack direction="row" alignItems="baseline" gap={2} width="100%">
      <Box
        borderRadius="50%"
        sx={{
          backgroundColor: userColor,
          width: "10px !important",
          height: "10px !important",
        }}
      ></Box>
      <Typography>{text}</Typography>
    </Stack>
  );
}
