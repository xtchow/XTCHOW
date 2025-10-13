// pages/[slug].js

export async function getServerSideProps(context) {
  const { slug } = context.params;

  // your redirect map:
  const redirects = {
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
}

export default function RedirectPage() {
  return null; // never actually renders because of the redirect
}