import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const categoryContainer = style({
  display: 'inline-flex',
  position: 'relative',
  left: '50%',
  marginTop: 20,
  marginBottom: 20,
  borderRadius: 20,
  zIndex: 500,
  background: vars.color.white,
  border: `1px solid ${vars.color.g300}`,
  justifyContent: 'center',
  boxShadow: '0px 10px 20px 0px #0000000D',
  transform: 'translate(-50%,0)',
  '@media': {
    'screen and (min-width: 1024px)': {
      marginBottom: 30,
      borderRadius: 28,
    },
  },
});

export const inputContainer = style({
  display: 'none',
});

export const labelContainer = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    fontFamily: vars.font.menu,
    fontWeight: 'normal',
    fontSize: 16,
    padding: '10px 20px',
    borderRight: `1px solid ${vars.color.g300}`,
    cursor: 'pointer',
    ':last-child': { borderRight: 0 },
    '@media': {
      'screen and (min-width: 1024px)': {
        gap: 8,
        fontSize: 20,
        padding: '10px 30px',
      },
    },
  },
  variants: {
    select: {
      true: {
        color: vars.color.secondary,
      },
      false: {
        color: vars.color.g400,
      },
    },
  },
});

export const icon = style({
  width: 20,
  height: 20,
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 28,
      height: 28,
    },
  },
});
