import Head from "next/head";

import Layout from "../../components/layout";
import Date from "../../components/date"
import { getAllPostIds, getPostData } from "../../lib/posts"

import utilStyles from "../../styles/utils.module.css"
import cardStyles from "../../components/card.module.css"

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article >
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                    <span> · {postData.time.text}</span>
                </div>
                <span className={`${cardStyles.avatarTitle} ${utilStyles.lightText}`} style={{ margin: '1rem 0rem' }}> -
                    <img src="/images/profile.jpg" />
                    Carlos López
                </span>
                <div className={`${utilStyles.fontPost} ${utilStyles.spaceList}`} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData
        }
    }
}
