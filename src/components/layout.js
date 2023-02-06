import { container, header, backToHome } from './layout.module.css';
import { borderCircle, heading2Xl, headingLg, colorInherit } from '../styles/utils.module.css';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const name = 'Sarah Chow';
export default function Layout({ children, home }) {
  const imgSize = home ? 144 : 108;
  return (
    <div className={container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Link href="/" className={header}>
          <Image
            priority
            src="/images/profile.jpg"
            className={borderCircle}
            height={imgSize}
            width={imgSize}
            alt="profile picture of Sarah Chow"
          />
          {home ? (
            <h1 className={heading2Xl}>{name}</h1>
          ) : (
            <h2 className={headingLg, colorInherit}>{name}</h2>
          )}
        </Link>
      </header>

      <main>{children}</main>

      {!home && (<Link href="/" className={backToHome}>← Back to home</Link>)}
    </div>
  );
}
