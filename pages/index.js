import Head from "next/head";
import Link from "next/link";

import { getPostsSortedData } from "../lib/posts"
import { getTalks } from "../lib/talks"
import Layout, { siteTitle } from "../components/layout";
import Date from "../components/date";
import Card from "../components/card"
import utilStyles from "../styles/utils.module.css";

export default function Home({ allPostsData, allTalksData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          ¡Hola a todos! 🙌
        </p>
        <p>
          Mi nombre es Carlos, soy Ingeniero de Sistemas <code>(Frontend Developer)</code>, a lo que programo todo el día y en las noches le dedico tiempo a ser más amigable con <strong>UI/UX </strong>
           y el <strong>medio ambiente</strong>.
        </p>
        <p>
          Gran aficionado de HP Lovecraft, escribo una que otra poesía  en el camino, puedes contactarme en <a href="https://github.com/clouby">/github</a> o <a href="http://twitter.com/cloubyy">/twitter</a>
        </p>
        <p>
          ¡Un gusto!
        </p>
      </section>
      <hr />
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingTitle}>_blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, time }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a className={`${utilStyles.headingLg} ${utilStyles.bold}`}>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
                <span> · {time.text}</span>
              </small>
            </li>
          ))}
        </ul>
      </section>
      <hr />
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingTitle}>_talks</h2>
        <div>
          <ul className={utilStyles.list}>
            {allTalksData.map((talk, index) => (
              <li key={`talk_${index}`}>
                <Card {...talk} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export function getStaticProps() {
  const allPostsData = getPostsSortedData();
  const allTalksData = getTalks();

  return {
    props: {
      allPostsData,
      allTalksData
    }
  };
}
