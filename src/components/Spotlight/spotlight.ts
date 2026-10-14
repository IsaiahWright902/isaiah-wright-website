import type { PointerEvent } from "react";
import { alpha } from "@mui/material/styles";

/** Pass to `onPointerMove`. The light follows the pointer through CSS variables, so moving the mouse never re-renders React. */
export function trackPointer(e: PointerEvent<HTMLElement>) {
  const box = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - box.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - box.top}px`);
}

/** The glow that appears under the pointer on hover or keyboard focus. Spread into `sx` on a `position: relative` element. */
export const spotlightSx = (color: string) => ({
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    zIndex: 1,
    pointerEvents: "none",
    opacity: 0,
    transition: "opacity 300ms",
    background: `radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), ${alpha(color, 0.16)}, transparent 60%)`,
  },
  "&:hover::before, &:focus-visible::before": { opacity: 1 },
  "@media (prefers-reduced-motion: reduce)": { "&::before": { transition: "none" } },
});
