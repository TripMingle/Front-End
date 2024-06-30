import { style } from '@vanilla-extract/css';
import { vars } from './globalTheme.css';

export const bgContainer = style({
  position: 'relative',
  display: 'flex',
  width: '100%',
  justifyItems: 'center',
});

export const bg = style({
  position: 'relative',
  width: '100%',
  maxWidth: '1920px',
  height: 'auto',
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
  fontFamily: 'gmarketSans',
  fontWeight: 900,
  fontSize: '80px',
  zIndex: 2,
  color: vars.color.white,
  textAlign: 'center',
  textShadow: '0px 5px 20px #00000033',
});

export const bigCircle = style({
  position: 'absolute',
  left: '60px',
  width: '72px',
  height: '72px',
  zIndex: 0,
  background: vars.color.primary,
  opacity: '50%',
  borderRadius: '50%',
});

export const smallCircle = style({
  position: 'absolute',
  top: '112px',
  left: '596px',
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
  fontSize: 18,
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
});

export const searchIcon = style({
  width: 24,
  height: 24,
  paddingLeft: 32,
});
