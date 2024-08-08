import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const conatiner = style({
  display: 'flex',
  width: 'calc(100vw - 80px)',
  maxWidth: 320,
  flexDirection: 'column',
  alignItems: 'center',
  gap: 12,
});

export const button = recipe({
  base: {
    border: 'none',
    width: 72,
    height: 36,
    margin: 12,
    borderRadius: 10,
    '@media': {
      'screen and (min-width: 1024px)': {
        height: 44,
      },
    },
  },
  variants: {
    select: {
      true: {
        background: vars.color.secondary,
        color: vars.color.white,
        cursor: 'pointer',
      },
      false: { background: vars.color.g200, color: vars.color.g400 },
    },
  },
});
