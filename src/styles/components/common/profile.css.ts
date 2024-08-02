import { style } from '@vanilla-extract/css';

export const profile = style({
  borderRadius: '50%',
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 24,
      height: 24,
    },
  },
});
