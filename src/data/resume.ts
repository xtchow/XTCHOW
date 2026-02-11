import { Resume } from "@/types/resume";

export const resume: Resume = {
  name: "Sarah Chow",
  title: "Senior Software Engineer",
  summary:
    "Software engineer building performant web and mobile applications. Experienced with React, React Native, TypeScript, and Rust. Focused on creating intuitive user experiences and scalable systems.",
  contact: {
    email: "sarah@xtchow.com",
    github: "github.com/xtchow",
    linkedin: "linkedin.com/in/xtchow",
  },
  experience: [
    {
      company: "The HydroVac App",
      role: "Senior Software Engineer",
      techStack: ["TypeScript", "React Native", "Expo", "Firebase", "Firestore", "React Navigation", "React Native Maps"],
      startDate: "Dec 2024",
      endDate: "Present",
      highlights: [
        "Led the development of modular, responsive components in React Native to streamline scheduling workflows, enhancing code reusability and preventing UI-related bugs by over 30% during initial testing",
        "Coordinated cross-platform development using Expo, reducing setup and build time by 45% and accelerating product delivery, while ensuring interface consistency across iOS and Android devices",
        "Incorporated Firebase and Firestore to secure user authentication and live data management between clients, reducing backend overhead and supporting seamless multi-user access with near-zero latency",
        "Maintained the large-scale application using TypeScript, resulting in a 30% reduction in bugs",
      ],
    },
    {
      company: "Datawisp",
      role: "Software Developer",
      description: "AI-powered platform for intuitive data analysis",
      techStack: ["TypeScript", "Rust", "React", "MobX", "PostgreSQL", "SQLite", "WebAssembly", "Webpack", "Cypress", "Argos CI"],
      startDate: "Jun 2023",
      endDate: "Nov 2024",
      highlights: [
        "Deployed advanced NLP features using OpenAI GPT-4 architectures, resulting in a 20% improvement in text generation accuracy and an increase in engagement across the platform",
        "Expanded on the concurrent system in Rust, increasing processing speed and reducing memory usage",
        "Introduced Argos CI for visual regression testing, ensuring UI consistency and catching visual defects early, which led to a 30% reduction in post-release visual bugs",
        "Developed interactive data visualizations using D3.js and Visx, transforming complex data sets into insightful and user-friendly charts and graphs, resulting in a 40% increase in data comprehension",
      ],
    },
    {
      company: "Poseidon",
      role: "Software Engineer",
      description: "Cluster visualization and cost analysis tool developed under OSLabs",
      techStack: ["TypeScript", "Next.js", "React", "Tailwind CSS", "MongoDB", "NextAuth.js", "SWR", "Cypress"],
      startDate: "Jan 2021",
      endDate: "May 2023",
      highlights: [
        "Implemented server-side rendering with Next.js to optimize application performance, resulting in a 40% decrease in page load times and a 25% increase in organic search traffic due to improved SEO",
        "Executed end-to-end tests using Cypress, resulting in a 40% reduction in post-deployment bugs",
        "Leveraged Docker and Kubernetes to ensure consistent performance of interdependent apps by enabling flexible scaling processes; this reduced deployment time and minimized the risk of conflicts and errors",
        "Utilized Tailwind CSS to design the user interface, accelerating the development process by 30%",
      ],
    },
  ],
  education: [
    {
      institution: "The University of Texas at Dallas",
      degree: "Bachelor of Science",
      field: "Computer Science",
    },
  ],
  skills: [
    {
      name: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Rust"],
    },
    {
      name: "Frontend",
      skills: ["React", "React Native", "Next.js", "Redux", "D3.js", "Tailwind CSS", "SASS"],
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express", "GraphQL", "PostgreSQL", "MongoDB", "Redis", "Firebase"],
    },
    {
      name: "DevOps & Testing",
      skills: ["Docker", "Kubernetes", "Jest", "Cypress", "Webpack", "Vite"],
    },
  ],
};
