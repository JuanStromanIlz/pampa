import { ThemeProvider as StyledProvider } from 'styled-components';
import theme from './Theme';
import GlobalStyles from './GlobalStyles';

const ThemeProvider = ({customTheme, children}) => {
  return (
    <StyledProvider theme={customTheme || theme}>
      <GlobalStyles />
      {children}
    </StyledProvider>
  );
}

export default ThemeProvider;