import { useContext } from "react";
import Link from "next/link";
import Head from "next/head";

import { ThemeContext } from "./../context/theme";

import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const name = "Carlos López"
export const nickname = "clouby"
export const siteTitle = "clouby - Frontend Developer"

export default function Layout({ children, home }) {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={styles.container} style={{ ...theme }}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Personal Website - Tech Posts & Personal Experiences"
                />
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {
                    home ?
                        (
                            <>
                                <h1 className={utilStyles.heading2Xl}>
                                    {name}
                                    <b className={`${styles.nick} ${styles.spaceDot}`}>·</b>
                                    <span className={styles.nick}>
                                        ({nickname})
                                    </span>
                                </h1>
                            </>
                        ) : (
                            <>
                                <h2 className={utilStyles.heading2Xl}>
                                    <Link href="/">
                                        <a className={`${utilStyles.colorInherit} ${styles.nick}`}>
                                            ▲
                                        </a>
                                    </Link>
                                </h2>
                            </>
                        )
                }
            </header>
            <main>{children}</main>
        </div>
    );
}
