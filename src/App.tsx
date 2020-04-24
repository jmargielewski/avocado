import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, RouteProps } from 'react-router-dom';

import Root from './Root';
import Page from './pages/Page';
import MainTemplate from './templates/MainTemplate';
import AuthTemplate from './templates/AuthTemplate';

import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';

import { routes, RouteLayoutsTypes, RouteComponentsTypes } from './routes';

interface PageRouteProps extends RouteProps {
  component: RouteComponentsTypes;
  layout: RouteLayoutsTypes;
}

const PageRoute: FunctionComponent<PageRouteProps> = ({
  component: Component,
  layout: Layout,
  ...rest
}): JSX.Element => (
  <Route
    {...rest}
    render={(props): JSX.Element => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

const App: FunctionComponent = (): JSX.Element => (
  <Root>
    <Router>
      <MainTemplate>
        <Switch>
          <PageRoute exact path={routes.login} component={LoginPage} layout={AuthTemplate} />
          <PageRoute exact path={routes.register} component={RegisterPage} layout={AuthTemplate} />
          <Route path="/" component={Page} />
        </Switch>
      </MainTemplate>
    </Router>
  </Root>
);

export default App;
