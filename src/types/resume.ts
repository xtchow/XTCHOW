export interface Resume {
  name: string;
  title: string;
  summary: string;
  contact: {
    email: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
  experience: Experience[];
  education: Education[];
  skills: SkillCategory[];
}

export interface Experience {
  company: string;
  role: string;
  description?: string;
  techStack: string[];
  startDate: string;
  endDate: string | "Present";
  highlights: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
