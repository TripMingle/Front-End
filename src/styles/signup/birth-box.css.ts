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

export const background = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'transparent',
  zIndex: 9,
});
