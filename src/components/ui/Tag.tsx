"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  siJavascript,
  siTypescript,
  siPython,
  siRust,
  siReact,
  siNextdotjs,
  siRedux,
  siD3, // Note: siD3dotjs doesn't exist
  siHtml5,
  siSass,
  siTailwindcss,
  siBootstrap,
  siChakraui,
  siJquery,
  siNodedotjs,
  siExpress,
  siGraphql,
  siPostgresql,
  siMongodb,
  siRedis,
  siFirebase,
  siMysql,
  siSqlite,
  siMobx,
  siDocker,
  siKubernetes,
  siJenkins,
  siGit,
  siGithub,
  siGithubactions,
  siWebpack,
  siVite,
  siBabel,
  siExpo,
  siJest,
  siCypress,
  siMocha,
  siChai,
  siJasmine,
  siPassport,
  siWebassembly,
} from "simple-icons";

// Fallback colors for icons not in simple-icons
const FALLBACK_COLORS = {
  CSS3: "#1572B6",
  AWS: "#FF9900",
};
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiRust,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiD3Dotjs,
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiBootstrap,
  SiChakraui,
  SiJquery,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiFirebase,
  SiMysql,
  SiSqlite,
  SiMobx,
  SiDocker,
  SiKubernetes,
  SiAmazonwebservices,
  SiJenkins,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiWebpack,
  SiVite,
  SiBabel,
  SiExpo,
  SiJest,
  SiCypress,
  SiMocha,
  SiChai,
  SiJasmine,
  SiPassport,
  SiWebassembly,
} from "react-icons/si";
import type { IconType } from "react-icons";
import "./Tag.scss";

// Map tech labels to simple-icons data and react-icons components
const techIconMap: Record<string, { color: string; icon: IconType }> = {
  "JavaScript": { color: `#${siJavascript.hex}`, icon: SiJavascript },
  "TypeScript": { color: `#${siTypescript.hex}`, icon: SiTypescript },
  "Python": { color: `#${siPython.hex}`, icon: SiPython },
  "Rust": { color: `#${siRust.hex}`, icon: SiRust },
  "React": { color: `#${siReact.hex}`, icon: SiReact },
  "React Native": { color: `#${siReact.hex}`, icon: SiReact },
  "Next.js": { color: `#${siNextdotjs.hex}`, icon: SiNextdotjs },
  "Redux": { color: `#${siRedux.hex}`, icon: SiRedux },
  "Redux Toolkit": { color: `#${siRedux.hex}`, icon: SiRedux },
  "D3.js": { color: `#${siD3.hex}`, icon: SiD3Dotjs },
  "HTML5": { color: `#${siHtml5.hex}`, icon: SiHtml5 },
  "CSS3": { color: FALLBACK_COLORS.CSS3, icon: SiCss3 },
  "SASS": { color: `#${siSass.hex}`, icon: SiSass },
  "Tailwind": { color: `#${siTailwindcss.hex}`, icon: SiTailwindcss },
  "Tailwind CSS": { color: `#${siTailwindcss.hex}`, icon: SiTailwindcss },
  "Bootstrap": { color: `#${siBootstrap.hex}`, icon: SiBootstrap },
  "Chakra UI": { color: `#${siChakraui.hex}`, icon: SiChakraui },
  "jQuery": { color: `#${siJquery.hex}`, icon: SiJquery },
  "Node.js": { color: `#${siNodedotjs.hex}`, icon: SiNodedotjs },
  "Express": { color: `#${siExpress.hex}`, icon: SiExpress },
  "GraphQL": { color: `#${siGraphql.hex}`, icon: SiGraphql },
  "PostgreSQL": { color: `#${siPostgresql.hex}`, icon: SiPostgresql },
  "MongoDB": { color: `#${siMongodb.hex}`, icon: SiMongodb },
  "Redis": { color: `#${siRedis.hex}`, icon: SiRedis },
  "Firebase": { color: `#${siFirebase.hex}`, icon: SiFirebase },
  "Firestore": { color: `#${siFirebase.hex}`, icon: SiFirebase },
  "MySQL": { color: `#${siMysql.hex}`, icon: SiMysql },
  "SQLite": { color: `#${siSqlite.hex}`, icon: SiSqlite },
  "MobX": { color: `#${siMobx.hex}`, icon: SiMobx },
  "Docker": { color: `#${siDocker.hex}`, icon: SiDocker },
  "Kubernetes": { color: `#${siKubernetes.hex}`, icon: SiKubernetes },
  "AWS": { color: FALLBACK_COLORS.AWS, icon: SiAmazonwebservices },
  "Jenkins": { color: `#${siJenkins.hex}`, icon: SiJenkins },
  "Git": { color: `#${siGit.hex}`, icon: SiGit },
  "GitHub": { color: `#${siGithub.hex}`, icon: SiGithub },
  "GitHub Actions": { color: `#${siGithubactions.hex}`, icon: SiGithubactions },
  "Webpack": { color: `#${siWebpack.hex}`, icon: SiWebpack },
  "Vite": { color: `#${siVite.hex}`, icon: SiVite },
  "Babel": { color: `#${siBabel.hex}`, icon: SiBabel },
  "Expo": { color: `#${siExpo.hex}`, icon: SiExpo },
  "Jest": { color: `#${siJest.hex}`, icon: SiJest },
  "Cypress": { color: `#${siCypress.hex}`, icon: SiCypress },
  "Mocha": { color: `#${siMocha.hex}`, icon: SiMocha },
  "Chai": { color: `#${siChai.hex}`, icon: SiChai },
  "Jasmine": { color: `#${siJasmine.hex}`, icon: SiJasmine },
  "Passport.js": { color: `#${siPassport.hex}`, icon: SiPassport },
  "WebAssembly": { color: `#${siWebassembly.hex}`, icon: SiWebassembly },
  "React Navigation": { color: `#${siReact.hex}`, icon: SiReact },
  "React Native Maps": { color: `#${siReact.hex}`, icon: SiReact },
};

interface TagProps {
  label: string;
  variant?: "tech" | "category";
}

// Darken a hex color for better text readability
function darkenColor(hex: string, percent: number): string {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = Math.max(0, (num >> 16) - Math.round(255 * percent));
  const g = Math.max(0, ((num >> 8) & 0x00ff) - Math.round(255 * percent));
  const b = Math.max(0, (num & 0x0000ff) - Math.round(255 * percent));
  return `rgb(${r}, ${g}, ${b})`;
}

// Check if a color is too dark or too light for the given theme
function needsInvertedColor(hex: string): boolean {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = num >> 16;
  const g = (num >> 8) & 0x00ff;
  const b = num & 0x0000ff;
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.15; // Very dark colors (like #000000 for Next.js, Express, GitHub)
}

export function Tag({ label, variant = "tech" }: TagProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (variant === "category") {
    return <span className="tag tag--category">{label}</span>;
  }

  const techConfig = techIconMap[label];
  const isDark = mounted && resolvedTheme === "dark";

  // Get color from simple-icons library (now directly from the map)
  let baseColor = techConfig?.color || "#6B7280";

  // For very dark colors (black icons like Next.js, Express), use white in dark mode
  if (isDark && needsInvertedColor(baseColor)) {
    baseColor = "#ffffff";
  }

  const bgColor = isDark ? `${baseColor}20` : `${baseColor}15`;
  const borderColor = isDark ? `${baseColor}50` : `${baseColor}40`;
  const textColor = isDark ? baseColor : darkenColor(baseColor, 0.35);
  const iconColor = isDark ? baseColor : darkenColor(baseColor, 0.2);

  const IconComponent = techConfig?.icon || null;

  return (
    <span
      className="tag tag--tech"
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
        color: textColor,
      }}
    >
      {IconComponent && (
        <IconComponent className="tag__icon" size={12} color={iconColor} />
      )}
      {label}
    </span>
  );
}
