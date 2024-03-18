"use client";

import { coreSelectors } from "@/store/CoreState/selector";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { useAppSelector } from "@/store/store";

export function ExperienceBulletPoint({ text }: { text: string }) {
  const userColor = useAppSelector(coreSelectors.userColor);
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
