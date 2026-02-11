import Link from "next/link";
import { resume } from "@/data/resume";
import { Tag } from "@/components/ui/Tag";
import "./home.scss";

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="container">
          <p className="hero__greeting mono">Hi, I&apos;m</p>
          <h1 className="hero__name">Sarah Chow</h1>
          <p className="hero__title">Senior Software Engineer</p>
          <p className="hero__description">
            I build performant web and mobile applications with React, TypeScript, and Rust.
            Focused on creating intuitive user experiences and scalable systems.
          </p>
          <div className="hero__cta">
            <Link href="/projects" className="hero__button hero__button--primary">
              View Experience
            </Link>
            <Link href="/contact" className="hero__button hero__button--secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="experience-section">
        <div className="container">
          <h2>Experience</h2>
          <div className="experience-section__list">
            {resume.experience.map((exp, index) => (
              <article key={index} className="experience-card">
                <div className="experience-card__header">
                  <div>
                    <h3>{exp.role}</h3>
                    <p className="experience-card__company">
                      {exp.company}
                      {exp.description && (
                        <span className="experience-card__desc"> — {exp.description}</span>
                      )}
                    </p>
                  </div>
                  <span className="experience-card__date">
                    {exp.startDate} – {exp.endDate}
                  </span>
                </div>
                <div className="experience-card__tags">
                  {exp.techStack.map((tech) => (
                    <Tag key={tech} label={tech} variant="tech" />
                  ))}
                </div>
                <ul className="experience-card__highlights">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="container">
          <h2>Skills</h2>
          <div className="skills-section__grid">
            {resume.skills.map((category, index) => (
              <div key={index} className="skills-section__category">
                <h3>{category.name}</h3>
                <div className="skills-section__tags">
                  {category.skills.map((skill) => (
                    <Tag key={skill} label={skill} variant="tech" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
