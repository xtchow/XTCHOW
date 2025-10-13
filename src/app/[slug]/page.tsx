import { redirect, notFound } from 'next/navigation';

type RedirectMap = {
  [key: string]: string;
};

const redirects: RedirectMap = {
  linkedin: "https://www.linkedin.com/in/xtchow/",
  github: "https://github.com/xtchow",
  // resume: "/files/resume.pdf",
  // twitter: "https://twitter.com/xtchow",
};

export default async function RedirectPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const destination = redirects[slug];

  if (destination) {
    redirect(destination);
  }

  notFound();
}
