import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  padding: '0px 20px',
  '@media': {
    'screen and (min-width: 1024px)': {
      padding: '0px 20px',
      fontSize: 14,
    },
  },
});

export const input = style({
  width: 60,
  padding: '12px 20px',
  border: `1px solid ${vars.color.g200}`,
  borderRadius: 10,
  outline: 'none',
  cursor: 'pointer',
  fontFamily: vars.font.body,
  fontWeight: 400,
  fontSize: 13,
  '@media': {
    'screen and (min-width: 1024px)': {
      padding: '15px 20px',
      fontSize: 14,
    },
  },
});
