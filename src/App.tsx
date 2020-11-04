import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core';
import Body from './components/Body';
import Header from './components/Header';
import lightTheme from './theme/lightTheme';
import darkTheme from './theme/darkTheme';

interface Props {
  isDarkTheme: Function;
}

const App = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Header isDarkTheme={() => setIsDark(!isDark)} />
      <Body />
    </ThemeProvider>
  );
};

export default App;
