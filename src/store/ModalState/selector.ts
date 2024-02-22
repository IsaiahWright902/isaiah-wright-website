import { createSelector } from "reselect";
import { RootState } from "../store";

const modalSelector = (state: RootState) => state.modals;

const welcomeModal = createSelector(
  modalSelector,
  (modals) => modals.welcomeModal
);

export const modalSelectors = {
  welcomeModal,
};
