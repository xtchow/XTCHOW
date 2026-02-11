import Link from "next/link";
import { Project, categoryLabels } from "@/types/project";
import { Tag } from "@/components/ui/Tag";
import "./ProjectCard.scss";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <header className="project-card__header">
        <h3 className="project-card__title">
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <span className="project-card__category">
          {categoryLabels[project.category]}
        </span>
      </header>

      <p className="project-card__description">{project.description}</p>

      <div className="project-card__tags">
        {project.techStack.slice(0, 4).map((tech) => (
          <Tag key={tech} label={tech} variant="tech" />
        ))}
        {project.techStack.length > 4 && (
          <Tag label={`+${project.techStack.length - 4}`} variant="tech" />
        )}
      </div>

      <div className="project-card__links">
        {project.links.live && (
          <a href={project.links.live} target="_blank" rel="noopener noreferrer">
            Site
          </a>
        )}
        {project.links.demo && (
          <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        )}
        {project.links.github && (
          <a href={project.links.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
        <Link href={`/projects/${project.slug}`}>Details →</Link>
      </div>
    </article>
  );
}
