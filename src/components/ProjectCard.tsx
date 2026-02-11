import styles from '@/components/ProjectCard.module.scss';
import TechTag from '@/components/TechTag';

export interface Project {
  title: string;
  description: string;
  timeframe: string;
  tags: string[];
  url?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, timeframe, tags, url } = project;

  const CardContent = () => (
    <>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.timeframe}>{timeframe}</span>
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <TechTag key={tag} tag={tag} />
        ))}
      </div>
    </>
  );

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.card}
      >
        <CardContent />
      </a>
    );
  }

  return (
    <div className={styles.card}>
      <CardContent />
    </div>
  );
}
