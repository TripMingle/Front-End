import { style } from '@vanilla-extract/css';
import { vars } from '../globalTheme.css';

export const pageContainer = style({
  position: 'relative',
  display: 'flex',
  top: 44,
  left: '50%',
  width: '100%',
  height: 'calc(100vh - 44px)',
  flexDirection: 'column',
  transform: 'translate(-50%,0)',
  justifyContent: 'center',
  alignItems: 'center',
  '@media': {
    'screen and (min-width: 1024px)': {
      top: 60,
      height: 'calc(100vh - 60px)',
      maxWidth: 1920,
    },
  },
});

export const logo = style({
  marginBottom: 80,
  fontFamily: vars.font.menu,
  fontSize: 48,
  fontWeight: 'bold',
  lineHeight: 1.5,
  color: 'transparent',
  background: `linear-gradient(45deg, ${vars.color.primary}, ${vars.color.secondary})`,
  backgroundClip: 'text',
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 72,
    },
  },
});

export const explain = style({
  marginBottom: 40,
  fontFamily: vars.font.body,
  fontWeight: 500,
  fontSize: 16,
  color: vars.color.g600,
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 20,
    },
  },
});

export const text = style({
  fontFamily: vars.font.body,
  fontWeight: 500,
  fontSize: 13,
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 14,
    },
  },
});

export const kakaoButtonContainer = style({
  display: 'flex',
  width: '100%',
  maxWidth: 280,
  height: 45,
  padding: '0px 14px',
  marginBottom: 12,
  border: 'none',
  borderRadius: 12,
  background: '#FEE500',
  color: 'rgba(0,0,0,0.85)',
  fontSize: 14,
  fontWeight: 500,
  boxSizing: 'border-box',
  alignItems: 'center',
  cursor: 'pointer',
});

export const kakaoLoginText = style({
  marginLeft: 'auto',
  marginRight: 'auto',
});

export const signupContainer = style({
  display: 'flex',
  alignItems: 'center',
  marginBottom: 60,
});

export const signupButton = style({
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  fontWeight: 700,
  color: vars.color.secondary,
});
