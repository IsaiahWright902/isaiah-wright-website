"use client";

import { coreSelectors } from "@/store/CoreState/selector";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { useSelector } from "react-redux";
import CircleIcon from "@mui/icons-material/Circle";

export function ExperienceBulletPoint({ text }: { text: string }) {
  const userColor = useSelector(coreSelectors.userColor);
  return (
    <ListItem alignItems="flex-start">
      <ListItemIcon sx={{ minWidth: "35px" }}>
        <CircleIcon
          sx={{
            fill: userColor,
            fontSize: 18,
          }}
        />
      </ListItemIcon>
      <ListItemText>{text}</ListItemText>
    </ListItem>
  );
}
