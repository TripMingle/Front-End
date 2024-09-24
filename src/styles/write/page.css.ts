import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const pageContainer = style({
  position: 'relative',
  display: 'flex',
  top: 44,
  height: 'calc(100vh - 40px)',
  flexDirection: 'column',
  alignItems: 'center',
  '@media': {
    'screen and (min-width: 1024px)': {
      top: 60,
      height: 'calc(100vh - 60px)',
    },
  },
});

export const pageContent = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '30px 20px',
  width: '100%',
  maxWidth: 540,
  height: '100%',
  boxSizing: 'border-box',
  '@media': {
    'screen and (min-width: 1024px)': {
      padding: '40px 0px',
      maxWidth: 720,
    },
  },
});

export const contentContainer = style({
  flex: 1,
  margin: '20px 0px',
  overflowX: 'hidden',
  overflowY: 'scroll',
  '@media': {
    'screen and (min-width: 1024px)': {
      margin: '40px 0px',
    },
  },
});

export const explainText = style({
  marginLeft: 6,
  fontFamily: vars.font.body,
  fontWeight: 700,
  fontSize: 20,
  color: vars.color.black,
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 28,
    },
  },
});

export const explainStrongText = style({
  color: vars.color.secondary,
});
