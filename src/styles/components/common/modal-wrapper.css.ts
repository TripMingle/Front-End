import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const background = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0, 0, 0, 0.3)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 200,
});

export const modal = style({
  position: 'relative',
  display: 'flex',
  padding: 20,
  margin: 20,
  gap: 20,
  flexDirection: 'column',
  borderRadius: 20,
  background: vars.color.white,
  '@media': {
    'screen and (min-width: 1024px)': {
      padding: 30,
    },
  },
});

export const closeIcon = style({
  width: 14,
  height: 14,
  marginLeft: 'auto',
  cursor: 'pointer',
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 16,
      height: 16,
    },
  },
});

export const title = style({
  fontSize: 16,
  fontWeight: 700,
  flex: 1,
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 18,
    },
  },
});

