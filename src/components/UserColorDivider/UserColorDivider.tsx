"use client";
import { coreSelectors } from "@/store/CoreState/selector";
import { useAppSelector } from "@/store/store";
import { Divider } from "@mui/material";

export default function UserColorDivider() {
  const userColor = useAppSelector(coreSelectors.userColor);

  return (
    <Divider
      sx={{
        background: userColor,
      }}
    />
  );
}
