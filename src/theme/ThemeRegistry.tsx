"use client";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  useMediaQuery,
} from "@mui/material";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { pallette } from "./palette";
import ModalRegistry from "@/components/Modals/ModalRegistry";
import { Poppins, Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { coreSelectors } from "@/store/CoreState/selector";
import { coreActions } from "@/store/CoreState/reducer";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
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

const typography = {
  fontFamily: poppins.style.fontFamily,
  h1: {
    fontSize: "38px",
    fontWeight: 600,
  },
  h2: {
    fontSize: "32px",
  },
  h3: {
    fontSize: "28px",
  },
  h4: {
    fontSize: "24px",
    fontWeight: 300,
  },
  h5: {
    fontSize: "18px",
    fontWeight: 100,
  },
  body1: {
    fontSize: "16px",
  },
};

const components = {
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

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

const themeOptions: ThemeOptions = {
  palette: pallette,
  typography: {
    fontFamily: inter.style.fontFamily,
    h1: {
      fontSize: "38px",
      fontWeight: 600,
    },
    h2: {
      fontSize: "32px",
    },
    h3: {
      fontSize: "28px",
    },
    h4: {
      fontSize: "24px",
      fontWeight: 400,
    },
    h5: {
      fontSize: "18px",
      fontWeight: 100,
    },
    body1: {
      fontSize: "16px",
    },
  },
  components: {
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
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
};

export const lightTheme = createTheme({
  palette: pallette,
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
  palette: pallette,
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
  },
  breakpoints: breakpoints,
});

export const theme = createTheme(themeOptions);

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const useLightMode = useSelector(coreSelectors.useLightMode);

  const handleToggleTheme = () => {
    dispatch(coreActions.setUseLightMode(!useLightMode));
  };

  return (
    <ThemeProvider theme={useLightMode ? lightTheme : darkTheme}>
      <CssBaseline />

      <Box
        width="100%"
        minHeight="100vh"
        sx={{
          background: useLightMode ? "white" : "#1b1b1b",
          transition: "all 1s",
        }}
      >
        <Button onClick={handleToggleTheme}>Toggle theme</Button>
        <ModalRegistry />
        <Container
          sx={{
            padding: isMobile ? "16px " : "64px 128px",
          }}
        >
          {children}
        </Container>
      </Box>
    </ThemeProvider>
  );
}
