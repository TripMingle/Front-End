import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  zIndex: 4,
  height: 44,
  padding: '12px 16px',
  alignItems: 'center',
  gap: 20,
  border: `1px solid ${vars.color.g300}`,
  borderRadius: 10,
  background: vars.color.white,
  cursor: 'pointer',
  flex: 1,
  marginBottom: 10,
  boxSizing: 'border-box',
  '@media': {
    'screen and (min-width: 1024px)': {
      height: 64,
      padding: '16px 20px',
      borderRadius: 14,
      marginBottom: 20,
    },
  },
});

export const place = style({
  flex: 1,
  fontSize: 13,
  fontWeight: 500,
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 16,
    },
  },
});

export const icon = style({
  width: 18,
  height: 18,
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 30,
      height: 30,
    },
  },
});
