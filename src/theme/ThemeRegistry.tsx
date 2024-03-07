"use client";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  useMediaQuery,
} from "@mui/material";
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
import { Poppins, Inter } from "next/font/google";
import { useSelector } from "react-redux";
import { coreSelectors } from "@/store/CoreState/selector";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  fallback: ["Geneva, Helvetica, sans-serif"],
  display: "swap",
});

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
    fontSize: "47px",
    fontWeight: 400,
  },
  h2: {
    fontSize: "38px",
  },
  h3: {
    fontSize: "28px",
  },
  h4: {
    fontSize: "24px",
    fontWeight: 300,
  },
  h5: {
    fontSize: "20px",
    fontWeight: 100,
  },
  body1: {
    fontSize: "18px",
  },
  body2: {
    fontSize: "18px",
    fontWeight: 400,
  },
  subtitle1: {
    fontSize: "16px",
  },
  subtitle2: {
    fontSize: "16px",
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

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    ...pallette,
  },
  typography: {
    ...typography,
    allVariants: {
      color: "black !important",
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
    MuiDialogContent: {
      styleOverrides: {
        root: {
          background: "white",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          background: "none",
        },
      },
    },
  },
  breakpoints: breakpoints,
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    ...pallette,
  },
  typography: {
    ...typography,
    allVariants: {
      fontWeight: 300,
      color: "white !important",
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
          color: "white",
        },
        text: {
          color: "white",
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
          color: "white",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          background: "none",
        },
      },
    },
    MuiIcon: {
      styleOverrides: {
        root: {
          color: "white",
          fill: "white",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          background: "#f0f2f5",
        },
      },
    },
    // MuiMenu: {
    //   styleOverrides: {
    //     paper: {
    //       background: "#181818",
    //     },
    //   },
    // },
    MuiTextField: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
  },
  breakpoints: breakpoints,
});

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
    url: "https://github.com/IsaiahWright902/Resume/blob/master/IsaiahWrightResume%20.pdf",
    icon: <PictureAsPdfIcon />,
  },
];

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const useLightMode = useSelector(coreSelectors.useLightMode);

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
        <Navbar links={links} />
        <ModalRegistry />
        <Container
          sx={{
            padding: isMobile ? "16px " : "64px 128px",
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
