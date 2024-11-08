import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const icon = style({
  marginLeft: 'auto',
  width: 18,
  height: 18,
});

export const calendar = recipe({
  base: {
    position: 'absolute',
    zIndex: 10,
  },
  variants: {
    show: {
      true: {},
      false: {
        display: 'none !important',
      },
    },
  },
});
