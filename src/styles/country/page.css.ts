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
  display: 'flex',
  width: '100%',
  height: 280,
  overflow: 'hidden',
  justifyItems: 'center',
  '@media': {
    'screen and (min-width: 768px)': {
      height: 320,
    },
    'screen and (min-width: 1024px)': {
      height: 460,
    },
  },
});

export const image = style({
  objectFit: 'cover',
  height: 'auto',
  width: '100%',
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
  paddingBottom: 60,
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
  fontWeight: 700,
  height: '1.2em',
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
  cursor: 'pointer',
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 16,
    },
  },
});

export const boardContainer = style({
  display: 'grid',
  width: '100%',
  gridTemplateColumns: 'calc((100% - 15px) / 2) calc((100% - 15px) / 2)',
  gap: 15,
  maxWidth: 1080,
  '@media': {
    'screen and (min-width: 640px)': {
      gap: 20,
      gridTemplateColumns:
        'calc((100% - 60px) / 4) calc((100% - 60px) / 4) calc((100% - 60px) / 4) calc((100% - 60px) / 4)',
    },
  },
});

export const postContainer = style({
  display: 'flex',
  flexDirection: 'row',
  overflowX: 'auto',
  gap: 15,
  padding: '20px 0px',
  maxWidth: 1080,
  '@media': {
    'screen and (min-width: 1024px)': {
      gap: 20,
    },
  },
});

export const moveToMain = style({
  position: 'relative',
  left: '50%',
  maxWidth: 1080,
  padding: '40px 20px 0px 20px',
  fontSize: 16,
  fontWeight: 500,
  color: vars.color.g500,
  cursor: 'pointer',
  transform: 'translate(-50%,0)',
  '@media': {
    'screen and (min-width: 1024px)': {
      padding: '30px 60px 0px 60px',
      fontSize: 18,
    },
  },
});

export const countryText = style({
  color: vars.color.black,
});

export const emptyBoardContainer = style({
  display: 'flex',
  width: '100%',
  height: 226,
  alignItems: 'center',
  justifyContent: 'center',
  background: vars.color.g200,
  color: vars.color.g400,
  fontSize: 20,
  fontFamily: vars.font.menu,
  fontWeight: 700,
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

export const emptyPostContainer = style({
  display: 'flex',
  width: '100%',
  height: 169,
  alignItems: 'center',
  justifyContent: 'center',
  background: vars.color.g200,
  color: vars.color.g400,
  fontSize: 20,
  fontFamily: vars.font.menu,
  fontWeight: 700,
  textAlign: 'center',
  lineHeight: 1.5,
  borderRadius: 16,
  '@media': {
    'screen and (min-width: 1024px)': {
      height: 198,
      fontSize: 24,
      borderRadius: 20,
    },
  },
});
