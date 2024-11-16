import { createVar, style } from '@vanilla-extract/css';

export const cWidth = createVar();
export const cHeight = createVar();

export const profile = style({
  borderRadius: '50%',
  objectFit: 'cover',
  '@media': {
    'screen and (min-width: 1024px)': {
      width: [cWidth],
      height: [cHeight],
    },
  },
});
