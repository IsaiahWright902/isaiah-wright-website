"use client";

import {
  Container,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import { coreSelectors } from "@/store/CoreState/selector";
import { useAppSelector } from "@/store/store";
import IntroRow from "./IntroRow";
import HeroPortrait from "./HeroPortrait";
import RotatingPhrase from "./RotatingPhrase";
import { BothSidesCard, PrinciplesCard, WhyCard } from "./IntroCards";

export default function AboutSection() {
  const userColor = useAppSelector(coreSelectors.userColor);

  return (
    <Container disableGutters>
      <Box
        sx={{
          display: "grid",
          alignItems: "center",
          gap: { xs: 3, md: 4 },
          gridTemplateColumns: "minmax(0, 1fr)",
        }}
      >
        <Stack spacing={1.5} textAlign="center" sx={{ order: 2 }}>
          <Typography variant="h5">Hi, my name is</Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: "clamp(40px, 6.5vw, 76px)",
              fontWeight: 600,
              lineHeight: 1.05,
              whiteSpace: "nowrap",
            }}
          >
            Isaiah Wright,
          </Typography>
          <Typography variant="h3" component="div">
            <RotatingPhrase color={userColor} />
          </Typography>
        </Stack>
        <Box sx={{ order: 1 }}>
          <HeroPortrait />
        </Box>
      </Box>

      <Stack spacing={{ xs: 7, md: 9 }} pt={{ xs: 5, md: 7 }}>
        <IntroRow
          label="The drive"
          headline="I ask why. Sometimes too much."
          body="I've always been the kind of person who wants to know how things work, and why they break. That curiosity pulled me into software development early on, and eventually into CloudOps."
          bullets={[
            "Systems end to end, not just one layer",
            "From application code to the infrastructure that keeps it running",
          ]}
          visual={<WhyCard />}
        />
        <IntroRow
          label="The background"
          headline="Both sides of the fence."
          body="With a full-stack development background, I often find myself bridging the gap between developers and infrastructure."
          bullets={[
            "I speak up when something can be done better",
            "I focus on reducing friction and improving reliability",
            "I translate requirements into automation and tools that make people's lives easier instead of harder",
          ]}
          visual={<BothSidesCard />}
          visualFirst
        />
        <IntroRow
          label="The approach"
          headline="Better systems, stronger teams."
          body="I'm motivated by challenge and continuous improvement, and I enjoy working closely with others to solve hard problems. I'm always looking for opportunities to grow, contribute, and make both systems and teams stronger."
          visual={<PrinciplesCard />}
        />
      </Stack>
    </Container>
  );
}
