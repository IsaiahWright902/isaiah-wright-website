"use client";
import { Box, Container, CssBaseline } from "@mui/material";
import {
  BreakpointsOptions,
  Components,
  createTheme,
  Theme,
  ThemeOptions,
  ThemeProvider,
} from "@mui/material/styles";
import { pallette } from "./palette";
import ModalRegistry from "@/components/Modals/ModalRegistry";
import { Poppins } from "next/font/google";
import { coreSelectors } from "@/store/CoreState/selector";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ScrollProgress from "@/components/ScrollProgress/ScrollProgress";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { useMemo } from "react";
import { useAppSelector } from "@/store/store";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  fallback: ["Geneva, Helvetica, sans-serif"],
});
const dialogOverride = {
  styleOverrides: {
    root: {
      padding: "16px",
    },
  },
};

const breakpoints: BreakpointsOptions = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

const typography: TypographyOptions = {
  fontFamily: poppins.style.fontFamily,
  h1: {
    fontSize: "clamp(28px, 4vw, 47px)",
    fontWeight: 400,
  },
  h2: {
    fontSize: "clamp(24px, 3.2vw, 38px)",
  },
  h3: {
    fontSize: "clamp(20px, 2.5vw, 28px)",
  },
  h4: {
    fontSize: "clamp(17px, 2vw, 24px)",
    fontWeight: 300,
  },
  h5: {
    fontSize: "clamp(15px, 1.8vw, 20px)",
    fontWeight: 100,
  },
  body1: {
    fontSize: "clamp(14px, 1.5vw, 18px)",
  },
  body2: {
    fontSize: "clamp(14px, 1.5vw, 18px)",
    fontWeight: 400,
  },
  subtitle1: {
    fontSize: "clamp(13px, 1.3vw, 16px)",
  },
  subtitle2: {
    fontSize: "clamp(13px, 1.3vw, 16px)",
    fontWeight: 400,
  },
};

const components: Components<Omit<Theme, "components">> = {
  MuiDialog: dialogOverride,
  MuiDialogActions: dialogOverride,
  MuiDialogContent: dialogOverride,
  MuiDialogTitle: dialogOverride,
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "unset",
        boxShadow: "none",
      },
    },
  },
};

const themeOptions: ThemeOptions = {
  palette: pallette,
  breakpoints: breakpoints,
};

export const theme = createTheme(themeOptions);

export type PortfolioLink = {
  url: string;
  name: string;
  icon?: React.ReactNode;
};

const links: PortfolioLink[] = [
  {
    name: "Github",
    url: "https://github.com/IsaiahWright902",
    icon: <GitHubIcon sx={{ width: "20px", height: "20px" }} />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/isaiah-wright-4b89191a3/",
    icon: <LinkedInIcon />,
  },
  {
    name: "Resume",
    url: "https://github.com/IsaiahWright902/Resume/blob/master/IsaiahWrightResume.pdf",
    icon: <PictureAsPdfIcon />,
  },
];

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const useLightMode = useAppSelector(coreSelectors.useLightMode);
  const userColor = useAppSelector(coreSelectors.userColor);

  const lightTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "light",
          ...pallette,
          primary: {
            main: userColor,
          },
        },
        typography: {
          ...typography,
          allVariants: {
            fontWeight: 300,
          },
        },
        components: {
          ...components,
          MuiButton: {
            styleOverrides: {
              root: {
                color: "white",
                textTransform: "unset",
                boxShadow: "none",
              },
              contained: {
                color: "white",
              },
              outlined: {
                color: "black",
              },
              text: {
                color: "black",
              },
            },
          },
          MuiDialogTitle: {
            styleOverrides: {
              root: {
                background: "#f0f2f5",
              },
            },
          },
        },
        breakpoints: breakpoints,
      }),
    [userColor]
  );

  const darkTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
          ...pallette,
          primary: {
            main: userColor,
          },
        },
        typography: {
          ...typography,
          allVariants: {
            fontWeight: 300,
          },
        },
        components: {
          ...components,
          MuiButton: {
            styleOverrides: {
              root: {
                color: "white",
                textTransform: "unset",
                boxShadow: "none",
              },
            },
          },
          MuiDialogTitle: {
            styleOverrides: {
              root: {
                background: "#181818",
              },
            },
          },
          MuiDialogContent: {
            styleOverrides: {
              root: {
                background: "#121212",
              },
            },
          },
        },
        breakpoints: breakpoints,
      }),
    [userColor]
  );

  return (
    <ThemeProvider theme={useLightMode ? lightTheme : darkTheme}>
      <CssBaseline />
      <Box
        width="100%"
        sx={{
          background: useLightMode
            ? "rgba(255, 255, 255, 1)"
            : theme.palette.black.light,
          transition: "all 1s",
        }}
      >
        <ScrollProgress />
        <Navbar links={links} />
        <ModalRegistry />
        <Container
          maxWidth="lg"
          sx={{
            px: { xs: 2, sm: 3, md: 4, lg: 6 },
            py: { xs: 2, sm: 3, md: 5, lg: 8 },
            minHeight: "100vh",
          }}
        >
          {children}
        </Container>
        <Footer links={links} />
      </Box>
    </ThemeProvider>
  );
}
