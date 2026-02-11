"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import "./Header.scss";

const navItems = [
  { href: "/projects", label: "Experience" },
  // { href: "/resume", label: "Resume" }, // Hidden but still accessible at /resume
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="header__inner">
        <Link href="/" className="header__logo">
          <span className="mono">~/</span>portfolio
        </Link>

        <nav className="header__nav">
          <ul className="header__nav-list">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`header__nav-link ${isActive ? "header__nav-link--active" : ""}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
