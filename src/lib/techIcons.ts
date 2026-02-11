import {
  siJavascript,
  siTypescript,
  siPython,
  siRust,
  siReact,
  siNextdotjs,
  siRedux,
  siD3,
  siSass,
  siTailwindcss,
  siBootstrap,
  siNodedotjs,
  siExpress,
  siGraphql,
  siPostgresql,
  siMongodb,
  siRedis,
  siFirebase,
  siSqlite,
  siMobx,
  siDocker,
  siKubernetes,
  siWebpack,
  siVite,
  siExpo,
  siJest,
  siCypress,
  siPassport,
  siWebassembly,
} from "simple-icons";

import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiRust,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiD3Dotjs,
  SiSass,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiFirebase,
  SiSqlite,
  SiMobx,
  SiDocker,
  SiKubernetes,
  SiWebpack,
  SiVite,
  SiExpo,
  SiJest,
  SiCypress,
  SiPassport,
  SiWebassembly,
} from "react-icons/si";
import type { IconType } from "react-icons";

export interface TechConfig {
  color: string;
  icon: IconType | null;
}

const FALLBACK_COLORS: Record<string, string> = {
  "SWR": "#000000",
  "NextAuth.js": "#000000",
  "Argos CI": "#6B7280",
};

export const techIconMap: Record<string, TechConfig> = {
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
  "SASS": { color: `#${siSass.hex}`, icon: SiSass },
  "Tailwind CSS": { color: `#${siTailwindcss.hex}`, icon: SiTailwindcss },
  "Bootstrap": { color: `#${siBootstrap.hex}`, icon: SiBootstrap },
  "Node.js": { color: `#${siNodedotjs.hex}`, icon: SiNodedotjs },
  "Express": { color: `#${siExpress.hex}`, icon: SiExpress },
  "GraphQL": { color: `#${siGraphql.hex}`, icon: SiGraphql },
  "PostgreSQL": { color: `#${siPostgresql.hex}`, icon: SiPostgresql },
  "MongoDB": { color: `#${siMongodb.hex}`, icon: SiMongodb },
  "Redis": { color: `#${siRedis.hex}`, icon: SiRedis },
  "Firebase": { color: `#${siFirebase.hex}`, icon: SiFirebase },
  "Firestore": { color: `#${siFirebase.hex}`, icon: SiFirebase },
  "SQLite": { color: `#${siSqlite.hex}`, icon: SiSqlite },
  "MobX": { color: `#${siMobx.hex}`, icon: SiMobx },
  "Docker": { color: `#${siDocker.hex}`, icon: SiDocker },
  "Kubernetes": { color: `#${siKubernetes.hex}`, icon: SiKubernetes },
  "Webpack": { color: `#${siWebpack.hex}`, icon: SiWebpack },
  "Vite": { color: `#${siVite.hex}`, icon: SiVite },
  "Expo": { color: `#${siExpo.hex}`, icon: SiExpo },
  "Jest": { color: `#${siJest.hex}`, icon: SiJest },
  "Cypress": { color: `#${siCypress.hex}`, icon: SiCypress },
  "Passport.js": { color: `#${siPassport.hex}`, icon: SiPassport },
  "WebAssembly": { color: `#${siWebassembly.hex}`, icon: SiWebassembly },
  "React Navigation": { color: `#${siReact.hex}`, icon: SiReact },
  "React Native Maps": { color: `#${siReact.hex}`, icon: SiReact },
  "SWR": { color: FALLBACK_COLORS["SWR"], icon: null },
  "NextAuth.js": { color: FALLBACK_COLORS["NextAuth.js"], icon: null },
  "Argos CI": { color: FALLBACK_COLORS["Argos CI"], icon: null },
};

export function getTechConfig(label: string): TechConfig {
  return techIconMap[label] || { color: "#6B7280", icon: null };
}

export function darkenColor(hex: string, percent: number): string {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = Math.max(0, (num >> 16) - Math.round(255 * percent));
  const g = Math.max(0, ((num >> 8) & 0x00ff) - Math.round(255 * percent));
  const b = Math.max(0, (num & 0x0000ff) - Math.round(255 * percent));
  return `rgb(${r}, ${g}, ${b})`;
}

export function needsInvertedColor(hex: string): boolean {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = num >> 16;
  const g = (num >> 8) & 0x00ff;
  const b = num & 0x0000ff;
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.15;
}
