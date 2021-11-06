import React from 'react';
import {Provider} from "./Context";
import Router from "./Router";
import { ThemeProvider, withTheme } from '@mui/styles'
import theme from "./utils/theme";

function App() {
    return (
        <Provider>
            <ThemeProvider theme={theme}/>
            <Router/>
        </Provider>
    );
}

export default withTheme(App);
