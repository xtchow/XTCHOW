import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/data/projects";
import { categoryLabels } from "@/types/project";
import { Tag } from "@/components/ui/Tag";
import "./project-detail.scss";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="project-detail">
      <div className="container">
        <Link href="/projects" className="project-detail__back">
          ← Back to Projects
        </Link>

        <header className="project-detail__header">
          <span className="project-detail__category">
            {categoryLabels[project.category]}
          </span>
          <h1>{project.title}</h1>
          <p className="project-detail__description">{project.description}</p>
        </header>

        <div className="project-detail__tags">
          {project.techStack.map((tech) => (
            <Tag key={tech} label={tech} variant="tech" />
          ))}
        </div>

        <div className="project-detail__content">
          <section className="project-detail__section">
            <h2>The Problem</h2>
            <p>{project.problem}</p>
          </section>

          <section className="project-detail__section">
            <h2>The Solution</h2>
            <p>{project.solution}</p>
          </section>
        </div>

        {(project.links.live || project.links.demo || project.links.github) && (
          <div className="project-detail__links">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-detail__link"
              >
                Visit Site →
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-detail__link"
              >
                View Demo →
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-detail__link"
              >
                View Source →
              </a>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
