export interface Project {
  title: string;
  technologies: string[];
  description: string;
  tools?: string[];
  link?: string;
}

export interface PersonalProject extends Project {
  link: string;
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

export interface Education {
  degree: string;
  shortDegree: string;
  field: string;
  institution: string;
  location: string;
  cgpa: string;
  cgpaScale: string;
  status: string;
  highlights: string[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  text: string;
}
