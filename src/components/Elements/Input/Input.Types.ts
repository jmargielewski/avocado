import { ChangeEvent } from 'react';
import { FlattenInterpolation, ThemeProps, DefaultTheme } from 'styled-components';

export type InterpolationWithTheme = FlattenInterpolation<ThemeProps<DefaultTheme>>;

export interface InputProps {
  id?: string;
  type?: string;
  name?: string;
  value?: string;
  onChange?(event: ChangeEvent<HTMLInputElement>): void;
  placeholder?: string;
  icon?: string;
  className?: string;
  loading?: boolean;
}
