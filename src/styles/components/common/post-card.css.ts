import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const postCard = style({
  width: 215,
  height: 118,
  borderRadius: 20,
  padding: 20,
  boxShadow: '0px 10px 20px 0px #0000000D',
  fontFamily: vars.font.body,
  color: vars.color.g500,
  background: vars.color.white,
  ':hover': {
    color: vars.color.white,
    background: 'linear-gradient(284.04deg, #00C2FF 0%, #3688FF 100%)',
  },
});

export const title = style({
  display: 'flex',
  marginBottom: 12,
  color: vars.color.black,
  fontSize: 18,
  fontWeight: 700,
  selectors: {
    [`${postCard}:hover &`]: {
      color: vars.color.white,
    },
  },
});

export const content = style({
  display: 'flex',
  height: 38,
  marginBottom: 20,
  fontSize: 13,
  fontWeight: 500,
  lineHeight: 1.5,
});

export const profileContainer = style({
  display: 'flex',
  alignItems: 'center',
});

export const profileInfo = style({
  marginLeft: 5,
  fontWeight: 400,
  fontSize: 12,
});
