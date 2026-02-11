import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import '@/styles/globals.scss';
import {
  SITE_NAME,
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_URL,
  PROFILE_IMAGE,
  IMAGE_SIZE_HOME,
} from '@/config/constants';

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: ['software engineer', 'developer', 'Sarah Chow', 'xtchow'],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  icons: {
    icon: '/onion.png',
  },
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'xtchow',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: PROFILE_IMAGE,
        width: IMAGE_SIZE_HOME,
        height: IMAGE_SIZE_HOME,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [PROFILE_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={robotoMono.className}>
      <body>{children}</body>
    </html>
  );
}
