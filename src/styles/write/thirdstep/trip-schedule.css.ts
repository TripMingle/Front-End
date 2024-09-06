import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
});

export const dateContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
});

export const dayCircle = style({
  display: 'flex',
  width: 10,
  height: 10,
  zIndex: 10,
  borderRadius: 10,
  background: vars.color.black,
});

export const dayContainer = style({
  display: 'flex',
  padding: '5px 8px',
  alignItems: 'center',
  borderRadius: 50,
  background: vars.color.black,
  color: vars.color.white,
  gap: 5,
  fontWeight: 400,
  fontSize: 13,
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 16,
    },
  },
});

export const airplaneIcon = style({
  width: 13,
  height: 13,
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 16,
      height: 16,
    },
  },
});

export const mapIcon = style({
  paddingBottom: 2,
  width: 13,
  height: 13,
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 15,
      height: 15,
    },
  },
});

export const date = style({
  color: vars.color.g500,
  fontSize: 13,
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 16,
    },
  },
});

export const mapButton = style({
  display: 'flex',
  gap: 4,
  alignItems: 'center',
  border: `1px solid ${vars.color.secondary}`,
  borderRadius: 20,
  padding: '5px 8px',
  color: vars.color.secondary,
  background: vars.color.white,
  fontWeight: 700,
  fontSize: 13,
  cursor: 'pointer',
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 16,
    },
  },
});

export const buttonContainer = style({
  display: 'flex',
  justifyContent: 'center',
});

export const button = style({
  background: vars.color.g200,
  padding: '6px 20px',
  border: 0,
  borderRadius: 20,
  fontSize: 13,
  cursor: 'pointer',
  '@media': {
    'screen and (min-width: 1024px)': {
      padding: '10px 30px',
      fontSize: 16,
    },
  },
});

export const schedulePlaceContainer = style({
  display: 'flex',
});

export const listOrderContainer = style({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: 16,
  marginRight: 10,
  gap: 10,
  '@media': {
    'screen and (min-width: 1024px)': {
      marginLeft: 24,
      marginRight: 20,
      gap: 20,
    },
  },
});

export const listOrderItem = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  height: 44,
  '@media': {
    'screen and (min-width: 1024px)': {
      height: 64,
    },
  },
});

export const listLine = style({
  position: 'absolute',
  top: 21,
  left: 10,
  height: '100%',
  borderRight: `2px dashed ${vars.color.g300}`,
  selectors: {
    [`${listOrderItem}:last-child > &`]: {
      display: 'none',
    },
  },
  '@media': {
    'screen and (min-width: 1024px)': {
      top: 37,
      left: 15,
    },
  },
});

export const listNumber = style({
  display: 'flex',
  width: 20,
  height: 20,
  zIndex: 4,
  borderRadius: 30,
  fontSize: 10,
  fontWeight: 700,
  justifyContent: 'center',
  alignItems: 'center',
  color: vars.color.white,
  background: vars.color.secondary,
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 30,
      height: 30,
      fontSize: 14,
    },
  },
});

export const placeListContainer = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
});
