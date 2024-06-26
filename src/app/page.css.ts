import { style } from '@vanilla-extract/css';
import { vars } from '../styles/globalTheme.css';

export const bgContainer = style({
  position: 'relative',
  display: 'flex',
  width: '100%',
  justifyItems: 'center',
});

export const bg = style({
  position: 'relative',
  maxWidth: '1920px',
  left: '50%',
  transform: 'translate(-50%,0)',
});

export const boxContainer = style({
  position: 'absolute',
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

export const exploreContainer = style({
  position: 'relative',
  marginBottom: 60,
});

export const exploreText = style({
  position: 'relative',
  marginTop: '24px',
  fontFamily: vars.font.menu,
  fontWeight: 'bold',
  fontSize: '64px',
  zIndex: 2,
  color: vars.color.white,
  textAlign: 'center',
  textShadow: '0px 5px 20px #00000033',
});

export const bigCircle = style({
  position: 'absolute',
  left: '48px',
  width: '60px',
  height: '60px',
  zIndex: 0,
  background: vars.color.primary,
  opacity: '50%',
  borderRadius: '50%',
});

export const smallCircle = style({
  position: 'absolute',
  top: '92px',
  left: '480px',
  width: '30px',
  height: '30px',
  zIndex: 0,
  background: vars.color.primary,
  opacity: '50%',
  borderRadius: '50%',
});

export const inputBox = style({
  padding: '16px 32px',
  borderRadius: '50px',
  background: '#ffffff33',
  backdropFilter: 'blur(3px)',
  fontSize: 24,
  justifyItems: 'center',
  display: 'inline-flex',
  width: '600px',
});

export const input = style({
  border: 0,
  outline: 0,
  flex: 1,
  background: 'none',
  color: vars.color.white,
  '::placeholder': {
    color: vars.color.white,
  },
});

export const searchIcon = style({
  paddingLeft: 32,
});

export const contentContainer = style({
  position: 'relative',
  padding: '40px 80px 0px 80px',
  maxWidth: 1000,
  left: '50%',
  transform: 'translate(-50%, 0)',
});

export const airplaneIcon = style({
  display: 'flex',
});

export const textContainer = style({
  position: 'relative',
  display: 'inline-flex',
});

export const primaryText = style({
  display: 'flex',
  fontFamily: vars.font.menu,
  fontSize: 28,
  fontWeight: 'bold',
  color: vars.color.primary,
  paddingTop: 10,
});

export const plainText = style({
  display: 'flex',
  position: 'relative',
  fontFamily: vars.font.menu,
  fontWeight: 'bold',
  fontSize: 28,
  background: vars.color.white,
  paddingRight: 30,
  color: vars.color.black,
});

export const line = style({
  position: 'absolute',
  display: 'inline-flex',
  bottom: 16,
  width: 'calc(100vw - 160px)',
  maxWidth: 1000,
  height: 1,
  zIndex: -1,
  background: vars.color.g400,
});

export const selectContainer = style({
  margin: '60px 0px',
});
