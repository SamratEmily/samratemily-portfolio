import { PERSONAL_PROJECTS } from "./constants";

export interface Project {
  title: string;
  technologies: string[];
  description: string;
  tools?: string[];
}

export interface Achievement {
  rank: string;
  contest: string;
  team: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface PersonalProject {
  title: string;
  technologies: string[];
  description: string;
  tools?: string[];
  link: string;
}
