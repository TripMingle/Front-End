import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
});

export const listContainer = style({
  display: 'flex',
  flexDirection: 'column',
  margin: '30px 0px',
  gap: 30,
  '@media': {
    'screen and (min-width: 1024px)': {
      margin: '40px 0px',
    },
  },
});

export const listItemContainer = style({
  position: 'relative',
});

export const listItemLine = style({
  position: 'absolute',
  display: 'flex',
  zIndex: 1,
  width: 2,
  height: 'calc(100% + 30px)',
  marginTop: 14,
  marginLeft: 4,
  background: vars.color.g200,
  selectors: {
    [`${listItemContainer}:last-child > &`]: {
      display: 'none',
    },
  },
});
