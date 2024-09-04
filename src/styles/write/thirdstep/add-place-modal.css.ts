import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const modalContainer = style({
  display: 'flex',
  width: 'calc(100vw - 80px)',
  maxWidth: 540,
  padding: 2,
  flexDirection: 'column',
  gap: 16,
  '@media': {
    'screen and (min-width: 1024px)': {
      padding: 6,
      gap: 20,
    },
  },
});

export const titleContainer = style({
  display: 'flex',
  alignItems: 'center',
});

export const title = style({
  fontSize: 16,
  fontWeight: 700,
  flex: 1,
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 18,
    },
  },
});

export const closeIcon = style({
  width: 16,
  height: 16,
  cursor: 'pointer',
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 18,
      height: 18,
    },
  },
});

export const searchContainer = style({
  display: 'flex',
  alignItems: 'center',
  padding: '12px 18px',
  border: `1px solid ${vars.color.g200}`,
  borderRadius: 10,
  '@media': {
    'screen and (min-width: 1024px)': {
      padding: '18px 20px',
    },
  },
});

export const searchText = style({
  border: 0,
  outline: 'none',
  flex: 1,
  fontSize: 13,
  color: vars.color.g800,
  '::placeholder': {
    color: vars.color.g400,
    fontSize: 14,
  },
});

export const searchIcon = style({
  width: 20,
  height: 20,
});

export const buttonContainer = style({
  display: 'flex',
  justifyContent: 'center',
});

export const button = recipe({
  base: {
    padding: '10px 30px',
    border: 'none',
    borderRadius: 6,
    fontSize: 13,
    fontWeight: 500,
    '@media': {
      'screen and (min-width: 1024px)': {
        padding: '12px 40px',
        borderRadius: 10,
        fontSize: 16,
      },
    },
  },
  variants: {
    select: {
      true: {
        color: vars.color.white,
        background: vars.color.secondary,
      },
      false: {
        color: vars.color.g400,
        background: vars.color.g200,
      },
    },
  },
});
