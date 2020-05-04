import { FlattenInterpolation, ThemeProps, DefaultTheme } from 'styled-components';

export type InterpolationWithTheme = FlattenInterpolation<ThemeProps<DefaultTheme>>;

export interface InputProps {
  icon?: string;
  className?: string;
  loading?: boolean;
}
