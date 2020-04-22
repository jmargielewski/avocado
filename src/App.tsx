import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Root from './Root';
import Page from './pages/Page';
import MainTemplate from './templates/MainTemplate';

const App = (): JSX.Element => (
  <Root>
    <Router>
      <MainTemplate>
        <Page />
      </MainTemplate>
    </Router>
  </Root>
);

export default App;
