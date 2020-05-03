import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import themeDark from './_styles/theme.dark'
import './_styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ThemeProvider theme={themeDark}><App /></ThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
