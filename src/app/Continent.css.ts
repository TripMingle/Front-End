import { style } from '@vanilla-extract/css';
import { vars } from './globalTheme.css';

export const container = style({
  position: 'relative',
  display: 'flex',
  width: 240,
  height: 240,
  alignItems: 'center',
  justifyItems: 'center',
});

export const circle = style({
  position: 'absolute',
  top: 0,
  right: 0,
  width: 80,
  height: 80,
  zIndex: -3,
  background: vars.color.primary,
  opacity: '50%',
  borderRadius: '50%',
});

export const bgImage = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: -2,
  borderRadius: '50%',
  objectFit: 'cover',
});

export const bgOverlay = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: -1,
  borderRadius: '50%',
  background: '#00000033',
});

export const textContainer = style({
  width: '100%',
  textAlign: 'center',
});

export const name = style({
  fontFamily: vars.font.menu,
  fontWeight: 'bold',
  fontSize: 28,
  color: vars.color.white,
});

export const explain = style({
  fontFamily: vars.font.body,
  fontSize: 16,
  color: vars.color.white,
  marginTop: 4,
});
