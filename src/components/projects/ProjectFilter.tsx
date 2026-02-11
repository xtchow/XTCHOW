"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import {
  siJavascript,
  siTypescript,
  siRust,
  siReact,
  siNextdotjs,
  siRedux,
  siExpo,
  siFirebase,
  siMobx,
  siD3,
  siNodedotjs,
  siExpress,
  siPostgresql,
  siMongodb,
  siSqlite,
  siDocker,
  siKubernetes,
  siWebpack,
  siVite,
  siJest,
  siCypress,
  siBootstrap,
  siSass,
  siTailwindcss,
  siPassport,
  siWebassembly,
} from "simple-icons";
import {
  SiJavascript,
  SiTypescript,
  SiRust,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiExpo,
  SiFirebase,
  SiMobx,
  SiD3Dotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiSqlite,
  SiDocker,
  SiKubernetes,
  SiWebpack,
  SiVite,
  SiJest,
  SiCypress,
  SiBootstrap,
  SiSass,
  SiTailwindcss,
  SiPassport,
  SiWebassembly,
} from "react-icons/si";
import type { IconType } from "react-icons";
import "./ProjectFilter.scss";

// Tech config for filter buttons
const techFilterMap: Record<string, { color: string; icon: IconType }> = {
  "JavaScript": { color: `#${siJavascript.hex}`, icon: SiJavascript },
  "TypeScript": { color: `#${siTypescript.hex}`, icon: SiTypescript },
  "Rust": { color: `#${siRust.hex}`, icon: SiRust },
  "React": { color: `#${siReact.hex}`, icon: SiReact },
  "React Native": { color: `#${siReact.hex}`, icon: SiReact },
  "Next.js": { color: `#${siNextdotjs.hex}`, icon: SiNextdotjs },
  "Redux": { color: `#${siRedux.hex}`, icon: SiRedux },
  "Redux Toolkit": { color: `#${siRedux.hex}`, icon: SiRedux },
  "Expo": { color: `#${siExpo.hex}`, icon: SiExpo },
  "Firebase": { color: `#${siFirebase.hex}`, icon: SiFirebase },
  "Firestore": { color: `#${siFirebase.hex}`, icon: SiFirebase },
  "MobX": { color: `#${siMobx.hex}`, icon: SiMobx },
  "D3.js": { color: `#${siD3.hex}`, icon: SiD3Dotjs },
  "Node.js": { color: `#${siNodedotjs.hex}`, icon: SiNodedotjs },
  "Express": { color: `#${siExpress.hex}`, icon: SiExpress },
  "PostgreSQL": { color: `#${siPostgresql.hex}`, icon: SiPostgresql },
  "MongoDB": { color: `#${siMongodb.hex}`, icon: SiMongodb },
  "SQLite": { color: `#${siSqlite.hex}`, icon: SiSqlite },
  "Docker": { color: `#${siDocker.hex}`, icon: SiDocker },
  "Kubernetes": { color: `#${siKubernetes.hex}`, icon: SiKubernetes },
  "Webpack": { color: `#${siWebpack.hex}`, icon: SiWebpack },
  "Vite": { color: `#${siVite.hex}`, icon: SiVite },
  "Jest": { color: `#${siJest.hex}`, icon: SiJest },
  "Cypress": { color: `#${siCypress.hex}`, icon: SiCypress },
  "Bootstrap": { color: `#${siBootstrap.hex}`, icon: SiBootstrap },
  "SASS": { color: `#${siSass.hex}`, icon: SiSass },
  "Tailwind CSS": { color: `#${siTailwindcss.hex}`, icon: SiTailwindcss },
  "Passport.js": { color: `#${siPassport.hex}`, icon: SiPassport },
  "WebAssembly": { color: `#${siWebassembly.hex}`, icon: SiWebassembly },
  "React Navigation": { color: `#${siReact.hex}`, icon: SiReact },
  "React Native Maps": { color: `#${siReact.hex}`, icon: SiReact },
};

// Fallback colors
const FALLBACK_COLORS: Record<string, string> = {
  "SWR": "#000000",
  "NextAuth.js": "#000000",
};

// Category definitions
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

function darkenColor(hex: string, percent: number): string {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = Math.max(0, (num >> 16) - Math.round(255 * percent));
  const g = Math.max(0, ((num >> 8) & 0x00ff) - Math.round(255 * percent));
  const b = Math.max(0, (num & 0x0000ff) - Math.round(255 * percent));
  return `rgb(${r}, ${g}, ${b})`;
}

function needsInvertedColor(hex: string): boolean {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = num >> 16;
  const g = (num >> 8) & 0x00ff;
  const b = num & 0x0000ff;
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.15;
}

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
    const config = techFilterMap[tech];
    let baseColor = config?.color || FALLBACK_COLORS[tech] || "#6B7280";

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
    const config = techFilterMap[tech];
    const IconComponent = config?.icon;
    const isActive = currentTech === tech;
    const style = getButtonStyle(tech, isActive);
    let iconColor = config?.color || FALLBACK_COLORS[tech] || "#6B7280";
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
