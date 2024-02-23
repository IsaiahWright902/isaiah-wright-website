import { CSSProperties } from "react";

declare module "@mui/material/styles" {
  interface Palette {
    green: PaletteColor;
    red: PaletteColor;
    blue: PaletteColor;
    purple: PaletteColor;
    pink: PaletteColor;
    yellow: PaletteColor;
    orange: PaletteColor;
    customGrey: PaletteColor;
    black: PaletteColor;
  }

  interface PaletteOptions {
    green: PaletteColorOptions;
    red: PaletteColorOptions;
    blue: PaletteColorOptions;
    purple: PaletteColorOptions;
    pink: PaletteColorOptions;
    yellow: PaletteColorOptions;
    orange: PaletteColorOptions;
    customGrey: PaletteColorOptions;
    black: PaletteColorOptions;
  }

  interface PaletteColor {
    light?: string;
    main?: string;
    dark?: string;
  }

  interface PaletteColorOptions {
    light?: string;
    main?: string;
    dark?: string;
  }

  interface TypographyVariants {}

  interface TypographyVariantsOptions {}
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {}
}
