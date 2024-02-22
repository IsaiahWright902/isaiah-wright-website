"use client";

import { coreSelectors } from "@/store/CoreState/selector";
import { modalActions } from "@/store/ModalState/reducer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Init({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  const isInitialVisit = useSelector(coreSelectors.isInitialVisit);

  useEffect(() => {
    if (isInitialVisit) {
      setTimeout(() => {
        dispatch(modalActions.open("welcomeModal"));
      }, 2000);
    }
  }, [isInitialVisit, dispatch]);

  return <>{children}</>;
}
