import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/globalTheme.css';

export const container = style({
  position: 'relative',
  display: 'flex',
  width: 160,
  height: 160,
  alignItems: 'center',
  justifyItems: 'center',
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 240,
      height: 240,
    },
  },
});

export const circle = style({
  position: 'absolute',
  top: 0,
  right: 0,
  width: 48,
  height: 48,
  zIndex: -3,
  background: vars.color.primary,
  opacity: '50%',
  borderRadius: '50%',
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 80,
      height: 80,
    },
  },
});

export const bgImage = style({
  position: 'absolute',
  zIndex: -2,
  borderRadius: '50%',
});

export const bgOverlay = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: -1,
  borderRadius: '50%',
  background: '#00000033',
});

export const textContainer = style({
  width: '100%',
  textAlign: 'center',
});

export const name = style({
  display: 'block',
  fontFamily: vars.font.menu,
  fontWeight: 'bold',
  fontSize: 22,
  color: vars.color.white,
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 28,
    },
  },
});

export const explain = style({
  display: 'block',
  fontFamily: vars.font.body,
  fontSize: 10,
  color: vars.color.white,
  marginTop: 4,
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 16,
    },
  },
});

export const continentContainer = style({
  display: 'grid',
  gap: 15,
  gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
  maxWidth: 1000,
  '@media': {
    'screen and (min-width: 1024px)': {
      gap: 90,
      gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    },
  },
});
