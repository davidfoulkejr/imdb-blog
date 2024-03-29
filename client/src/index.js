import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MuiThemeProvider } from '@material-ui/core/styles';
import AppTheme from './theme';
import * as serviceWorker from './serviceWorker';
import 'typeface-roboto';

const MyApp = (
  <MuiThemeProvider theme={AppTheme}>
    <App />
  </MuiThemeProvider>
)

ReactDOM.render(MyApp, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
