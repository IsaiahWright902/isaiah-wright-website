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
      <Typography>Welcome to my Portfolio!</Typography>
    </BaseModal>
  );
}
