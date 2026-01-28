"use client";
import { coreSelectors } from "@/store/CoreState/selector";
import { PortfolioLink, theme } from "@/theme/ThemeRegistry";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useRouter } from "next/navigation";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import UserColorDivider from "../UserColorDivider/UserColorDivider";
import { useAppSelector } from "@/store/store";

export default function Footer({ links }: { links: PortfolioLink[] }) {
  const router = useRouter();

  const handleLinkClick = (path: string) => {
    router.push(path);
  };

  const handleExternalLinkClick = (path: string) => {
    window.open(path, "_blank");
  };

  const useLightMode = useAppSelector(coreSelectors.useLightMode);
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Box
      minHeight="10vh"
      padding="15px"
      justifyContent="center"
      alignItems="center"
      display="flex"
      sx={{
        background: useLightMode
          ? theme.palette.black.dark
          : theme.palette.black.main,
      }}
    >
      <Container
        sx={{
          margin: isMobile ? "non" : "0px 165px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography
              onClick={() => handleLinkClick("/")}
              variant="h5"
              sx={{
                fontFamily: "monospace",
                letterSpacing: ".2rem",
                textDecoration: "none",
                color: "white !important",
                cursor: "pointer",
              }}
            >
              Isaiah Wright
            </Typography>
            <FooterHeading title="Full Stack Developer" variant="subtitle1" />
          </Grid>

          {isMobile && <FooterDivider />}
          <Grid item xs={12} md={4}>
            <FooterHeading title="Portfolio Overview:" />
            <FooterItem
              title="Overview"
              path="/overview"
              handleLinkClick={handleLinkClick}
            />
            <FooterItem
              title="Portfolio UI/UX"
              path="/portfolio-ui"
              handleLinkClick={handleLinkClick}
            />
            <FooterItem
              title="Github Repository"
              path="https://github.com/IsaiahWright902/isaiah-wright-website"
              handleLinkClick={handleExternalLinkClick}
            />
          </Grid>
          {isMobile && <FooterDivider />}
          <Grid item xs={12} md={4}>
            <FooterHeading title="Links:" />

            {links.map((link, idx) => (
              <FooterItem
                key={idx}
                title={link.name}
                path={link.url}
                handleLinkClick={handleExternalLinkClick}
              />
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function FooterHeading({
  title,
  variant = "body1",
}: {
  title: string;
  variant?: string;
}) {
  return (
    <Typography
      variant={variant as any}
      sx={{
        fontFamily: "monospace",
        letterSpacing: ".2rem",
        textDecoration: "none",
        color: "white !important",
      }}
    >
      {title}
    </Typography>
  );
}

function FooterItem({
  title,
  path,
  handleLinkClick,
}: {
  title: string;
  path: string;
  handleLinkClick: (path: string) => void;
}) {
  const [showArrow, setShowArrow] = useState(false);

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      onClick={() => handleLinkClick(path)}
      onMouseOver={() => setShowArrow(true)}
      onMouseOut={() => setShowArrow(false)}
      sx={{
        cursor: "pointer",
      }}
    >
      <Typography color="white !important" variant="subtitle1">
        {title}
      </Typography>
      <ArrowForwardIcon
        fontSize="small"
        sx={{
          transition: "all 0.6s",
          opacity: showArrow ? 1 : 0,
          fill: "white",
        }}
      />
    </Stack>
  );
}

function FooterDivider() {
  return (
    <Grid item xs={12}>
      <UserColorDivider />
    </Grid>
  );
}
