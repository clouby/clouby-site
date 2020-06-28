import { useContext } from "react";
import { ThemeContext } from "./../context/theme";

import { MoonIcon, SunIcon } from "@primer/octicons-react";

import styles from "./header.module.css";


const Header = (props) => {
    const { switchTheme, theme } = useContext(ThemeContext);

    return (
        <header className={styles.dope}>
            <div onClick={switchTheme} className={styles.icon}>
                {theme.key === 'dark' ? <SunIcon size={24} /> : <MoonIcon size={24} />}
            </div>
        </header>
    );
}

export default Header;
