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
