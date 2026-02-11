import homeStyles from '@/styles/Home.module.scss';
import Layout from '@/components/layout';
import utilStyles from '@/styles/utils.module.scss';
import Footer from '@/components/Footer';
import { SOCIAL_LINKS } from '@/config/constants';

export default function Home() {
  return (
    <Layout home>
      <main className={utilStyles.headingMd}>
        <p className={homeStyles.description}>
          Salutation! I'm a software engineer with a passion for finding innovative solutions to complex problems.
        </p>
        <p className={homeStyles.description}>
          If you are interested in connecting with me, you can find me on <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          , or drop me an email at <a href={SOCIAL_LINKS.email}>sarah@xtchow.com</a>
          , though the fastest and best way to reach me is through <a href={SOCIAL_LINKS.telegram} target="_blank" rel="noopener noreferrer">Telegram</a>
          . You can also check out some of my work on <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">GitHub</a>.
        </p>
        <p className={homeStyles.description}>
          In my free time, I enjoy playing chess and I'm always up for a game.
          Send the challenge to <a href={SOCIAL_LINKS.chess} target="_blank" rel="noopener noreferrer">@xtchow</a> on Chess.com.
        </p>
      </main>

      <Footer />
    </Layout>
  );
}
