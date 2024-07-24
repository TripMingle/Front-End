import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const pageContainer = style({
  position: 'relative',
  top: 44,
  left: '50%',
  padding: '30px 20px',
  transform: 'translate(-50%,0)',
  maxWidth: 510,
  '@media': {
    'screen and (min-width: 1024px)': {
      top: 60,
      padding: '80px 0px',
      maxWidth: 720,
    },
  },
});

export const contentContainer = style({
  height: 'calc(100vh - 243px)',
  margin: '20px 0px',
  '@media': {
    'screen and (min-width: 1024px)': {
      height: 'calc(100vh - 418px)',
      margin: '40px 0px',
    },
  },
});

export const explainText = style({
  marginLeft: 6,
  fontFamily: vars.font.body,
  fontWeight: 700,
  fontSize: 20,
  color: vars.color.black,
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 28,
    },
  },
});

export const explainStrongText = style({
  color: vars.color.secondary,
});

export const nextButton = recipe({
  base: {
    position: 'relative',
    left: '50%',
    width: '100%',
    height: 50,
    border: 'none',
    borderRadius: 10,
    fontWeight: 500,
    fontSize: 14,
    transform: 'translate(-50%,0)',
    cursor: 'pointer',
    '@media': {
      'screen and (min-width: 1024px)': {
        maxWidth: 320,
        height: 60,
        fontSize: 16,
      },
    },
  },
  variants: {
    select: {
      true: {
        background: vars.color.secondary,
        color: vars.color.white,
      },
      false: {
        background: vars.color.g200,
        color: vars.color.g400,
      },
    },
  },
});
