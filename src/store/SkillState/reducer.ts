import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum SkillCategory {
  Language = 0,
  FrontEnd = 1,
  BackEnd = 2,
  Mobile = 3,
  DatabaseTechnology = 4,
  CloudService = 5,
  Other = 6,
  SoftSkill = 7,
}

export type Skill = {
  name: string;
  yearsOfExperience: number;
  proficiency: SkillProficiency;
  category: SkillCategory;
};

export enum SkillProficiency {
  Beginner = 0,
  Intermediate = 1,
  Advanced = 2,
  SomeKnowledge = 3,
}

export function GetSkillProficiencyDisplay(skillProficiency: SkillProficiency) {
  switch (skillProficiency) {
    case SkillProficiency.Beginner:
      return "Beginner";
    case SkillProficiency.Intermediate:
      return "Intermediate";
    case SkillProficiency.Advanced:
      return "Advanced";
    case SkillProficiency.SomeKnowledge:
      return "Some Knowledge";
    default:
      return "Error";
  }
}

export type SkillState = {
  skills: Skill[];
};

const initialState: SkillState = {
  skills: [
    {
      name: "AWS Services",
      yearsOfExperience: 3,
      proficiency: SkillProficiency.Intermediate,
      category: SkillCategory.CloudService,
    },
    {
      name: "C#",
      yearsOfExperience: 5,
      proficiency: SkillProficiency.Advanced,
      category: SkillCategory.Language,
    },
    {
      name: "CSS",
      yearsOfExperience: 5,
      proficiency: SkillProficiency.Advanced,
      category: SkillCategory.Language,
    },
    {
      name: "Drizzle",
      yearsOfExperience: 1,
      proficiency: SkillProficiency.Intermediate,
      category: SkillCategory.BackEnd,
    },
    {
      name: "Entity Framework",
      yearsOfExperience: 4,
      proficiency: SkillProficiency.Advanced,
      category: SkillCategory.BackEnd,
    },
    {
      name: "Git",
      yearsOfExperience: 5,
      proficiency: SkillProficiency.Advanced,
      category: SkillCategory.Other,
    },
    {
      name: "HTML",
      yearsOfExperience: 5,
      proficiency: SkillProficiency.Advanced,
      category: SkillCategory.Language,
    },
    {
      name: "JavaScript",
      yearsOfExperience: 5,
      proficiency: SkillProficiency.Advanced,
      category: SkillCategory.Language,
    },
    {
      name: "Material UI",
      yearsOfExperience: 2,
      proficiency: SkillProficiency.Advanced,
      category: SkillCategory.FrontEnd,
    },
    {
      name: "MongoDB",
      yearsOfExperience: 2,
      proficiency: SkillProficiency.Advanced,
      category: SkillCategory.DatabaseTechnology,
    },
    {
      name: "Next.js",
      yearsOfExperience: 3,
      proficiency: SkillProficiency.Advanced,
      category: SkillCategory.FrontEnd,
    },
    {
      name: "Node.js",
      yearsOfExperience: 5,
      proficiency: SkillProficiency.Advanced,
      category: SkillCategory.BackEnd,
    },
    {
      name: "Postgres",
      yearsOfExperience: 4,
      proficiency: SkillProficiency.Advanced,
      category: SkillCategory.DatabaseTechnology,
    },
    {
      name: "React",
      yearsOfExperience: 4,
      proficiency: SkillProficiency.Advanced,
      category: SkillCategory.FrontEnd,
    },
    {
      name: "Angular",
      yearsOfExperience: 2,
      proficiency: SkillProficiency.Advanced,
      category: SkillCategory.FrontEnd,
    },
    {
      name: "React Native",
      yearsOfExperience: 1,
      proficiency: SkillProficiency.Intermediate,
      category: SkillCategory.Mobile,
    },
    {
      name: "Vue",
      yearsOfExperience: 2,
      proficiency: SkillProficiency.Advanced,
      category: SkillCategory.FrontEnd,
    },
    {
      name: "Redux",
      yearsOfExperience: 2,
      proficiency: SkillProficiency.Advanced,
      category: SkillCategory.FrontEnd,
    },
    {
      name: "Relational Databases",
      yearsOfExperience: 5,
      proficiency: SkillProficiency.Advanced,
      category: SkillCategory.DatabaseTechnology,
    },
    {
      name: "SCSS",
      yearsOfExperience: 4,
      proficiency: SkillProficiency.Advanced,
      category: SkillCategory.Language,
    },
    {
      name: "Source & Version Control",
      yearsOfExperience: 5,
      proficiency: SkillProficiency.Advanced,
      category: SkillCategory.Other,
    },
    {
      name: "SQL",
      yearsOfExperience: 5,
      proficiency: SkillProficiency.Advanced,
      category: SkillCategory.Language,
    },
    {
      name: "TypeScript",
      yearsOfExperience: 5,
      proficiency: SkillProficiency.Advanced,
      category: SkillCategory.Language,
    },
    {
      name: "UX/UI",
      yearsOfExperience: 4,
      proficiency: SkillProficiency.Intermediate,
      category: SkillCategory.Other,
    },
    {
      name: "Bootstrap",
      yearsOfExperience: 3,
      proficiency: SkillProficiency.Advanced,
      category: SkillCategory.FrontEnd,
    },
    {
      name: "Docker",
      yearsOfExperience: 3,
      proficiency: SkillProficiency.Intermediate,
      category: SkillCategory.Other,
    },
    {
      name: "MySQL",
      yearsOfExperience: 3,
      proficiency: SkillProficiency.Intermediate,
      category: SkillCategory.DatabaseTechnology,
    },
    {
      name: "Communication",
      yearsOfExperience: 10,
      proficiency: SkillProficiency.Advanced,
      category: SkillCategory.SoftSkill,
    },
    {
      name: "Problem Solving",
      yearsOfExperience: 10,
      proficiency: SkillProficiency.Advanced,
      category: SkillCategory.SoftSkill,
    },
    {
      name: "Critical Thinking",
      yearsOfExperience: 10,
      proficiency: SkillProficiency.Advanced,
      category: SkillCategory.SoftSkill,
    },
    {
      name: "SendGrid",
      yearsOfExperience: 2,
      proficiency: SkillProficiency.Intermediate,
      category: SkillCategory.CloudService,
    },
    {
      name: "Twilio SMS",
      yearsOfExperience: 2,
      proficiency: SkillProficiency.Intermediate,
      category: SkillCategory.CloudService,
    },
    {
      name: "Expo",
      yearsOfExperience: 1,
      proficiency: SkillProficiency.SomeKnowledge,
      category: SkillCategory.Mobile,
    },
    {
      name: "Express.js",
      yearsOfExperience: 3,
      proficiency: SkillProficiency.Intermediate,
      category: SkillCategory.BackEnd,
    },
    {
      name: "Google Cloud Services",
      yearsOfExperience: 2,
      proficiency: SkillProficiency.SomeKnowledge,
      category: SkillCategory.CloudService,
    },
    {
      name: "Terraform",
      yearsOfExperience: 3,
      proficiency: SkillProficiency.Advanced,
      category: SkillCategory.CloudService,
    },
    {
      name: "Python",
      yearsOfExperience: 2,
      proficiency: SkillProficiency.Intermediate,
      category: SkillCategory.Language,
    },
    {
      name: "Bash",
      yearsOfExperience: 3,
      proficiency: SkillProficiency.Advanced,
      category: SkillCategory.Language,
    },
    {
      name: ".NET",
      yearsOfExperience: 5,
      proficiency: SkillProficiency.Advanced,
      category: SkillCategory.BackEnd,
    },
    {
      name: "SQL Server",
      yearsOfExperience: 4,
      proficiency: SkillProficiency.Advanced,
      category: SkillCategory.DatabaseTechnology,
    },
    {
      name: "CI/CD Pipelines",
      yearsOfExperience: 4,
      proficiency: SkillProficiency.Advanced,
      category: SkillCategory.Other,
    },
    {
      name: "Ansible",
      yearsOfExperience: 2,
      proficiency: SkillProficiency.Intermediate,
      category: SkillCategory.Other,
    },
    {
      name: "Rundeck",
      yearsOfExperience: 2,
      proficiency: SkillProficiency.Intermediate,
      category: SkillCategory.Other,
    },
    {
      name: "HashiCorp Vault",
      yearsOfExperience: 2,
      proficiency: SkillProficiency.Intermediate,
      category: SkillCategory.Other,
    },
    {
      name: "SSH",
      yearsOfExperience: 3,
      proficiency: SkillProficiency.Advanced,
      category: SkillCategory.Other,
    }
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
