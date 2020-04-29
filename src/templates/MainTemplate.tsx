import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../theme/GlobalStyle';
import { theme } from '../theme/mainTheme';

class MainTemplate extends Component {
  state = { pageType: 'root' };

  render(): JSX.Element {
    const { children } = this.props;
    const { pageType } = this.state;

    return (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle theme={theme} />
          {children}
        </ThemeProvider>
      </>
    );
  }
}

export default MainTemplate;
