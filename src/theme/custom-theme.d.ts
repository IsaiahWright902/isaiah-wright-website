import { CSSProperties } from "react";

declare module "@mui/material/styles" {
  interface Palette {
    green: CSSProperties;
    red: CSSProperties;
    blue: CSSProperties;
    purple: CSSProperties;
    pink: CSSProperties;
    yellow: CSSProperties;
    orange: CSSProperties;
    customGrey: CSSProperties;
    black: CSSProperties;
  }

  export interface PaletteOptions {
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
