import Color from "color";

export function hexToRgbA(hex: string, opacity: number): string {
  let c: number;

  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = parseInt(hex.substring(1), 16);

    if (hex.length === 4) {
      // expand shorthand form (e.g., "#abc" to "#aabbcc")
      c =
        ((c & 0xf00) << 12) |
        ((c & 0xf00) << 8) |
        ((c & 0xf0) << 4) |
        (c & 0xf);
    }

    return `rgba(${(c >> 16) & 255}, ${(c >> 8) & 255}, ${
      c & 255
    }, ${opacity})`;
  }

  throw new Error("Bad Hex");
}

type RGBColor = {
  r: number;
  g: number;
  b: number;
};

export function hexToRgb(hex: string): RGBColor | null {
  const hexWithoutHash = hex.replace(/^#/, "");

  const bigint = parseInt(hexWithoutHash, 16);

  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return { r, g, b };
}

export function getComplementColor(hexColor: string): string | null {
  const rgbColor = hexToRgb(hexColor);

  if (rgbColor) {
    const complementColor = `#${(
      0xffffff ^
      ((rgbColor.r << 16) | (rgbColor.g << 8) | rgbColor.b)
    )
      .toString(16)
      .padStart(6, "0")}`;
    return complementColor;
  }

  return null;
}

export function getAnalogousColor(hexColor: string): string {
  const baseColor = Color(hexColor);
  const analogousColor = baseColor.rotate(30).lighten(0.4); // Rotate the hue by 30 degrees (adjust as needed)

  return analogousColor.hex();
}

/* 
   this function tests the luminance of a color and returns
   a white or black text color so the text is visible on UI elements
*/

export function getTextColorBasedOnUserColor(color: string) {
  const hexColor = color.replace(/^#/, "");
  const bigint = parseInt(hexColor, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  const luminance =
    0.2126 * (r / 255) + 0.7152 * (g / 255) + 0.0722 * (b / 255);

  return luminance < 0.8 ? "white !important" : "black !important";
}
