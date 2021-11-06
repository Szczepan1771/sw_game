import {createTheme, Theme} from "@mui/material";
declare module '@mui/material/styles' {
    interface Theme {
        colors: {
            primaryYellow: string,
            black: string,
            white: string,
            blue: string
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        colors?: {
            primaryYellow: string,
            black: string,
            white: string,
            blue: string
        };
    }
}
const theme: Theme = createTheme({
    colors: {
        primaryYellow: "#FFE81F",
        black: "#000",
        white: "#FFF",
        blue: "#002395"
    },
})

export default theme;

