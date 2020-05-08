import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';

const DashboardPage: FunctionComponent<RouteComponentProps> = (): JSX.Element => {
  return <div>Welcome on your Dashboard</div>;
};

export type DashboardPageType = typeof DashboardPage;

export default DashboardPage;
