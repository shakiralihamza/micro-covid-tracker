import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createTheme} from '@mui/material/styles';
import {ThemeProvider} from "@emotion/react";
import {CssBaseline} from "@mui/material";
import {orange, teal} from "@mui/material/colors";

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: teal,
        secondary: orange,
    }
});

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

const element = document.getElementById("root")
ReactDOM.createRoot(element).render(
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <App/>
    </ThemeProvider>
);
