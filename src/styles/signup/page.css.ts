import { style } from '@vanilla-extract/css';
import { vars } from '../globalTheme.css';
import { recipe } from '@vanilla-extract/recipes';

export const pageContainer = style({
  position: 'relative',
  top: 44,
  left: '50%',
  padding: '30px 20px',
  transform: 'translate(-50%,0)',
  maxWidth: 510,
  '@media': {
    'screen and (min-width: 1024px)': {
      top: 60,
      padding: '80px 0px',
      maxWidth: 1020,
    },
  },
});

export const text = style({
  fontFamily: vars.font.body,
  fontWeight: 700,
  fontSize: 20,
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 36,
    },
  },
});

export const explain = style({
  display: 'flex',
  alignItems: 'center',
  fontSize: 14,
  color: 'red',
});

export const contentContainer = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  height: 'calc(100vh - 243px)',
  margin: '30px 0px',
  overflowX: 'hidden',
  overflowY: 'scroll',
  alignContent: 'start',
  '@media': {
    'screen and (min-width: 1024px)': {
      height: 'calc(100vh - 418px)',
      margin: '40px 0px',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 20,
    },
  },
});

export const fieldContainer = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  marginBottom: 20,
  '@media': {
    'screen and (min-width: 1024px)': {
      marginBottom: 32,
    },
  },
});

export const container = recipe({
  base: {
    display: 'flex',
    alignContent: 'center',
    flex: 1,
    padding: '12px 20px',
    outline: 'none',
    border: `1px solid ${vars.color.g200}`,
    borderRadius: 10,
    boxSizing: 'border-box',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: 14,
    '@media': {
      'screen and (min-width: 1024px)': {
        padding: '15px 20px',
        fontSize: 16,
      },
    },
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

// 이건 FormField에서 필드 감싸는 컨테이너 (닉네임 이름 무시)
export const nickNameContainer = style({
  display: 'flex',
  width: '100%',
  height: 50,
  gap: 12,
  alignItems: 'center',
  '@media': {
    'screen and (min-width: 1024px)': {
      height: 52,
    },
  },
});

// 이건 NickNameBox에서 사용하는 컨테이너
export const nickNamefieldContainer = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
});

export const nickNameButton = style({
  background: vars.color.secondary,
  height: 42,
  padding: '0px 20px',
  border: 'none',
  borderRadius: 10,
  color: vars.color.white,
  fontWeight: 400,
  fontSize: 14,
  cursor: 'pointer',
  '@media': {
    'screen and (min-width: 1024px)': {
      height: 52,
    },
  },
});

export const nickNameResult = recipe({
  base: {
    position: 'absolute',
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

export const signupButton = recipe({
  base: {
    position: 'relative',
    left: '50%',
    width: '100%',
    maxWidth: 356,
    height: 50,
    marginTop: 'auto',
    border: 'none',
    borderRadius: 10,
    fontWeight: 500,
    fontSize: 14,
    transform: 'translate(-50%,0)',
    '@media': {
      'screen and (min-width: 1024px)': {
        height: 60,
        fontSize: 16,
      },
    },
  },
  variants: {
    select: {
      true: {
        cursor: 'pointer',
        background: vars.color.secondary,
        color: vars.color.white,
      },
      false: {
        background: vars.color.g200,
        color: vars.color.g400,
      },
    },
  },
});

export const red = style({
  height: '0.8em',
  color: 'red',
  fontWeight: 600,
  marginRight: 4,
  '@media': {
    'screen and (min-width: 1024px)': {
      marginRight: 8,
    },
  },
});
