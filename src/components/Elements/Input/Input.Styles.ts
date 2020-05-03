import styled, { css, FlattenSimpleInterpolation, Keyframes } from 'styled-components';
import { InputProps, InterpolationWithTheme } from './Input.Types';
import Icon, { StyledIcon } from '../Icon';

const Input = styled.input`
  margin: 0;
  max-width: 100%;
  flex: 1 0 auto;
  outline: 0;
  font-family: ${({ theme }): string => theme.Fonts.main};
  padding: 0.8em 1em;
  background: ${({ theme }): string => theme.Colors.white};
  border: 1px solid ${({ theme }): string => theme.Colors.grey20};
  color: inherit;
  border-radius: ${({ theme }): string => theme.Radius.normal};
  transition: box-shadow 0.1s ease, border-color 0.1s ease;
  box-shadow: none;
`;

const InputWrapper = styled.div`
  position: relative;
  font-weight: ${({ theme }): number => theme.Wights.light};
  color: ${({ theme }): string => theme.Colors.grey60};
  display: inline-flex;

  ${({ focus }: InputProps): InterpolationWithTheme | false =>
    !!focus &&
    css`
      & > ${Input} {
        border-color: ${({ theme }): string => theme.SecondaryColors.blue30};
        box-shadow: none;
      }
    `}

  ${({ icon }: InputProps): FlattenSimpleInterpolation | false =>
    !!icon &&
    css`
      & > ${StyledIcon} {
        position: absolute;
        top: 0;
        left: 0;
        line-height: 1;
        text-align: center;
        margin: 0;
        height: 100%;
        width: 2.2em;
        opacity: 0.5;
        transition: opacity 0.3s ease;
      }
      & > ${Input} {
        padding-left: 3em;
      }
    `}

    ${({ icon, loading }: InputProps): InterpolationWithTheme | false =>
      !!icon && // eslint-disable-line @typescript-eslint/indent
      !!loading &&
      css`
        & > ${StyledIcon} {
          &::before,
          &::after {
            content: '';
            ${({ theme }): string => theme.mixins.absCenter}
            width: 1.3em;
            height: 1.3em;
            border-radius: ${({ theme }): string => theme.Radius.round};
          }

          &::before {
            border: 0.2em solid ${({ theme }): string => theme.Colors.grey20};
          }

          &::after {
            animation: ${({ theme }): Keyframes => theme.animations.rotate} 0.6s linear;
            animation-iteration-count: infinite;
            border-color: ${({ theme }): string => theme.Colors.grey50} transparent transparent;
            border-style: solid;
            border-width: 0.2em;
          }
        }
      `};
    `;

export default {
  InputWrapper,
  Input,
  Icon,
};
