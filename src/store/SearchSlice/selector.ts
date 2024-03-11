import { RootState } from "../store";
import { createSelector } from "reselect";

const searchSelector = (state: RootState) => state.search;

const skillSearchFilters = createSelector(
  searchSelector,
  (searchState) => searchState?.skillFilter
);

export const searchSelectors = {
  skillSearchFilters,
};
