import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const mapConatiner = style({
  width: '100%',
  height: 220,
  '@media': {
    'screen and (min-width: 1024px)': {
      height: 320,
    },
  },
});

export const markerContainer = style({
  position: 'relative',
});

export const markerIcon = style({
  width: 28,
  height: 28,
  zIndex: 5,
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 48,
      height: 48,
    },
  },
});

export const markerNumber = style({
  position: 'absolute',
  display: 'flex',
  top: 6,
  width: 28,
  zIndex: 10,
  color: vars.color.secondary,
  fontWeight: 700,
  fontSize: 10,
  justifyContent: 'center',
  '@media': {
    'screen and (min-width: 1024px)': {
      top: 8,
      width: 48,
      fontSize: 20,
    },
  },
});
