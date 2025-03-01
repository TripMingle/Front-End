import { style } from '@vanilla-extract/css';
import { vars } from '../globalTheme.css';

export const bgContainer = style({
  position: 'relative',
  display: 'flex',
  width: '100%',
  minHeight: 320,
  justifyItems: 'center',
  overflow: 'hidden',
  maxWidth: '1920px',
  left: '50%',
  transform: 'translate(-50%, 0)',
  '@media': {
    'screen and (min-width: 1024px)': {
      height: 540,
    },
  },
});

export const bg = style({
  objectFit: 'cover',
});

export const boxContainer = style({
  position: 'absolute',
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

export const exploreContainer = style({
  position: 'relative',
  marginBottom: 40,
  '@media': {
    'screen and (min-width: 1024px)': {
      marginBottom: 60,
    },
  },
});

export const exploreText = style({
  position: 'relative',
  marginTop: 24,
  fontFamily: vars.font.menu,
  fontWeight: 700,
  fontSize: 36,
  zIndex: 2,
  color: vars.color.white,
  textAlign: 'center',
  textShadow: '0px 5px 20px #00000033',
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 64,
    },
  },
});

export const bigCircle = style({
  position: 'absolute',
  top: 12,
  left: 28,
  width: 32,
  height: 32,
  zIndex: 0,
  background: vars.color.primary,
  opacity: '50%',
  borderRadius: '50%',
  '@media': {
    'screen and (min-width: 1024px)': {
      top: 0,
      left: 48,
      width: 72,
      height: 72,
    },
  },
});

export const smallCircle = style({
  position: 'absolute',
  top: 64,
  left: 272,
  width: 14,
  height: 14,
  zIndex: 0,
  background: vars.color.primary,
  opacity: '50%',
  borderRadius: '50%',
  '@media': {
    'screen and (min-width: 1024px)': {
      top: 92,
      left: 480,
      width: 30,
      height: 30,
    },
  },
});

export const inputBox = style({
  width: 'calc(100% - 36px)',
  maxWidth: 400,
  padding: '12px 20px',
  borderRadius: '50px',
  margin: '0px 12px',
  background: '#ffffff33',
  backdropFilter: 'blur(3px)',
  justifyItems: 'center',
  display: 'inline-flex',
  boxSizing: 'border-box',
  '@media': {
    'screen and (min-width: 1024px)': {
      maxWidth: 600,
      padding: '16px 32px',
    },
  },
});

export const input = style({
  border: 0,
  outline: 0,
  flex: 1,
  background: 'none',
  color: vars.color.white,
  fontSize: 14,
  '::placeholder': {
    color: vars.color.white,
  },
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 20,
    },
  },
});

export const searchIcon = style({
  paddingLeft: 32,
  width: 20,
  height: 20,
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 24,
      height: 24,
    },
  },
});

export const contentContainer = style({
  position: 'relative',
  padding: '40px 16px',
  maxWidth: 1000,
  left: '50%',
  transform: 'translate(-50%, 0)',
  '@media': {
    'screen and (min-width: 1024px)': {
      padding: '40px 80px 0px 80px',
    },
  },
});

export const airplaneIcon = style({
  display: 'flex',
  width: 24,
  height: 24,
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 32,
      height: 32,
    },
  },
});

export const textContainer = style({
  position: 'relative',
  display: 'inline-flex',
  fontSize: 20,
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 28,
    },
  },
});

export const primaryText = style({
  display: 'flex',
  fontFamily: vars.font.menu,
  fontWeight: 700,
  color: vars.color.primary,
  paddingTop: 10,
});

export const plainText = style({
  display: 'flex',
  position: 'relative',
  fontFamily: vars.font.menu,
  fontWeight: 700,
  background: vars.color.white,
  paddingRight: 30,
  color: vars.color.black,
});

export const line = style({
  position: 'absolute',
  display: 'inline-flex',
  bottom: 10,
  width: 'calc(100vw - 32px)',
  maxWidth: 1000,
  height: 1,
  zIndex: -1,
  background: vars.color.g400,
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 'calc(100vw - 160px)',
      bottom: 16,
    },
  },
});

export const selectContainer = style({
  margin: '30px 0px 30px 0px',
});

export const moveToContinent = style({
  marginBottom: 30,
  fontSize: 16,
  fontWeight: 500,
  color: vars.color.g500,
  cursor: 'pointer',
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 18,
    },
  },
});

export const continentText = style({
  color: vars.color.black,
});

export const emptyCountry = style({
  display: 'flex',
  width: '100%',
  height: 100,
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.color.g400,
  fontSize: 20,
  fontFamily: vars.font.menu,
  fontWeight: 700,
  textAlign: 'center',
  lineHeight: 1.5,
  borderRadius: 16,
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 24,
      borderRadius: 20,
    },
  },
});
