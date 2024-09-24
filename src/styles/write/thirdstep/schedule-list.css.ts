import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const scheduleInputContainer = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  '@media': {
    'screen and (min-width: 1024px)': {
      flexDirection: 'row',
    },
  },
});

export const container = style({
  position: 'relative',
  flexGrow: 1,
  overflowY: 'scroll',
  margin: '30px 0px',
  '@media': {
    'screen and (min-width: 1024px)': {
      margin: 0,
    },
  },
});

export const listContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 30,
  '@media': {
    'screen and (min-width: 1024px)': {
      marginLeft: 20,
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
