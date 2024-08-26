import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 5,
  '@media': {
    'screen and (min-width: 1024px)': {
      gap: 10,
    },
  },
});

export const attributeContainer = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    borderRadius: 20,
    gap: 5,
    cursor: 'pointer',
    backgroundColor: vars.color.white,
    '@media': {
      'screen and (min-width: 1024px)': {
        borderRadius: 50,
      },
    },
  },
  variants: {
    value: {
      true: { border: `2px solid ${vars.color.g400}`, color: vars.color.g400 },
      false: {
        color: '#2F90FF',
        border: '2px solid transparent',
        backgroundImage:
          'linear-gradient(#fff, #fff), linear-gradient(98.24deg, #2F90FF 0%, #04BEFF 100%)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'content-box, border-box',
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

export const text = style({
  fontSize: 12,
  fontWeight: 500,
  padding: '8px 10px 8px 0px',
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 13,
      borderRadius: 50,
    },
  },
});
