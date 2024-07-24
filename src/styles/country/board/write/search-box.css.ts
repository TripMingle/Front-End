import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const inputBox = style({
  width: '100%',
  maxWidth: 1000,
  padding: '12px 20px',
  marginBottom: 30,
  borderRadius: 50,
  fontSize: 14,
  justifyItems: 'center',
  display: 'inline-flex',
  border: `1px solid ${vars.color.g200}`,
  boxSizing: 'border-box',
  '@media': {
    'screen and (min-width: 1024px)': {
      padding: '14px 28px',
      marginBottom: 60,
    },
  },
});

export const input = style({
  border: 0,
  outline: 0,
  flex: 1,
  color: vars.color.black,
  fontSize: 13,
  '::placeholder': {
    color: vars.color.g400,
  },
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 18,
    },
  },
});

export const searchIcon = style({
  paddingLeft: 32,
  width: 20,
  height: 20,
  cursor: 'pointer',
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 30,
      height: 30,
    },
  },
});
