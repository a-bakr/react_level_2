import React, { useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Body from './components/Body';
import Header from './components/Header';

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [isArabic, setIsArabic] = useState(false);

  document.dir = isArabic ? 'rtl' : 'ltr';

  const theme = createMuiTheme({
    palette: {
      type: isDark ? 'dark' : 'light',
      primary: {
        main: isDark ? '#333' : '#1976D2',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Header
        isDark={isDark}
        isArabic={isArabic}
        isLenArabic={() => setIsArabic(!isArabic)}
        isDarkTheme={() => setIsDark(!isDark)}
      />
      <Body />
    </ThemeProvider>
  );
};

export default App;
