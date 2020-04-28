import React, { FunctionComponent } from 'react';
import Styled from './Container.Styles';
import { ContainerProps } from './Container.Types';

const Container: FunctionComponent<ContainerProps> = ({ children, fluid }): JSX.Element => (
  <Styled.Container fluid={fluid}>{children}</Styled.Container>
);

Container.defaultProps = {
  fluid: false,
};

export default Container;
