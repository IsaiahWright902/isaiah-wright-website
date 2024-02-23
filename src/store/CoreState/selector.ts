import { createSelector } from "reselect";
import { RootState } from "../store";

const coreSelector = (state: RootState) => state.core;

const isInitialVisit = createSelector(
  coreSelector,
  (core) => core.initialVisit
);

const message = createSelector(coreSelector, (core) => {
  return core.message;
});

const themePreference = createSelector(coreSelector, (core) => core.theme);

const userColor = createSelector(coreSelector, (core) => core.userColor);

export const coreSelectors = {
  message,
  isInitialVisit,
  themePreference,
  userColor,
};
