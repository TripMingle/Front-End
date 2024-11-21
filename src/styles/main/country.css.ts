import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/globalTheme.css';

export const container = style({
  position: 'relative',
  display: 'flex',
  width: '100%',
  aspectRatio: '1 / 1',
  maxWidth: 160,
  alignItems: 'center',
  justifyItems: 'center',
  overflow: 'hidden',
  '@media': {
    'screen and (min-width: 370px)': {
      width: 160,
    },
  },
});

export const bgImage = style({
  zIndex: 1,
  borderRadius: '50%',
  objectFit: 'cover',
});

export const bgOverlay = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: 2,
  borderRadius: '50%',
  background: '#00000033',
  cursor: 'pointer',
});

export const name = style({
  display: 'block',
  width: '100%',
  zIndex: 3,
  textAlign: 'center',
  fontFamily: vars.font.menu,
  fontWeight: 'bold',
  fontSize: 22,
  color: vars.color.white,
  cursor: 'pointer',
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 24,
    },
  },
});

export const countryContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
  gap: 15,
  maxWidth: 1000,
  '@media': {
    'screen and (min-width: 370px)': {
      gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
    },
    'screen and (min-width: 1024px)': {
      gap: 40,
    },
  },
});

export const bgimageSkeleton = style({
  borderRadius: '50%',
  width: '100%',
  height: '100%',
});
