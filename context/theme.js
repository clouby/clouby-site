import { createContext, PureComponent } from "react";

export const themes = {
    light: {
        backgroundColor: 'white',
        color: 'gray',
        key: 'light'
    },
    dark: {
        backgroundColor: '#101010',
        color: 'azure',
        key: 'dark'
    }
}

export const ThemeContext = createContext({ theme: themes.dark, switchTheme: () => { } })


class ThemeProvider extends PureComponent {
    constructor(props) {
        super(props);

        this.switchTheme = () => {
            this.setState(state => ({
                theme: state.theme === themes.dark ? themes.light : themes.dark
            }))
        }

        this.state = {
            theme: themes.dark,
            switchTheme: this.switchTheme
        }
    }

    componentDidUpdate() {
        const main = document.documentElement;

        main.style.setProperty('--background-color', this.state.theme.backgroundColor);
        main.style.setProperty('--color', this.state.theme.color);

    }

    render() {
        const { children } = this.props
        return (
            <ThemeContext.Provider value={this.state}>
                {children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeProvider;
