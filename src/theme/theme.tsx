import { createMuiTheme } from '@material-ui/core';
import { useState } from 'react';

const Theme = () => {
  const [isDark, setIsDark] = useState(true);

  const theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#fff',
      },
    },
  });
};

export default Theme;
