import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SkillCategory, SkillProficiency } from "../SkillState/reducer";

export enum YearsOfExperience {
  OneToTwo = 1,
  TwoToThree = 2,
  ThreeOrMore = 3,
}

export function IsYOEInSearchRange(
  filter: YearsOfExperience | string,
  val: number
) {
  switch (filter) {
    case YearsOfExperience.OneToTwo:
      return val >= 1 && val <= 2;
    case YearsOfExperience.TwoToThree:
      return val >= 2 && val <= 3;
    case YearsOfExperience.ThreeOrMore:
      return val > 3;
    default:
      return false;
  }
}

export type SkillFilter = {
  search: string;
  category: SkillCategory | string;
  proficiency: SkillProficiency | string;
  yearsOfExperience: YearsOfExperience | string;
};

export type SearchState = {
  skillFilter: SkillFilter;
};

const initialState: SearchState = {
  skillFilter: {
    search: "",
    category: "",
    proficiency: "",
    yearsOfExperience: "",
  },
};

export const SearchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    setSkillFilters: (state, action: PayloadAction<SkillFilter>) => {
      state.skillFilter = action.payload;
    },
  },
});

export const searchActions = {
  ...SearchSlice.actions,
};

export default SearchSlice.reducer;
