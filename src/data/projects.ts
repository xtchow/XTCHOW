import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "hydrovac-app",
    title: "The HydroVac App",
    category: "mobile",
    description:
      "A React Native mobile application for streamlining hydrovac service scheduling and management.",
    problem:
      "Hydrovac service companies needed a modern mobile solution to manage scheduling workflows across iOS and Android devices.",
    solution:
      "Led the development of modular, responsive components in React Native, reducing UI-related bugs by over 30%. Coordinated cross-platform development using Expo, reducing setup and build time by 45%. Incorporated Firebase and Firestore for secure authentication and live data management.",
    techStack: ["TypeScript", "React Native", "Expo", "Firebase", "Firestore", "React Navigation", "React Native Maps"],
    links: {},
    featured: true,
    date: "2024-12-01",
  },
  {
    slug: "datawisp",
    title: "Datawisp",
    category: "web",
    description:
      "An AI-powered platform for intuitive data analysis with advanced NLP features and interactive visualizations.",
    problem:
      "Data analysts needed a more intuitive way to interact with and visualize complex datasets using natural language.",
    solution:
      "Deployed advanced NLP features using OpenAI GPT-4, resulting in 20% improvement in text generation accuracy. Expanded the concurrent system in Rust for increased processing speed. Developed interactive data visualizations using D3.js and Visx, resulting in 40% increase in data comprehension.",
    techStack: ["TypeScript", "Rust", "React", "MobX", "PostgreSQL", "SQLite", "WebAssembly", "D3.js", "Webpack", "Cypress"],
    links: {
      live: "https://datawisp.io",
    },
    featured: true,
    date: "2024-06-01",
  },
  {
    slug: "poseidon",
    title: "Poseidon",
    category: "web",
    description:
      "A cluster visualization and cost analysis tool developed under OSLabs for monitoring Kubernetes infrastructure.",
    problem:
      "DevOps teams struggled to visualize and understand the cost implications of their Kubernetes cluster configurations, leading to inefficient resource allocation.",
    solution:
      "Built a Next.js application with server-side rendering for optimal performance, MongoDB for data persistence, and interactive visualizations. Implemented Docker and Kubernetes deployment for consistent scaling.",
    techStack: ["TypeScript", "Next.js", "React", "Tailwind CSS", "MongoDB", "NextAuth.js", "SWR", "Cypress", "Docker", "Kubernetes"],
    links: {
      live: "https://os-poseidon.vercel.app/",
    },
    featured: true,
    date: "2023-05-01",
  },
  {
    slug: "umpire",
    title: "Umpire",
    category: "web",
    description:
      "A film endorsement app that helps users discover and rate movies with a scalable PostgreSQL backend.",
    problem:
      "Movie enthusiasts needed a platform to track, rate, and discover films with reliable performance under high user traffic.",
    solution:
      "Designed a scalable PostgreSQL database schema optimized for complex queries and large datasets, improving data retrieval speed by 40%. Implemented Google OAuth for secure authentication and comprehensive Jest test suites achieving 95% code coverage.",
    techStack: ["JavaScript", "React", "Redux Toolkit", "Node.js", "Express", "PostgreSQL", "Passport.js", "Webpack", "Jest"],
    links: {},
    featured: true,
    date: "2020-01-01",
  },
  {
    slug: "paperprompts",
    title: "PaperPrompts 2.0",
    category: "web",
    description:
      "An iteration of a flash cards app with improved state management and secure authentication.",
    problem:
      "The original flash cards app had scalability issues and lacked proper state management for complex user interactions.",
    solution:
      "Incorporated Redux into the existing codebase with custom middleware for extended functionality. Engineered a secure authentication system using Google OAuth and designed 10+ RESTful API endpoints with Express.",
    techStack: ["JavaScript", "React", "Redux Toolkit", "Node.js", "Express", "PostgreSQL", "Passport.js", "Webpack"],
    links: {},
    featured: false,
    date: "2019-01-01",
  },
  {
    slug: "off-my-couch",
    title: "Off My Couch",
    category: "web",
    description:
      "An event finder web app with responsive, mobile-first interfaces and optimized build performance.",
    problem:
      "Users needed a fast, mobile-friendly way to discover local events with cross-browser compatibility.",
    solution:
      "Leveraged Vite for fast hot module replacement and optimized builds. Revamped the styling architecture using SASS for maintainability and implemented responsive Bootstrap interfaces, leading to a 5% increase in user engagement.",
    techStack: ["JavaScript", "React", "Redux", "Node.js", "Express", "PostgreSQL", "Bootstrap", "Vite", "SASS"],
    links: {},
    featured: false,
    date: "2018-01-01",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
