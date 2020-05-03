import React from 'react';
import Paragraph from './index';

export default {
  component: Paragraph,
  title: 'Atoms/Paragraph',
};

export const light = (): JSX.Element => (
  <Paragraph light>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, quo. Inventore, officiis
    perspiciatis. Necessitatibus temporibus totam dolore ratione architecto vel magni vero, id
    blanditiis, hic consequatur dolor ipsum doloribus illo.
  </Paragraph>
);
export const normal = (): JSX.Element => (
  <Paragraph>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, quo. Inventore, officiis
    perspiciatis. Necessitatibus temporibus totam dolore ratione architecto vel magni vero, id
    blanditiis, hic consequatur dolor ipsum doloribus illo.
  </Paragraph>
);
