import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: ${({ theme }): string => theme.notes}; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledAuthCard = styled.div`
  width: 40rem;
  height: 40rem;
  /* background-color: white; */
  border-radius: 1rem;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AuthTemplate: FunctionComponent = ({ children }): JSX.Element => (
  <StyledWrapper>
    <StyledAuthCard>{children}</StyledAuthCard>
  </StyledWrapper>
);

export type AuthTemplateType = typeof AuthTemplate;

export default AuthTemplate;
