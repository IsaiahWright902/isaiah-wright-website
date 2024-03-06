"use client";
import { useState } from "react";
import BaseModal from "../BaseModal";
import { useDispatch, useSelector } from "react-redux";
import { modalSelectors } from "@/store/ModalState/selector";
import { modalActions } from "@/store/ModalState/reducer";
import { coreSelectors } from "@/store/CoreState/selector";
import { coreActions } from "@/store/CoreState/reducer";
import WelcomeStep1 from "./components/WelcomeStep1";
import WelcomeStep2 from "./components/WelcomeStep2";
import WelcomeStep3 from "./components/WelcomeStep3";
import WelcomeStep4 from "./components/WelcomeStep4";
import { Stack } from "@mui/material";

export enum WelcomeSteps {
  Step1 = 1,
  Step2 = 2,
  Step3 = 3,
  Step4 = 4,
}

export default function WelcomeModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector(modalSelectors.welcomeModal);
  const useLightMode = useSelector(coreSelectors.useLightMode);
  const userColor = useSelector(coreSelectors.userColor);

  const [currentStep, setCurrentStep] = useState<WelcomeSteps>(
    WelcomeSteps.Step1
  );

  const handleClose = () => {
    dispatch(coreActions.setInitialVisit(false));
    dispatch(modalActions.close("welcomeModal"));
    setCurrentStep(WelcomeSteps.Step1);
  };

  const handleSetUserColor = (val: string) => {
    dispatch(coreActions.setUserColor(val));
  };

  const toggleThemePreference = (val: boolean) => {
    dispatch(coreActions.setUseLightMode(val));
  };

  return (
    <BaseModal isOpen={isOpen} title="Welcome!" handleClose={handleClose}>
      <Stack pt={2} pb={2} spacing={2} minHeight="200px">
        {currentStep === WelcomeSteps.Step1 && (
          <WelcomeStep1
            useLightMode={useLightMode}
            userColor={userColor}
            toggleThemePreference={toggleThemePreference}
            setCurrentStep={setCurrentStep}
          />
        )}
        {currentStep === WelcomeSteps.Step2 && (
          <WelcomeStep2
            useLightMode={useLightMode}
            userColor={userColor}
            setCurrentStep={setCurrentStep}
            handleSetUserColor={handleSetUserColor}
          />
        )}

        {currentStep === WelcomeSteps.Step3 && (
          <WelcomeStep3
            userColor={userColor}
            handleClose={handleClose}
            setCurrentStep={setCurrentStep}
          />
        )}

        {currentStep === WelcomeSteps.Step4 && (
          <WelcomeStep4
            userColor={userColor}
            setCurrentStep={setCurrentStep}
            handleSetUserColor={handleSetUserColor}
          />
        )}
      </Stack>
    </BaseModal>
  );
}
