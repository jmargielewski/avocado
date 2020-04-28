import React, { Component } from 'react';
import Styled from './Grid.Styles';

class Grid extends Component {
  static Column = Styled.Column;

  static Row = Styled.Row;

  public render(): JSX.Element {
    const { children } = this.props;
    return <Styled.StyledGrid>{children}</Styled.StyledGrid>;
  }
}

export default Grid;
