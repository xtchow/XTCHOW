import { description } from '@/styles/Home.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import { headingMd } from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>xtchow</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={headingMd}>
        {/* <Link href="/posts/first-post">Read this page!</Link> */}
        {/* <p className={description}>[Your Self Introduction]</p> */}
        <p className={description}>
          Salutation! I'm a software engineer with a passion for finding innovative solutions to complex problems.
        </p>
        <p className={description}>
          {/* I am constantly looking for opportunities to enhance my skills and take on new challenges. */}
          If you are interested in connecting with me, you can find me on <a href="https://www.linkedin.com/in/xtchow/">LinkedIn</a>
          , or drop me an email at <a href="mailto:sarah@xtchow.com">sarah@xtchow.com</a>
          , though the best way to reach me is through <a href="https://t.me/xtchow">Telegram</a>
          . You can also check out some of my work on <a href="https://github.com/xtchow">GitHub</a>.
        </p>
        <p className={description}>
          In my free time, I enjoy playing chess and I'm always up for a game.
          Send the challenge to <a href="https://www.chess.com/member/mercurie_opponent">@mercurie_opponent</a> on Chess.com.
        </p>

      </main>
      <footer></footer>
    </Layout>
  )
}
