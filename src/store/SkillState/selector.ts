import { createSelector } from "reselect";
import { RootState } from "../store";

const skillSelector = (state: RootState) => state.skills;

const allSkills = createSelector(skillSelector, (skillState) => {
  return skillState.skills;
});

export const skillSelectors = {
  allSkills,
};
