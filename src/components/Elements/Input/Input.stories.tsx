import React from 'react';
import Input from './';

export default {
  component: Input,
  title: 'Elements/Input',
};

export const standard = () => <Input />;
export const focus = () => <Input focus />;
export const loading = () => <Input loading icon="search" />;
