import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: 15,
  marginLeft: 10,
  marginBottom: 5,
});

export const airplane = style({
  margin: '0px -5px',
});

export const circle = recipe({
  base: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  variants: {
    pass: {
      true: {
        background: vars.color.secondary,
      },
      false: {
        background: vars.color.g300,
      },
    },
  },
});
