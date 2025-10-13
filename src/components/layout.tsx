import { ReactNode } from 'react';
import layoutStyles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
  home?: boolean;
}

const name = 'Sarah Chow';
const r0328 = 'https://s3.amazonaws.com/attachments.angel.co/8235783-20ab7dbded9a79037cdf6f50a9d3d6b5.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJS6W3HGZGRJIRBTA%2F20230328%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230328T200618Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=602091ee35e63af702be5bd95382d935b5f856380dfb22aaeaaed09db995520a';

export default function Layout({ children, home }: LayoutProps) {
  const imgSize = home ? 144 : 108;
  return (
    <div className={layoutStyles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Link href={r0328} target="_blank" className={layoutStyles.header}>
          <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={imgSize}
            width={imgSize}
            alt="profile picture of Sarah Chow"
          />
          {home ? (
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          ) : (
            <h2 className={`${utilStyles.headingLg} ${utilStyles.colorInherit}`}>{name}</h2>
          )}
        </Link>
      </header>

      <main>{children}</main>

      {!home && (<Link href="/" className={layoutStyles.backToHome}>← Back to home</Link>)}
    </div>
  );
}
