import { ThemeProvider as StyledProvider } from 'styled-components';
import { theme as defaultTheme } from './Theme';
import GlobalStyles from './GlobalStyles';

const ThemeProvider = ({theme, children}) => {
  return (
    <StyledProvider theme={theme || defaultTheme}>
      <GlobalStyles />
      {children}
    </StyledProvider>
  );
}

export default ThemeProvider;