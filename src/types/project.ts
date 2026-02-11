export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  links: {
    live?: string;
    demo?: string;
    github?: string;
  };
  featured: boolean;
  date: string;
}

export type ProjectCategory =
  | "web"
  | "mobile"
  | "cli"
  | "api"
  | "other";

export const categoryLabels: Record<ProjectCategory, string> = {
  web: "Web App",
  mobile: "Mobile",
  cli: "CLI Tool",
  api: "API/Backend",
  other: "Other",
};

export const categories: ProjectCategory[] = ["web", "mobile", "cli", "api", "other"];
