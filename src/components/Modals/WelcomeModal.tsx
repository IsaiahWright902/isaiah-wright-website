import React from "react";
import BaseModal from "./BaseModal";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { modalSelectors } from "@/store/ModalState/selector";
import { modalActions } from "@/store/ModalState/reducer";

export default function WelcomeModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector(modalSelectors.welcomeModal);

  const handleClose = () => {
    dispatch(modalActions.close("welcomeModal"));
  };

  return (
    <BaseModal isOpen={isOpen} title="Welcome!" handleClose={handleClose}>
      <Typography>
        Welcome! I&apos;m Isaiah, and I&apos;m thrilled to welcome you to my
        portfolio. It&apos;s truly an honor to have you here.
      </Typography>
      <Typography>
        It looks like this may be your first time visiting my site. I&apos;ve
        crafted it with a variety of functionalities to showcase my skills and
        deep passion for software development. I hope you find it both
        informative and engaging.
      </Typography>
      <Typography>First things first!</Typography>
    </BaseModal>
  );
}
