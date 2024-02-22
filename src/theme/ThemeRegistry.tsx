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
import { useState } from "react";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
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
  },
  h5: {
    fontSize: "18px",
    fontWeight: 600,
  },
  body1: {
    fontSize: "16px",
  },
};

const breakPoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

const componentOverrides = {
  MuiDialog: dialogOverride,
  MuiDialogActions: dialogOverride,
  MuiDialogContent: dialogOverride,
  MuiDialogTitle: dialogOverride,
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
    },
    h5: {
      fontSize: "18px",
      fontWeight: 600,
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

const lightTheme = createTheme({
  ...themeOptions,
  typography: {
    allVariants: {
      color: "black !important",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "black",
          textTransform: "unset",
          boxShadow: "none",
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
  },
});

const darkTheme = createTheme({
  ...themeOptions,
  typography: {
    allVariants: {
      color: "white !important",
    },
  },
  components: {
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
          background: "black",
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          background: "black",
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
});

export const theme = createTheme(themeOptions);

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [toggleTheme, setToggleTheme] = useState(true);

  return (
    <ThemeProvider theme={toggleTheme ? lightTheme : darkTheme}>
      <CssBaseline />

      <Box
        width="100%"
        minHeight="100vh"
        sx={{ background: toggleTheme ? "white" : "black" }}
      >
        <Button onClick={() => setToggleTheme(!toggleTheme)}>
          Toggle theme
        </Button>
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
