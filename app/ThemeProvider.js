'use client';

import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

const ThemeProvider = (props) => {
  const { children } = props;

  return (
    <MuiThemeProvider theme={theme} defaultMode='system'>
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
