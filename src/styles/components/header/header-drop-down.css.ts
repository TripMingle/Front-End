import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'fixed',
  display: 'flex',
  top: 44,
  left: '50%',
  width: '100%',
  maxWidth: 1920,
  zIndex: 10,
  flexDirection: 'column',
  boxSizing: 'border-box',
  transform: 'translate(-50%,0)',
  '@media': {
    'screen and (min-width: 1024px)': {
      top: 60,
    },
  },
});

export const menuContainer = style({
  position: 'relative',
  display: 'flex',
  top: 12,
  width: 160,
  marginLeft: 'auto',
  marginRight: 12,
  padding: 6,
  gap: 6,
  background: vars.color.white,
  borderRadius: 12,
  flexDirection: 'column',
  boxShadow: '0px 10px 20px 0px rgba(0, 0, 0, 0.05)',
  '@media': {
    'screen and (min-width: 1024px)': {
      marginRight: 60,
    },
  },
});

export const menuItem = style({
  padding: '10px 16px',
  fontWeight: 500,
  fontFamily: vars.font.body,
  fontSize: 13,
  borderRadius: 8,
  cursor: 'pointer',
  ':hover': {
    background: vars.color.g200,
  },
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 14,
    },
  },
});
