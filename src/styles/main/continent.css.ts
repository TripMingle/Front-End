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
  '@media': {
    'screen and (min-width: 1024px)': {
      maxWidth: 240,
    },
  },
});

export const content = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const circle = style({
  position: 'absolute',
  top: 0,
  right: 0,
  width: 48,
  height: 48,
  zIndex: 0,
  background: vars.color.primary,
  opacity: '50%',
  borderRadius: '50%',
  cursor: 'pointer',
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 80,
      height: 80,
    },
  },
});

export const bgImage = style({
  position: 'absolute',
  zIndex: 1,
  borderRadius: '50%',
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

export const textContainer = style({
  width: '100%',
  zIndex: 3,
  textAlign: 'center',
  cursor: 'pointer',
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
  gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', // 최소 크기를 140px로 조정
  maxWidth: 1000,
  '@media': {
    'screen and (min-width: 1024px)': {
      gap: 90,
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    },
  },
});
