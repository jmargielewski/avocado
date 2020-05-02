import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Container from '../components/Container';

const StyledAuthCard = styled.div`
  width: 40rem;
  height: 40rem;
  background-color: ${({ theme }): string => theme.Colors.white};
  border-radius: 1rem;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AuthTemplate: FunctionComponent = ({ children }): JSX.Element => (
  <Container fluid flex>
    <StyledAuthCard>{children}</StyledAuthCard>
  </Container>
);

export type AuthTemplateType = typeof AuthTemplate;

export default AuthTemplate;
