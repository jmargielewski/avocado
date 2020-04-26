enum Colors {
  blue = '#2179ee',
  green = '#00cc9a',
  coral = '#ff6759',
  gold = '#f0b95b',
  purple = '#7537ef',
  white = '#ffffff',
  black = '#000000',

  grey10 = '#f3f4f8',
  grey20 = '#e1e5eb',
  grey30 = '#c2c6cc',
  grey40 = '#9ea2a8',
  grey50 = '#686c73',
  grey60 = '#30363d',
}

enum SecondaryColors {
  blue10 = '#ade7ff',
  blue20 = '#61bcff',
  blue30 = '#2179ee',
  blue40 = '#1f4ab4',
  blue50 = '#1d2064',
  green10 = '#b5ffcb',
  green20 = '#5dffa3',
  green30 = '#00cc9a',
  green40 = '#219a8a',
  green50 = '#183f51',
  purple10 = '#dec7ff',
  purple20 = '#a673ff',
  purple30 = '#7537ef',
  purple40 = '#4e23b6',
  purple50 = '#2d1b64',
  coral10 = '#ffc6b3',
  coral20 = '#ff8e75',
  coral30 = '#ff6759',
  coral40 = '#eb312a',
  coral50 = '#7b1e30',
  gold10 = '#ffedc2',
  gold20 = '#ffda8b',
  gold30 = '#f0b95b',
  gold40 = '#e5a229',
  gold50 = '#6a4a24',
}

enum Breakpoints {
  xs = '31.25em', // 500px
  sm = '37.5em', // 600px
  md = '56.25em', // 900px
  lg = '68.75em', // 1100px
  xl = '75em', // 1200 / 16 = 75
  xxl = '112.5em', // 1800px
}

enum Spaces {
  xs = '.4rem',
  sm = '.8rem',
  md = '1.2rem',
  lg = '1.6rem',
  xl = '2.0rem',
  xxl = '3.2rem',
}

enum FontSize {
  xs = '.8rem',
  sm = '1.2rem',
  md = '1.6rem',
  lg = '2.4rem',
  xl = '4rem',
  xxl = '6rem',
}

enum Fonts {
  main = 'Lato',
}

enum Shadows {
  // shadowDark = '0 2rem 6rem rgba(0, 0, 0, 0.3)',
  // shadowLight = '0 2rem 5rem rgba(0, 0, 0, .06)',
  shadowLight = '0 10px 20px -10px rgba(0, 0, 0, 0.2)',
}

enum Wights {
  light = 100,
  normal = 300,
  bold = 600,
}

export const theme = {
  Colors,
  SecondaryColors,
  Breakpoints,
  FontSize,
  Fonts,
  Spaces,
  Shadows,
  Wights,
};

declare module 'styled-components' {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {} // eslint-disable-line @typescript-eslint/no-empty-interface
}
