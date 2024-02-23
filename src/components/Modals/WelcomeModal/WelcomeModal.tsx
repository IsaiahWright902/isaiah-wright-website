"use client";
import { useState } from "react";
import BaseModal from "../BaseModal";
import { useDispatch, useSelector } from "react-redux";
import { modalSelectors } from "@/store/ModalState/selector";
import { modalActions } from "@/store/ModalState/reducer";
import { coreSelectors } from "@/store/CoreState/selector";
import { coreActions } from "@/store/CoreState/reducer";
import { useTheme } from "@mui/material";
import WelcomeStep1 from "./components/WelcomeStep1";
import WelcomeStep2 from "./components/WelcomeStep2";
import WelcomeStep3 from "./components/WelcomeStep3";
import WelcomeStep4 from "./components/WelcomeStep4";

export enum WelcomeSteps {
  Step1 = 1,
  Step2 = 2,
  Step3 = 3,
  Step4 = 4,
}

export default function WelcomeModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector(modalSelectors.welcomeModal);
  const themePreference = useSelector(coreSelectors.themePreference);
  const userColor = useSelector(coreSelectors.userColor);
  const theme = useTheme();

  const [currentStep, setCurrentStep] = useState<WelcomeSteps>(
    WelcomeSteps.Step1
  );

  const handleClose = () => {
    dispatch(coreActions.setInitialVisit(false));
    dispatch(modalActions.close("welcomeModal"));
  };

  const handleSetUserColor = (val: string) => {
    dispatch(coreActions.setUserColor(val));
  };

  const toggleThemePreference = (val: boolean) => {
    dispatch(coreActions.setThemePreference(val));
  };

  return (
    <BaseModal isOpen={isOpen} title="Welcome!" handleClose={handleClose}>
      {currentStep === WelcomeSteps.Step1 && (
        <WelcomeStep1
          themePreference={themePreference}
          userColor={userColor}
          toggleThemePreference={toggleThemePreference}
          setCurrentStep={setCurrentStep}
        />
      )}
      {currentStep === WelcomeSteps.Step2 && (
        <WelcomeStep2
          themePreference={themePreference}
          userColor={userColor}
          setCurrentStep={setCurrentStep}
          handleSetUserColor={handleSetUserColor}
        />
      )}

      {currentStep === WelcomeSteps.Step3 && (
        <WelcomeStep3 userColor={userColor} handleClose={handleClose} />
      )}

      {currentStep === WelcomeSteps.Step4 && (
        <WelcomeStep4
          themePreference={themePreference}
          userColor={userColor}
          setCurrentStep={setCurrentStep}
          handleSetUserColor={handleSetUserColor}
        />
      )}
    </BaseModal>
  );
}
