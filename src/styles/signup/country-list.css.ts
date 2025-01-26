import { style } from '@vanilla-extract/css';
import { vars } from '../globalTheme.css';

export const listContainer = style({
  position: 'absolute',
  width: '100%',
  maxHeight: 160,
  zIndex: 100,
  background: vars.color.white,
  borderRadius: '4px',
  border: `1px solid ${vars.color.g300}`,
  overflowY: 'auto',
  listStyle: 'none',
  marginTop: 48,
  boxSizing: 'border-box',
  '@media': {
    'screen and (min-width: 1024px)': {
      maxHeight: 180,
      marginTop: 52,
    },
  },
});

export const listItem = style({
  display: 'flex',
  height: 32,
  padding: '0px 12px',
  cursor: 'pointer',
  alignItems: 'center',
  fontSize: 14,
  '@media': {
    'screen and (min-width: 1024px)': {
      height: 36,
    },
  },
  ':hover': {
    background: vars.color.g200,
  },
});
