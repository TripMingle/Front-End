import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const postCard = style({
  display: 'inline-block',
  width: 255,
  height: 338,
  borderRadius: 20,
  boxShadow: '0px 10px 20px 0px #0000000D',
});

export const imageBox = style({
  position: 'relative',
  width: '100%',
  height: 150,
});

export const image = style({
  borderRadius: '20px 20px 0px 0px',
});

export const bookMarkContainer = style({
  position: 'absolute',
  top: 10,
  right: 10,
  width: 30,
  height: 30,
  borderRadius: '50%',
  background: 'rgba(0, 0, 0, 0.7)',
});

export const bookMark = style({
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

export const contentContainer = style({
  padding: '15px 20px',
  background: vars.color.white,
});

export const title = style({
  display: 'flex',
  fontSize: 18,
  fontWeight: 700,
  marginTop: 10,
  justifyItems: 'center',
});

export const infoContainer = style({
  marginTop: 10,
  fontSize: 14,
  fontWeight: 400,
});

export const icon = style({
  marginRight: 10,
});

export const profileContainer = style({
  display: 'flex',
  alignItems: 'center',
  marginTop: 10,
  marginLeft: -4,
});

export const profileInfo = style({
  color: vars.color.g500,
  fontSize: 12,
  fontWeight: 400,
  marginLeft: 5,
});
