"use client";

import BaseModal from "@/components/Modals/BaseModal";
import WelcomeModal from "@/components/Modals/WelcomeModal";
import { coreActions } from "@/store/CoreState/reducer";
import { coreSelectors } from "@/store/CoreState/selector";
import { modalActions } from "@/store/ModalState/reducer";
import { Button, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const message = useSelector(coreSelectors.message);

  const handleClick = () => {
    // dispatch(coreActions.changeMessage("Changed message"));
    dispatch(modalActions.open("welcomeModal"));
  };

  const handleClose = () => {
    console.log("closing");
  };

  return (
    <Stack>
      <Typography>{message}</Typography>
      <Button onClick={handleClick}>Change Open Modal</Button>
    </Stack>
  );
}
