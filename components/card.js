import Date from "./date"

import styles from "./card.module.css"
import utilStyles from "../styles/utils.module.css"

export default function Card({ date, title, link }) {
    return (
        <div className={styles.mainCard}>
            <a href={link} className={styles.noUnderline} target="_blank">
                <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                </small>
                <h2 className={styles.spaceOut}>{title}
                    <span className={styles.avatarTitle}> -
                    <img src="/images/profile.jpg" />
                    Carlos López
                </span>
                </h2>
            </a>
        </div>
    );
}
