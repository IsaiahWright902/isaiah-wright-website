import { createSelector } from "reselect";
import { RootState } from "../store";

const skillSelector = (state: RootState) => state.skills;

const allSkills = createSelector(skillSelector, (skillState) => {
  return skillState.skills;
});

const skillFilters = createSelector(
  skillSelector,
  (skillState) => skillState?.skillFilter
);

export const skillSelectors = {
  allSkills,
  skillFilters,
};
