import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  display: 'inline-flex',
  position: 'relative',
  left: '50%',
  marginTop: 60,
  marginBottom: 40,
  alignItems: 'center',
  transform: 'translate(-50%, 0)',
  '@media': {
    'screen and (min-width: 1024px)': {
      marginTop: 100,
      marginBottom: 60,
    },
  },
});

export const arrowButton = style({
  width: 16,
  height: 16,
  padding: '0px 8px',
  cursor: 'pointer',
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 18,
      height: 18,
      padding: '0px 10px',
    },
  },
});

export const pageContainer = style({
  display: 'flex',
});

export const page = recipe({
  base: {
    display: 'flex',
    width: 24,
    height: 24,
    margin: '0px 4px',
    fontSize: 14,
    fontWeight: 500,
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    '@media': {
      'screen and (min-width: 1024px)': {
        width: 30,
        height: 30,
        margin: '0px 4px',
        fontSize: 16,
      },
    },
  },
  variants: {
    select: {
      true: {
        color: vars.color.white,
        background: vars.color.secondary,
        borderRadius: '50%',
      },
      false: {
        color: vars.color.g400,
      },
    },
  },
});
