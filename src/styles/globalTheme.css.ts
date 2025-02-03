import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    primary: '#00C2FF',
    secondary: '#3688FF',
    black: '#000000',
    g900: '#121212',
    g800: '#262626',
    g700: '#393939',
    g600: '#4D4D4D',
    g500: '#888888',
    g400: '#B9B9B9',
    g300: '#E0E0E0',
    g200: '#F4F4F4',
    g100: '#F8F8F8',
    white: '#FFFFFF',
  },
  font: {
    body: 'var(--font-noto-sans)',
    menu: 'var(--font-gmarket-sans)',
  },
  screen: {
    mobile: '',
    tablet: 'screen and (min-width: 768px)',
    desktop: 'screen and (min-width: 1024px)',
  },
});

globalStyle('body', {
  margin: 0,
  fontFamily: vars.font.body,
  fontWeight: '400',
  color: vars.color.g800,
});

globalStyle('ul', {
  listStyleType: 'none',
  padding: 0,
  margin: 0,
});

globalStyle('p', {
  margin: 0,
});

globalStyle('a', {
  textDecoration: 'none',
  color: vars.color.g800,
});

globalStyle('::-webkit-scrollbar', {
  width: 0,
});

globalStyle('::-webkit-scrollbar-track', {
  background: 'transparent',
  WebkitBoxShadow: 'none',
});

globalStyle('::-webkit-scrollbar-thumb', {
  backgroundColor: vars.color.g500,
  borderRadius: 10,
  backgroundClip: 'padding-box',
});
