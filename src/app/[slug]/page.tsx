import { redirect, notFound } from 'next/navigation';
import { REDIRECTS } from '@/config/constants';

export default async function RedirectPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const destination = REDIRECTS[slug];

  if (destination) {
    redirect(destination);
  }

  notFound();
}
