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
      }, 1000);
    }
  }, [isInitialVisit, dispatch]);

  //hides color picker error - devs are aware fix is coming
  const error = console.error;
  console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
  };

  return <>{children}</>;
}
