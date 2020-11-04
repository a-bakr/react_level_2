import React, { useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Body from './components/Body';
import Header from './components/Header';

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const darkOrLight = () => (isDark ? 'dark' : 'light');

  const theme = createMuiTheme({
    palette: {
      type: darkOrLight(),
      primary: {
        main: isDark ? '#333' : '#1976D2',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Header isdark={isDark} isDarkTheme={() => setIsDark(!isDark)} />
      <Body />
    </ThemeProvider>
  );
};

export default App;
