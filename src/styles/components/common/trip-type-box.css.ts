import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const typeContainer = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    borderRadius: 20,
    gap: 5,
    '@media': {
      'screen and (min-width: 1024px)': {
        borderRadius: 50,
      },
    },
  },
  variants: {
    select: {
      true: {
        backgroundColor: vars.color.white,
        border: '2px solid transparent',
        backgroundImage:
          'linear-gradient(#fff, #fff), linear-gradient(98.24deg, #2F90FF 0%, #04BEFF 100%)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'content-box, border-box',
      },
      false: {
        border: `2px solid ${vars.color.g300}`,
      },
    },
  },
});

export const icon = style({
  width: 14,
  height: 14,
  padding: '8px 0px 8px 10px',
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 19,
      height: 19,
    },
  },
});

export const text = recipe({
  base: {
    fontSize: 12,
    fontWeight: 500,
    padding: '8px 10px 8px 0px',
    '@media': {
      'screen and (min-width: 1024px)': {
        fontSize: 13,
        borderRadius: 50,
      },
    },
  },
  variants: {
    select: {
      true: {
        color: '#2F90FF',
      },
      false: {
        color: vars.color.g500,
      },
    },
  },
});
