"use client";

import UserColorPickerModal from "./UserColorPickerModal/UserColorPickerModal";
import WelcomeModal from "./WelcomeModal/WelcomeModal";

export default function ModalRegistry() {
  return (
    <>
      <WelcomeModal />
      <UserColorPickerModal />
    </>
  );
}
