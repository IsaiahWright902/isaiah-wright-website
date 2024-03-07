import { createSlice } from "@reduxjs/toolkit";

export type Skill = {
  name: string;
  yearsOfExperience: number;
  proficiency: SkillProficiency;
};

enum SkillProficiency {
  Beginner = 0,
  Intermediate = 1,
  Advanced = 2,
}

export type SkillState = {
  skills: Skill[];
};

const initialState: SkillState = {
  skills: [
    {
      name: "AWS Services",
      yearsOfExperience: 0,
      proficiency: SkillProficiency.Beginner,
    },
    {
      name: "C#",
      yearsOfExperience: 0,
      proficiency: SkillProficiency.Beginner,
    },
    {
      name: "CSS",
      yearsOfExperience: 0,
      proficiency: SkillProficiency.Beginner,
    },
    {
      name: "Drizzle",
      yearsOfExperience: 0,
      proficiency: SkillProficiency.Beginner,
    },
    {
      name: "Entity Framework",
      yearsOfExperience: 0,
      proficiency: SkillProficiency.Beginner,
    },
    {
      name: "Git",
      yearsOfExperience: 0,
      proficiency: SkillProficiency.Beginner,
    },
    {
      name: "HTML",
      yearsOfExperience: 0,
      proficiency: SkillProficiency.Beginner,
    },
    {
      name: "JavaScript",
      yearsOfExperience: 4,
      proficiency: SkillProficiency.Advanced,
    },
    {
      name: "Material UI",
      yearsOfExperience: 0,
      proficiency: SkillProficiency.Beginner,
    },
    {
      name: "MongoDB",
      yearsOfExperience: 0,
      proficiency: SkillProficiency.Beginner,
    },
    {
      name: "Next.js",
      yearsOfExperience: 0,
      proficiency: SkillProficiency.Beginner,
    },
    {
      name: "Node.js",
      yearsOfExperience: 0,
      proficiency: SkillProficiency.Beginner,
    },
    {
      name: "Postgres",
      yearsOfExperience: 0,
      proficiency: SkillProficiency.Beginner,
    },
    {
      name: "React",
      yearsOfExperience: 0,
      proficiency: SkillProficiency.Beginner,
    },
    {
      name: "Vue",
      yearsOfExperience: 2,
      proficiency: SkillProficiency.Advanced,
    },
    {
      name: "Redux",
      yearsOfExperience: 0,
      proficiency: SkillProficiency.Beginner,
    },
    {
      name: "Relational Databases",
      yearsOfExperience: 0,
      proficiency: SkillProficiency.Beginner,
    },
    {
      name: "SCSS",
      yearsOfExperience: 0,
      proficiency: SkillProficiency.Beginner,
    },
    {
      name: "Source & Version Control",
      yearsOfExperience: 0,
      proficiency: SkillProficiency.Beginner,
    },
    {
      name: "SQL",
      yearsOfExperience: 0,
      proficiency: SkillProficiency.Beginner,
    },
    {
      name: "TypeScript",
      yearsOfExperience: 0,
      proficiency: SkillProficiency.Beginner,
    },
    {
      name: "UX/UI",
      yearsOfExperience: 0,
      proficiency: SkillProficiency.Beginner,
    },
    {
      name: "Bootstrap",
      yearsOfExperience: 3,
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
