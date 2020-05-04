import React from 'react';
import Input from '.';

export default {
  component: Input,
  title: 'Elements/Input',
};

export const standard = (): JSX.Element => <Input />;
export const loading = (): JSX.Element => <Input loading icon="search" />;
export const error = (): JSX.Element => <Input className="error" />;
