import { FlattenInterpolation, ThemeProps, DefaultTheme } from 'styled-components';

export type InterpolationWithTheme = FlattenInterpolation<ThemeProps<DefaultTheme>>;

export interface InputProps {
  focus?: boolean;
  loading?: boolean;
  icon?: string;
}
