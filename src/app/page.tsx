"use client";

import BaseModal from "@/components/Modals/BaseModal";
import WelcomeModal from "@/components/Modals/WelcomeModal/WelcomeModal";
import { coreActions } from "@/store/CoreState/reducer";
import { coreSelectors } from "@/store/CoreState/selector";
import { modalActions } from "@/store/ModalState/reducer";
import { Button, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const message = useSelector(coreSelectors.message);
  const userColor = useSelector(coreSelectors.userColor);

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
      <Button
        variant="contained"
        sx={{
          background: userColor,
        }}
        onClick={handleClick}
      >
        Change Open Modal
      </Button>
    </Stack>
  );
}
