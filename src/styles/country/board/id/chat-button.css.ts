import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const buttonContainer = style({
  position: 'relative',
  display: 'flex',
  left: '50%',
  width: 104,
  padding: '10px 15px',
  marginTop: 20,
  color: vars.color.white,
  background: vars.color.secondary,
  border: 0,
  borderRadius: 5,
  gap: 5,
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 13,
  fontWeight: 500,
  cursor: 'pointer',
  transform: 'translate(-50%, 0)',
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 260,
      padding: '12px 0px',
      marginTop: 60,
      fontSize: 16,
    },
  },
});

export const icon = style({
  width: 15,
  height: 15,
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 20,
      height: 20,
    },
  },
});

export const modalContainer = style({
  display: 'flex',
  width: 'calc(100vw - 80px)',
  maxWidth: 400,
  flexDirection: 'column',
  alignItems: 'center',
  background: vars.color.white,
  borderRadius: 20,
  boxSizing: 'border-box',
  '@media': {
    'screen and (min-width: 1024px)': {
      maxWidth: 480,
    },
  },
});

export const modalTitle = style({
  display: 'flex',
  width: '100%',
  fontSize: 16,
  alignItems: 'center',
  marginBottom: 15,
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 18,
      marginBottom: 20,
    },
  },
});

export const modalClose = style({
  marginLeft: 'auto',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
});

export const closeIcon = style({
  width: 14,
  height: 14,
  marginLeft: 'auto',
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 15,
      height: 15,
    },
  },
});

export const textContainer = style({
  width: '100%',
  padding: 15,
  borderColor: vars.color.g200,
  borderRadius: 10,
  outline: 'none',
  resize: 'none',
  fontSize: 13,
  fontWeight: 400,
  fontFamily: vars.font.body,
  boxSizing: 'border-box',
  '::placeholder': {
    color: vars.color.g400,
  },
  '@media': {
    'screen and (min-width: 1024px)': {
      padding: 20,
      fontSize: 14,
    },
  },
});

export const sendContainer = style({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  color: 'white',
  background: vars.color.secondary,
  border: 'none',
  padding: '10px 30px',
  marginTop: 20,
  borderRadius: 5,
  gap: 5,
  '@media': {
    'screen and (min-width: 1024px)': {
      marginTop: 30,
      padding: '12px 95px',
      borderRadius: 10,
    },
  },
});
