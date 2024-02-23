export function hexToRgbA(hex: string, opacity: number): string {
  let c: number;

  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = parseInt(hex.substring(1), 16);

    if (hex.length === 4) {
      // Expand shorthand form (e.g., "#abc" to "#aabbcc")
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
