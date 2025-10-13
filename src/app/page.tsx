import homeStyles from '@/styles/Home.module.css';
import Layout from '@/components/layout';
import utilStyles from '@/styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <main className={utilStyles.headingMd}>
        <p className={homeStyles.description}>
          Salutation! I'm a software engineer with a passion for finding innovative solutions to complex problems.
        </p>
        <p className={homeStyles.description}>
          If you are interested in connecting with me, you can find me on <a href="https://www.linkedin.com/in/xtchow/">LinkedIn</a>
          , or drop me an email at <a href="mailto:sarah@xtchow.com">sarah@xtchow.com</a>
          , though the fastest and best way to reach me is through <a href="https://t.me/xtchow">Telegram</a>
          . You can also check out some of my work on <a href="https://github.com/xtchow">GitHub</a>.
        </p>
        <p className={homeStyles.description}>
          In my free time, I enjoy playing chess and I'm always up for a game.
          Send the challenge to <a href="https://www.chess.com/member/mercurie_opponent">@mercurie_opponent</a> on Chess.com.
        </p>
      </main>
      <footer></footer>
    </Layout>
  );
}
