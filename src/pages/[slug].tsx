import type { GetServerSideProps } from 'next';

type RedirectMap = {
  [key: string]: string;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as { slug: string };

  // your redirect map:
  const redirects: RedirectMap = {
    linkedin: "https://www.linkedin.com/in/xtchow/",
    github: "https://github.com/xtchow",
    // resume: "/files/resume.pdf",
    // twitter: "https://twitter.com/xtchow",
  };

  const destination = redirects[slug];

  if (destination) {
    return {
      redirect: {
        destination,
        permanent: true,
      },
    };
  }

  // fallback if slug not found
  return {
    notFound: true,
  };
};

export default function RedirectPage() {
  return null; // never actually renders because of the redirect
}