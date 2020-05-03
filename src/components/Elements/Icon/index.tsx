import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

export const StyledIcon = styled.i`
  font-size: 1em;
  display: inline-block;
  opacity: 1;
  width: 1em;
  height: 1em;
  font-size: 1em;
  font-family: Icons;
  font-weight: ${({ theme }): number => theme.Wights.normal};
  text-align: center;

  &::before,
  &::after {
    position: absolute;
    left: 0;
    top: 50%;
    text-align: center;
    width: 100%;
  }
`;

interface IconProps {
  icon?: string;
}

const Icon: FunctionComponent<IconProps> = ({ icon }) => {
  console.log('icon', icon);
  return <StyledIcon />;
};

export default Icon;
