import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  margin: '20px 0px',
  flexDirection: 'column',
  gap: 5,
  '@media': {
    'screen and (min-width: 1024px)': {
      margin: '40px 0px',
      gap: 10,
    },
  },
});

export const title = style({
  color: vars.color.g500,
  fontSize: 12,
  fontWeight: 500,
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 16,
    },
  },
});

export const dateContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 5,
  color: vars.color.secondary,
  fontSize: 16,
  fontWeight: 700,
  '@media': {
    'screen and (min-width: 1024px)': {
      gap: 10,
      fontSize: 20,
    },
  },
});

export const dateText = style({
  paddingTop: 4,
});
