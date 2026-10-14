"use client";

import { coreSelectors } from "@/store/CoreState/selector";
import { useAppSelector } from "@/store/store";

/** A thin bar in the visitor's chosen color that fills as the page scrolls. Pure CSS scroll timeline: browsers without support simply don't show it. */
export default function ScrollProgress() {
  const userColor = useAppSelector(coreSelectors.userColor);
  return (
    <div
      aria-hidden
      className="scroll-progress"
      style={{ background: userColor }}
    />
  );
}
