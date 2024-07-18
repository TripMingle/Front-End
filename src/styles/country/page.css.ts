import { style } from '@vanilla-extract/css';
import { vars } from '../globalTheme.css';

export const pageContainer = style({
  position: 'relative',
  top: 44,
  left: '50%',
  transform: 'translate(-50%,0)',
  '@media': {
    'screen and (min-width: 1024px)': {
      top: 60,
      maxWidth: 1920,
    },
  },
});

export const imageContainer = style({
  position: 'relative',
  width: '100%',
  minHeight: 320,
  height: 'auto',
  overflow: 'hidden',
  '@media': {
    'screen and (min-width: 1024px)': {
      height: 460,
    },
  },
});

export const image = style({
  objectFit: 'cover',
});

export const contentContainer = style({
  position: 'relative',
  maxWidth: 1080,
  padding: '40px 20px',
  left: '50%',
  transform: 'translate(-50%,0)',
  '@media': {
    'screen and (min-width: 1024px)': {
      padding: '30px 60px',
    },
  },
});

export const categoryContainer = style({
  padding: '30px 0px',
});

export const icon = style({
  width: 24,
  height: 24,
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 36,
      height: 36,
    },
  },
});

export const category = style({
  display: 'flex',
  margin: '5px 0px',
  color: vars.color.black,
  fontFamily: vars.font.menu,
  fontSize: 20,
  fontWeight: 'bold',
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 30,
      margin: '10px 0px',
    },
  },
});

export const textContainer = style({
  display: 'flex',
});

export const explain = style({
  marginBottom: 20,
  color: vars.color.g500,
  fontFamily: vars.font.body,
  fontWeight: 500,
  fontSize: 12,
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 14,
    },
  },
});

export const more = style({
  marginLeft: 'auto',
  color: vars.color.g500,
  fontFamily: vars.font.body,
  fontSize: 13,
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 16,
    },
  },
});

export const boardContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
  justifyItems: 'center',
  gap: 15,
  maxWidth: 1080,
  '@media': {
    'screen and (min-width: 1024px)': {
      gap: 20,
      gridTemplateColumns: 'repeat(auto-fill, minmax(255px, 1fr))',
    },
  },
});

export const postContainer = style({
  display: 'grid',
  gridAutoFlow: 'column',
  overflowX: 'auto',
  gap: 15,
  padding: '20px 0px',
  maxWidth: 1080,
  gridTemplateColumns: 'repeat(auto-fill, minmax(221px, 1fr))',
  '@media': {
    'screen and (min-width: 1024px)': {
      gap: 20,
      gridTemplateColumns: 'repeat(auto-fill, minmax(255px, 1fr))',
    },
  },
});

export const moveToMain = style({
  fontSize: 16,
  fontWeight: 500,
  color: vars.color.g500,
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 18,
    },
  },
});

export const countryText = style({
  color: vars.color.black,
});

export const emptyConatiner = style({
  display: 'flex',
  width: '100%',
  height: 226,
  alignItems: 'center',
  justifyContent: 'center',
  background: vars.color.g200,
  color: vars.color.g400,
  fontSize: 20,
  fontFamily: vars.font.menu,
  fontWeight: 'bold',
  textAlign: 'center',
  lineHeight: 1.5,
  borderRadius: 16,
  '@media': {
    'screen and (min-width: 1024px)': {
      height: 338,
      fontSize: 24,
      borderRadius: 20,
    },
  },
});
