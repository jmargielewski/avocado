import React, { FunctionComponent } from 'react';
import Styled from './Container.Styles';
import { ContainerProps } from './Container.Types';

const Container: FunctionComponent<ContainerProps> = ({ children, fluid, flex }): JSX.Element => (
  <Styled.Container fluid={fluid} flex={flex}>
    {children}
  </Styled.Container>
);

Container.defaultProps = {
  fluid: false,
  flex: false,
};

export default Container;
