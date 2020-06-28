import { parseISO, format } from "date-fns";

import styles from "./date.module.css"

export default function Date({ dateString }) {
    const date = parseISO(dateString);

    return <time className={styles.date} dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
