// Site metadata
export const SITE_NAME = 'Sarah Chow';
export const SITE_TITLE = 'Sarah Chow | Software Engineer';
export const SITE_DESCRIPTION = 'Sarah Chow - Software Engineer with a passion for finding innovative solutions to complex problems.';
export const SITE_URL = 'https://xtchow.com';

// Assets
export const PROFILE_IMAGE = '/images/profile.png';
export const RESUME_URL = '/Chow,%20Sarah.pdf';

// Image sizes
export const IMAGE_SIZE_HOME = 144;
export const IMAGE_SIZE_DEFAULT = 108;

// Social links
export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/xtchow/',
  github: 'https://github.com/xtchow',
  email: 'mailto:sarah@xtchow.com',
  telegram: 'https://t.me/xtchow',
  chess: 'https://www.chess.com/member/xtchow',
} as const;

// Redirect mappings (for /[slug] routes)
export const REDIRECTS: Record<string, string> = {
  linkedin: SOCIAL_LINKS.linkedin,
  github: SOCIAL_LINKS.github,
  email: SOCIAL_LINKS.email,
};
