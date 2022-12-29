import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeProvider, createTheme} from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#DBC446'
    },
    secondary: {
      main: '#DB9200'
    }
  }
})
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
