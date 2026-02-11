'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/components/TabNav.module.scss';

const tabs = [
  { label: 'About', href: '/' },
  { label: 'Projects', href: '/projects' },
];

export default function TabNav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`${styles.tab} ${isActive ? styles.active : ''}`}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
