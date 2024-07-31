import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const buttonContainer = style({
  position: 'relative',
  display: 'flex',
  left: '50%',
  width: '100%',
  height: 50,
  gap: 8,
  transform: 'translate(-50%,0)',
  justifyContent: 'center',
  '@media': {
    'screen and (min-width: 1024px)': {
      height: 60,
    },
  },
});

export const beforeButton = style({
  width: '100%',
  border: 'none',
  borderRadius: 10,
  fontWeight: 500,
  fontSize: 14,
  cursor: 'pointer',
  background: vars.color.g200,
  color: vars.color.g400,
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 16,
    },
  },
});

export const nextButton = recipe({
  base: {
    width: '100%',
    maxWidth: 356,
    border: 'none',
    borderRadius: 10,
    fontWeight: 500,
    fontSize: 14,
    '@media': {
      'screen and (min-width: 1024px)': {
        fontSize: 16,
      },
    },
  },
  variants: {
    select: {
      true: {
        cursor: 'pointer',
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
