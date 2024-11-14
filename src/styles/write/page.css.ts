import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const pageContainer = style({
  position: 'relative',
  display: 'flex',
  padding: '74px 20px 30px 20px',
  width: '100%',
  height: '100vh',
  flexDirection: 'column',
  alignItems: 'center',
  boxSizing: 'border-box',
  '@media': {
    'screen and (min-width: 1024px)': {
      padding: '100px 0px 40px 0px',
    },
  },
});

export const pageContent = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '0px 20px',
  width: '100%',
  maxWidth: 540,
  height: '100%',
  boxSizing: 'border-box',
  overflow: 'hidden',
  '@media': {
    'screen and (min-width: 1024px)': {
      padding: '0px 0px',
      maxWidth: 720,
    },
  },
});

export const contentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  margin: '20px 0px',
  overflowY: 'auto',
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
