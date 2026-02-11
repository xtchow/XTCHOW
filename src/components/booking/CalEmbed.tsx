"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import "./CalEmbed.scss";

interface CalEmbedProps {
  calLink: string;
}

export function CalEmbed({ calLink }: CalEmbedProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: resolvedTheme as "light" | "dark",
        styles: {
          branding: { brandColor: "#F59E0B" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [mounted, resolvedTheme]);

  if (!mounted) {
    return (
      <div className="cal-embed-skeleton">
        <p>Loading calendar...</p>
      </div>
    );
  }

  return (
    <div className="cal-embed-wrapper">
      <Cal
        calLink={calLink}
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view" }}
      />
    </div>
  );
}
