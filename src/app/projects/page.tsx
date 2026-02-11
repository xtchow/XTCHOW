import Layout from '@/components/layout';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import styles from './page.module.scss';

export default function ProjectsPage() {
  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.heading}>Projects</h2>
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
