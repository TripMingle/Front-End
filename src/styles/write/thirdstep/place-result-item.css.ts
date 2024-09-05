import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  cursor: 'pointer',
  '@media': {
    'screen and (min-width: 1024px)': {
      gap: 20,
    },
  },
});

export const placePhoto = style({
  width: 48,
  height: 48,
  borderRadius: 10,
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 64,
      height: 64,
    },
  },
});

export const infoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: 2,
  '@media': {
    'screen and (min-width: 1024px)': {
      gap: 5,
    },
  },
});

export const placeName = style({
  fontSize: 13,
  fontWeight: 700,
  textOverflow: 'ellipsis',
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 16,
    },
  },
});

export const placeAddress = style({
  color: vars.color.g500,
  fontSize: 12,
  fontWeight: 400,
  textOverflow: 'ellipsis',
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 14,
    },
  },
});

export const selectContainer = recipe({
  base: {
    display: 'flex',
    width: 14,
    height: 14,
    border: 'none',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    '@media': {
      'screen and (min-width: 1024px)': {
        width: 20,
        height: 20,
      },
    },
  },
  variants: {
    select: {
      true: {
        background: vars.color.secondary,
      },
      false: {
        background: vars.color.g500,
      },
    },
  },
});

export const selectIcon = style({
  width: 6,
  height: 5,
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 8,
      height: 7,
    },
  },
});
