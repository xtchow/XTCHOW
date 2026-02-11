import { resume } from "@/data/resume";
import { Tag } from "@/components/ui/Tag";
import { RESUME_PATH } from "@/lib/constants";
import "./resume.scss";

export const metadata = {
  title: "Resume | Sarah Chow",
  description: "Professional experience and skills",
};

export default function ResumePage() {
  return (
    <main className="resume-page">
      <div className="container">
        <header className="resume-page__header">
          <div className="resume-page__title-row">
            <div>
              <h1>{resume.name}</h1>
              <p className="resume-page__role">{resume.title}</p>
            </div>
            <a href={RESUME_PATH} download className="resume-page__download">
              Download PDF
            </a>
          </div>
          <p className="resume-page__summary">{resume.summary}</p>
          <div className="resume-page__contact">
            <span>{resume.contact.email}</span>
            {resume.contact.github && <span>{resume.contact.github}</span>}
            {resume.contact.linkedin && <span>{resume.contact.linkedin}</span>}
          </div>
        </header>

        <section className="resume-section">
          <h2>Experience</h2>
          <div className="resume-section__content">
            {resume.experience.map((exp, index) => (
              <article key={index} className="experience-item">
                <div className="experience-item__header">
                  <div>
                    <h3>{exp.role}</h3>
                    <p className="experience-item__company">
                      {exp.company}
                      {exp.description && (
                        <span className="experience-item__desc"> — {exp.description}</span>
                      )}
                    </p>
                  </div>
                  <div className="experience-item__meta">
                    <span>
                      {exp.startDate} – {exp.endDate}
                    </span>
                  </div>
                </div>
                <div className="experience-item__stack">
                  {exp.techStack.map((tech) => (
                    <Tag key={tech} label={tech} variant="tech" />
                  ))}
                </div>
                <ul className="experience-item__highlights">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2>Education</h2>
          <div className="resume-section__content">
            {resume.education.map((edu, index) => (
              <article key={index} className="education-item">
                <h3>{edu.institution}</h3>
                <p>
                  {edu.degree} in {edu.field}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2>Skills</h2>
          <div className="resume-section__content">
            <div className="skills-grid">
              {resume.skills.map((category, index) => (
                <div key={index} className="skill-category">
                  <h3>{category.name}</h3>
                  <div className="skill-category__tags">
                    {category.skills.map((skill) => (
                      <Tag key={skill} label={skill} variant="tech" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
