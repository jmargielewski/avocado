import React, { ReactChild } from 'react';
import Styled from './Grid.Styles';

const Grid = ({ children }: { children: ReactChild[] }): JSX.Element => (
  <Styled.StyledGrid>{children}</Styled.StyledGrid>
);

Grid.Row = Styled.Row;
Grid.Column = Styled.Column;

export default Grid;
