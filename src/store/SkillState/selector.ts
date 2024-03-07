import { createSelector } from "reselect";
import { RootState } from "../store";

const skillSelector = (state: RootState) => state.skills;

const allSkills = createSelector(skillSelector, (skills) => {
  return skills?.skills?.sort((a, b) => a.name.localeCompare(b.name));
});

export const skillSelectors = {
  allSkills,
};
