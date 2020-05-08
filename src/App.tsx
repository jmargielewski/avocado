import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, RouteProps, Redirect } from 'react-router-dom';

import Root from './Root';

import MainTemplate from './templates/MainTemplate';
import AuthTemplate from './templates/AuthTemplate';
import DashboardTemplate from './templates/DashboardTemplate';

import HomePage from './pages/HomePage';
import DashboardPage from './pages/Dashboard';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';

import { getToken } from './localStorage/token';

import {
  routes,
  DashboardComponentsTypes,
  // DashboardLayoutTypes,
  PageComponentsTypes,
  PageLayoutsTypes,
} from './routes';

interface PageRouteProps extends RouteProps {
  component: PageComponentsTypes;
  layout: PageLayoutsTypes;
}

interface DashboardRouteProps extends RouteProps {
  component: DashboardComponentsTypes;
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

const DashboardRoute: FunctionComponent<DashboardRouteProps> = ({
  component: Component,
  ...rest
}): JSX.Element => (
  <Route
    {...rest}
    render={(props): JSX.Element => {
      return getToken() ? (
        <DashboardTemplate>
          <Component {...props} />
        </DashboardTemplate>
      ) : (
        <Redirect to={routes.login} />
      );
    }}
  />
);

const App: FunctionComponent = (): JSX.Element => (
  <Root>
    <Router>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <PageRoute exact path={routes.login} component={LoginPage} layout={AuthTemplate} />
          <PageRoute exact path={routes.register} component={RegisterPage} layout={AuthTemplate} />
          <DashboardRoute path={routes.dashboard} component={DashboardPage} />
        </Switch>
      </MainTemplate>
    </Router>
  </Root>
);

export default App;
