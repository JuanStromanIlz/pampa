import { ThemeProvider as StyledProvider } from 'styled-components';
import defaultTheme from './Theme';
import GlobalStyles from './GlobalStyles';

const ThemeProvider = ({theme, children}) => {
  return (
    <StyledProvider theme={theme}>
      <GlobalStyles />
      {children}
    </StyledProvider>
  );
}

ThemeProvider.defaultProps = {
  theme: defaultTheme
};

export default ThemeProvider;