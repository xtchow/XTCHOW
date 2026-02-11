import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import layoutStyles from '@/components/layout.module.scss';
import utilStyles from '@/styles/utils.module.scss';
import TabNav from '@/components/TabNav';
import {
  SITE_NAME,
  PROFILE_IMAGE,
  RESUME_URL,
  IMAGE_SIZE_HOME,
  IMAGE_SIZE_DEFAULT,
} from '@/config/constants';

interface LayoutProps {
  children: ReactNode;
  home?: boolean;
}

export default function Layout({ children, home }: LayoutProps) {
  const imgSize = home ? IMAGE_SIZE_HOME : IMAGE_SIZE_DEFAULT;
  return (
    <div className={layoutStyles.container}>
      <header className={layoutStyles.header}>
        <Link href={RESUME_URL} target="_blank" rel="noopener noreferrer" className={layoutStyles.profileLink}>
          <Image
            priority
            src={PROFILE_IMAGE}
            className={utilStyles.borderCircle}
            height={imgSize}
            width={imgSize}
            alt={`profile picture of ${SITE_NAME}`}
          />
          {home ? (
            <h1 className={utilStyles.heading2Xl}>{SITE_NAME}</h1>
          ) : (
            <h2 className={`${utilStyles.headingLg} ${utilStyles.colorInherit}`}>{SITE_NAME}</h2>
          )}
        </Link>
      </header>

      <TabNav />

      <main>{children}</main>
    </div>
  );
}
