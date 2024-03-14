"use client";

import { coreSelectors } from "@/store/CoreState/selector";
import { Grid, Typography, Paper, Stack, List } from "@mui/material";
import { useSelector } from "react-redux";
import { ExperienceBulletPoint } from "./ExperienceBulletPoint";
import { StaticImageData } from "next/image";
import Image from "next/image";

import ExperienceStyles from "./ExperienceStyles.module.css";

export type ExperienceItemDTO = {
  companyName: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  bulletPoints: string[];
  logo: StaticImageData;
  darkModeLogo?: StaticImageData;
  logoMaxWidth: string;
};

export default function ExperienceItem({
  experienceItem,
}: {
  experienceItem: ExperienceItemDTO;
}) {
  const userColor = useSelector(coreSelectors.userColor);
  const useLightMode = useSelector(coreSelectors.useLightMode);
  return (
    <Grid item xs={12}>
      <Paper
        elevation={4}
        sx={{
          minHeight: "400px",
          borderRadius: "16px",
          border: `1px solid ${userColor}`,
          padding: { xs: 2.5, md: 5 },
        }}
      >
        <Grid
          container
          spacing={2}
          alignItems="center"
          flexDirection={{ xs: "column-reverse", md: "row" }}
        >
          <Grid item xs={12} sm={4}>
            <Stack
              spacing={2}
              className={ExperienceStyles.alignTextCenter}
              sx={{
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography variant="h3">{experienceItem.companyName}</Typography>
              <Typography variant="h4">{experienceItem.position}</Typography>
              <Typography
                variant="h5"
                textAlign={{ xs: "center", md: "inherit" }}
                fontSize={{ xs: "16px", md: "20px" }}
              >
                {experienceItem.startDate} - {experienceItem.endDate}
              </Typography>
              <Typography variant="h5">{experienceItem.location}</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Stack spacing={2} alignItems={"center"}>
              {useLightMode ? (
                <Image
                  src={experienceItem.logo}
                  alt="Headshot"
                  className={ExperienceStyles.experienceImage}
                  width={0}
                  height={0}
                  style={{ maxWidth: experienceItem.logoMaxWidth }}
                />
              ) : (
                <Image
                  src={experienceItem.darkModeLogo ?? experienceItem.logo}
                  alt="Headshot"
                  className={ExperienceStyles.experienceImage}
                  width={0}
                  height={0}
                  style={{ maxWidth: experienceItem.logoMaxWidth }}
                />
              )}
            </Stack>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center" pt={2}>
          <Grid item xs={12}>
            <List>
              {experienceItem.bulletPoints.map((item, idx) => (
                <ExperienceBulletPoint key={idx} text={item} />
              ))}
            </List>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
