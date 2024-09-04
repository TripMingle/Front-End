import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const listContainer = style({
  position: 'relative',
});

export const listLine = style({
  position: 'absolute',
  display: 'flex',
  width: 2,
  height: 'calc(100% - 40px)',
  marginTop: 14,
  marginLeft: 4,
  background: vars.color.g200,
});

export const listItemContainer = style({
  display: 'flex',
  flexDirection: 'column',
  margin: '30px 0px',
  gap: 30,
  '@media': {
    'screen and (min-width: 1024px)': {
      margin: '40px 0px',
    },
  },
});

export const lastListItem = style({
  zIndex: 4,
  background:
    'linear-gradient(to bottom, transparent 0px, transparent 14px, #ffffff 14px)',
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
});

export const dateContainer = style({
  display: 'flex',
  alignItems: 'center',
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
  margin: '0px 10px',
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

export const date = style({
  color: vars.color.g500,
  fontSize: 13,
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

export const placeListCotainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});