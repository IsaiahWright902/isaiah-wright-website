import { createSlice } from "@reduxjs/toolkit";

export type Skill = {
  name: string;
  yearsOfExperience: number;
  proficiency: SkillProficiency;
};

enum SkillProficiency {
  Novice = 0,
  Intermediate = 1,
  Advanced = 2,
}

export type SkillState = {
  skills: Skill[];
};

const initialState: SkillState = {
  skills: [
    {
      name: "JavScript",
      yearsOfExperience: 4,
      proficiency: SkillProficiency.Advanced,
    },
    {
      name: "TypeScript",
      yearsOfExperience: 2,
      proficiency: SkillProficiency.Advanced,
    },
  ],
};

export const SkillSlice = createSlice({
  name: "skills",
  initialState: initialState,
  reducers: {},
});

export const skillActions = {
  ...SkillSlice.actions,
};

export default SkillSlice.reducer;
