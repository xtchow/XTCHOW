"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import { getTechConfig, darkenColor, needsInvertedColor } from "@/lib/techIcons";
import "./ProjectFilter.scss";

const techCategories: { name: string; techs: string[] }[] = [
  {
    name: "Languages",
    techs: ["JavaScript", "TypeScript", "Rust"],
  },
  {
    name: "Frontend",
    techs: ["React", "React Native", "Next.js", "Redux", "Redux Toolkit", "MobX", "D3.js", "Tailwind CSS", "Bootstrap", "SASS"],
  },
  {
    name: "Backend",
    techs: ["Node.js", "Express", "PostgreSQL", "MongoDB", "SQLite", "Firebase", "Firestore"],
  },
  {
    name: "Mobile",
    techs: ["Expo", "React Navigation", "React Native Maps"],
  },
  {
    name: "DevOps & Testing",
    techs: ["Docker", "Kubernetes", "Jest", "Cypress", "Webpack", "Vite", "WebAssembly"],
  },
  {
    name: "Auth",
    techs: ["Passport.js", "NextAuth.js"],
  },
  {
    name: "Other",
    techs: ["SWR"],
  },
];

// Get unique tech stacks from all projects
const projectTechs = new Set(projects.flatMap((p) => p.techStack));

// Filter categories to only include techs used in projects
const filteredCategories = techCategories
  .map((cat) => ({
    name: cat.name,
    techs: cat.techs.filter((tech) => projectTechs.has(tech)),
  }))
  .filter((cat) => cat.techs.length > 0);

export function ProjectFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTech = searchParams.get("tech");

  useEffect(() => setMounted(true), []);

  const handleFilter = (tech: string | null) => {
    const params = new URLSearchParams(searchParams);
    if (tech) {
      params.set("tech", tech);
    } else {
      params.delete("tech");
    }
    router.push(`/projects?${params.toString()}`);
  };

  const isDark = mounted && resolvedTheme === "dark";

  const getButtonStyle = (tech: string, isActive: boolean) => {
    const config = getTechConfig(tech);
    let baseColor = config.color;

    if (isDark && needsInvertedColor(baseColor)) {
      baseColor = "#ffffff";
    }

    if (isActive) {
      return {
        backgroundColor: isDark ? `${baseColor}30` : `${baseColor}20`,
        borderColor: baseColor,
        color: isDark ? baseColor : darkenColor(baseColor, 0.35),
      };
    }
    return {
      backgroundColor: isDark ? `${baseColor}15` : `${baseColor}10`,
      borderColor: isDark ? `${baseColor}30` : `${baseColor}25`,
      color: isDark ? baseColor : darkenColor(baseColor, 0.35),
    };
  };

  const renderTechButton = (tech: string) => {
    const config = getTechConfig(tech);
    const IconComponent = config.icon;
    const isActive = currentTech === tech;
    const style = getButtonStyle(tech, isActive);
    let iconColor = config.color;
    if (isDark && needsInvertedColor(iconColor)) {
      iconColor = "#ffffff";
    } else if (!isDark) {
      iconColor = darkenColor(iconColor, 0.2);
    }

    return (
      <button
        key={tech}
        className={`project-filter__button project-filter__button--tech ${isActive ? "project-filter__button--active" : ""}`}
        onClick={() => handleFilter(tech)}
        style={style}
      >
        {IconComponent && <IconComponent size={12} color={iconColor} />}
        {tech}
      </button>
    );
  };

  return (
    <div className="project-filter">
      <div className="project-filter__header">
        <button
          className={`project-filter__button ${!currentTech ? "project-filter__button--active" : ""}`}
          onClick={() => handleFilter(null)}
        >
          All
        </button>
      </div>
      {filteredCategories.map((category) => (
        <div key={category.name} className="project-filter__group">
          <span className="project-filter__label">{category.name}</span>
          <div className="project-filter__tags">
            {category.techs.map(renderTechButton)}
          </div>
        </div>
      ))}
    </div>
  );
}
