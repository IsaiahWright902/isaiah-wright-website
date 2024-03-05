"use client";
import { coreSelectors } from "@/store/CoreState/selector";
import { Divider } from "@mui/material";
import { useSelector } from "react-redux";

export default function UserColorDivider() {
  const userColor = useSelector(coreSelectors.userColor);

  return (
    <Divider
      sx={{
        background: userColor,
      }}
    />
  );
}
