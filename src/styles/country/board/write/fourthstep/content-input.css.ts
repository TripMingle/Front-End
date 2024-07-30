import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const fieldContainer = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  marginBottom: 20,
  fontFamily: vars.font.body,
  fontWeight: 500,
  fontSize: 14,
  '@media': {
    'screen and (min-width: 1024px)': {
      marginBottom: 32,
      fontSize: 16,
    },
  },
});

export const container = style({
  position: 'relative',
  display: 'flex',
  width: '100%',
  padding: '12px 20px',
  border: `1px solid ${vars.color.g200}`,
  borderRadius: 10,
  boxSizing: 'border-box',
  alignItems: 'center',
  color: vars.color.g400,
  gap: 12,
  '@media': {
    'screen and (min-width: 1024px)': {
      padding: '15px 20px',
    },
  },
});

export const titleInput = style({
  border: 'none',
  outline: 'none',
  fontFamily: vars.font.body,
  fontWeight: 400,
  fontSize: 13,
  flex: 1,
  color: vars.color.black,
  '::placeholder': {
    color: vars.color.g400,
  },
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 14,
    },
  },
});

export const contentInput = style({
  width: '100%',
  border: 'none',
  outline: 'none',
  resize: 'none',
  fontFamily: vars.font.body,
  fontWeight: 400,
  fontSize: 13,
  color: vars.color.black,
  overflow: 'hidden',
  boxSizing: 'border-box',
  '::placeholder': {
    color: vars.color.g400,
  },
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 14,
    },
  },
});

export const contentLength = style({
  position: 'absolute',
  right: 20,
  bottom: 12,
  '@media': {
    'screen and (min-width: 1024px)': {
      right: 20,
      bottom: 15,
    },
  },
});
