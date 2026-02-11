import { Suspense } from "react";
import { projects } from "@/data/projects";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import "./projects.scss";

export const metadata = {
  title: "Experience | Sarah Chow",
  description: "Work experience and software engineering projects",
};

interface ProjectsPageProps {
  searchParams: Promise<{ tech?: string }>;
}

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const params = await searchParams;
  const tech = params.tech;

  const filteredProjects = tech
    ? projects.filter((p) => p.techStack.includes(tech))
    : projects;

  return (
    <main className="projects-page">
      <div className="container">
        <header className="projects-page__header">
          <h1>Experience</h1>
          <p>Work experience and projects I&apos;ve built.</p>
        </header>

        <Suspense fallback={null}>
          <ProjectFilter />
        </Suspense>

        <ProjectGrid projects={filteredProjects} />
      </div>
    </main>
  );
}
