import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../globalTheme.css';

export const pageContainer = style({
  display: 'flex',
  position: 'relative',
  maxWidth: 520,
  height: '100vh',
  left: '50%',
  padding: '64px 20px 90px',
  transform: 'translate(-50%,0)',
  flexDirection: 'column',
  boxSizing: 'border-box',
  '@media': {
    'screen and (min-width: 1024px)': {
      padding: '100px 20px 116px',
      maxWidth: 1020,
    },
  },
});

export const formContainer = style({
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  flex: 1,
  overflowY: 'scroll',
});

export const welcomeText = style({
  fontFamily: vars.font.body,
  fontWeight: 700,
  fontSize: 24,
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 28,
    },
  },
});

export const explain = style({
  display: 'flex',
  alignItems: 'center',
  fontSize: 14,
  color: 'red',
});

export const formContent = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  paddingTop: 30,
  alignContent: 'start',
  flex: 1,
  boxSizing: 'border-box',
  '@media': {
    'screen and (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 20,
    },
  },
});

export const formButton = style({
  position: 'fixed',
  width: '100%',
  bottom: 0,
  left: 0,
  boxSizing: 'border-box',
  background: vars.color.white,
  padding: 20,
  '@media': {
    'screen and (min-width: 1024px)': {
      padding: 30,
    },
  },
});

// [height] 변경 시 pageContainer의 padding bottom값도 height로 변경
export const buttonContent = style({
  position: 'relative',
  left: '50%',
  width: '100%',
  transform: 'translate(-50%, 0)',
  height: 50,
  border: 'none',
  borderRadius: 10,
  fontWeight: 500,
  fontSize: 14,
  cursor: 'pointer',
  background: vars.color.secondary,
  color: vars.color.white,
  '@media': {
    'screen and (min-width: 1024px)': {
      maxWidth: 500,
      height: 56,
      fontSize: 16,
    },
  },
});

export const title = style({
  display: 'flex',
  fontFamily: vars.font.body,
  fontWeight: 500,
  fontSize: 14,
  alignItems: 'center',
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 16,
    },
  },
});

export const fieldContainer = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  marginBottom: 20,
});

export const fieldInput = style({
  display: 'flex',
  width: '100%',
  height: 42,
  gap: 12,
  alignItems: 'center',
});

export const inputContent = recipe({
  base: {
    display: 'flex',
    alignContent: 'center',
    flex: 1,
    padding: 12,
    outline: 'none',
    border: `1px solid ${vars.color.g200}`,
    borderRadius: 8,
    boxSizing: 'border-box',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: 14,
    '::placeholder': {
      color: vars.color.g400,
    },
  },
  variants: {
    select: {
      true: { color: vars.color.black },
      false: { color: vars.color.g400 },
    },
  },
});

export const nickNameButton = style({
  background: vars.color.secondary,
  height: '100%',
  padding: '0px 20px',
  border: 'none',
  borderRadius: 10,
  color: vars.color.white,
  fontWeight: 400,
  fontSize: 14,
  cursor: 'pointer',
});

export const error = recipe({
  base: {
    height: 20,
    bottom: 0,
    fontSize: 10,
    marginLeft: 8,
    '@media': {
      'screen and (min-width: 1024px)': {
        fontSize: 12,
        bottom: 4,
      },
    },
  },
  variants: {
    result: {
      true: {
        color: vars.color.secondary,
      },
      false: {
        color: '#ff4343',
      },
    },
  },
});

export const red = style({
  height: '0.8em',
  color: 'red',
  fontWeight: 600,
  marginRight: 4,
  marginTop: -4,
  '@media': {
    'screen and (min-width: 1024px)': {
      marginRight: 8,
    },
  },
});
