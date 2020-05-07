import styled, { DefaultTheme } from 'styled-components';
import { ContainerProps } from './Container.Types';

const respond = (breakpoints: DefaultTheme['Breakpoints']): string => {
  return `
      @media (max-width: ${breakpoints.xs}) {
        width: 100%;
      }
      @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
        width: 66rem;
      }
      @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
        width: 67rem;
      }
      @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
        width: 88rem;
      }
      @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
        width: 100rem;
      }
      @media (min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl}) {
        width: 120rem;
      }
      @media (min-width: ${breakpoints.xxl}) {
        width: 120rem;
      }
    `;
};

const fluid = (): string => 'width: 100%!important;';
const flex = (): string => 'display: flex; justify-content: center; align-items: center';

const Container = styled.div`
  max-width: 100%;
  min-height: 100%;
  margin: 0 auto;

  ${({ theme }): string => respond(theme.Breakpoints)}

  ${(props: ContainerProps): string => (props.fluid ? fluid() : '')}
  ${(props: ContainerProps): string => (props.flex ? flex() : '')}
`;

export default {
  Container,
};
