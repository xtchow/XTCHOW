"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { getTechConfig, darkenColor, needsInvertedColor } from "@/lib/techIcons";
import "./Tag.scss";

interface TagProps {
  label: string;
  variant?: "tech" | "category";
}

export function Tag({ label, variant = "tech" }: TagProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (variant === "category") {
    return <span className="tag tag--category">{label}</span>;
  }

  const techConfig = getTechConfig(label);
  const isDark = mounted && resolvedTheme === "dark";

  let baseColor = techConfig.color;

  if (isDark && needsInvertedColor(baseColor)) {
    baseColor = "#ffffff";
  }

  const bgColor = isDark ? `${baseColor}20` : `${baseColor}15`;
  const borderColor = isDark ? `${baseColor}50` : `${baseColor}40`;
  const textColor = isDark ? baseColor : darkenColor(baseColor, 0.35);
  const iconColor = isDark ? baseColor : darkenColor(baseColor, 0.2);

  const IconComponent = techConfig.icon;

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
