import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/globalTheme.css';

export const container = style({
  position: 'relative',
  display: 'flex',
  width: 160,
  height: 160,
  alignItems: 'center',
  justifyItems: 'center',
});

export const bgImage = style({
  position: 'absolute',
  zIndex: -2,
  borderRadius: '50%',
  objectFit: 'cover',
});

export const bgOverlay = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: -1,
  borderRadius: '50%',
  background: '#00000033',
});

export const name = style({
  display: 'block',
  width: '100%',
  textAlign: 'center',
  fontFamily: vars.font.menu,
  fontWeight: 'bold',
  fontSize: 22,
  color: vars.color.white,
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 24,
    },
  },
});

export const countryContainer = style({
  display: 'grid',
  gap: 16,
  gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
  maxWidth: 1000,
  '@media': {
    'screen and (min-width: 1024px)': {
      gap: 40,
    },
  },
});
