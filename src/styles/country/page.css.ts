import { style } from '@vanilla-extract/css';
import { vars } from '../globalTheme.css';

export const pageContainer = style({
  position: 'relative',
  left: '50%',
  maxWidth: 1920,
  transform: 'translate(-50%,0)',
});

export const imageContainer = style({
  position: 'relative',
  width: '100%',
  height: 600,
});

export const contentContainer = style({
  display: 'inline-block',
  position: 'relative',
  padding: '30px 60px',
  left: '50%',
  transform: 'translate(-50%,0)',
});

export const categoryContainer = style({
  padding: '30px 0px',
});

export const category = style({
  display: 'flex',
  margin: '10px 0px',
  color: vars.color.black,
  fontFamily: vars.font.menu,
  fontSize: 30,
  fontWeight: 'bold',
});

export const textContainer = style({
  display: 'flex',
});

export const explain = style({
  marginBottom: 20,
  color: vars.color.g500,
  fontFamily: vars.font.body,
  fontWeight: 500,
  fontSize: 14,
});

export const more = style({
  marginLeft: 'auto',
  color: vars.color.g500,
  fontFamily: vars.font.body,
  fontSize: 16,
});

export const postContainer = style({
  display: 'flex',
  gap: 20,
});
