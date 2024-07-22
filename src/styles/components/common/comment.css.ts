import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const commentContainer = style({
  display: 'flex',
  gap: 8,
  '@media': {
    'screen and (min-width: 1024px)': {
      gap: 10,
    },
  },
});

export const contentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 5,
  '@media': {
    'screen and (min-width: 1024px)': {
      gap: 10,
    },
  },
});

export const infoContainer = style({
  display: 'flex',
  gap: 6,
  alignItems: 'center',
  '@media': {
    'screen and (min-width: 1024px)': {
      gap: 10,
    },
  },
});

export const name = style({
  fontSize: 13,
  fontWeight: 700,
  color: vars.color.black,
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 15,
    },
  },
});

export const time = style({
  fontSize: 11,
  fontWeight: 400,
  color: vars.color.g500,
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 12,
    },
  },
});

export const content = style({
  fontSize: 13,
  fontWeight: 400,
  color: vars.color.black,
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 15,
    },
  },
});

export const commentListContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  '@media': {
    'screen and (min-width: 1024px)': {
      gap: 30,
    },
  },
});
