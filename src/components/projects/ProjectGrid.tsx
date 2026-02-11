import { Project } from "@/types/project";
import { ProjectCard } from "./ProjectCard";
import "./ProjectGrid.scss";

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="project-grid__empty">
        <p>No projects found.</p>
      </div>
    );
  }

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
