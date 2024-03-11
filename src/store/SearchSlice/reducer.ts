import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type SkillFilter = {
  search: string;
};

export type SearchState = {
  skillFilter: SkillFilter;
};

const initialState: SearchState = {
  skillFilter: {
    search: "",
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
