import React, { FunctionComponent } from 'react';

const DashboardTemplate: FunctionComponent = ({ children }): JSX.Element => {
  return (
    <div>
      <h2>DashboardTemplate</h2>
      {children}
    </div>
  );
};

export type DashboardTemplateType = typeof DashboardTemplate;

export default DashboardTemplate;
