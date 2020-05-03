import React from 'react';
import { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { theme } from '../src/theme/mainTheme';
import GlobalStyle from '../src/theme/GlobalStyle';

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle theme={theme} />
    {story()}
  </ThemeProvider>
));
addDecorator(StoryRouter());
