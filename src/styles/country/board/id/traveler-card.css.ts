import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const cardContainer = style({
  display: 'flex',
  flexDirection: 'column',
  padding: 20,
  borderTop: `1px solid ${vars.color.g200}`,
  borderBottom: `1px solid ${vars.color.g200}`,
  '@media': {
    'screen and (min-width: 1024px)': {
      padding: 30,
      marginTop: 50,
      borderRadius: 20,
      border: 'none',
      boxShadow: '0px 10px 20px 0px #0000000D',
    },
  },
});

export const travelerTitle = style({
  display: 'flex',
  marginBottom: 15,
  gap: 2,
  alignItems: 'center',
  color: vars.color.black,
  fontSize: 16,
  fontWeight: 700,
  '@media': {
    'screen and (min-width: 1024px)': {
      marginBottom: 30,
      fontSize: 18,
    },
  },
});

export const profileContainer = style({
  display: 'flex',
  gap: 10,
  alignItems: 'center',
  '@media': {
    'screen and (min-width: 1024px)': {
      gap: 20,
    },
  },
});

export const mobileProfileInfo = style({
  display: 'flex',
  flex: 1,
  gap: 5,
  flexDirection: 'column',
});

export const profileInfo = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 5,
  fontSize: 12,
  fontWeight: 400,
  color: vars.color.g500,
  '@media': {
    'screen and (min-width: 1024px)': {
      flexDirection: 'column',
      alignItems: 'normal',
      fontSize: 14,
    },
  },
});

export const profileName = style({
  fontWeight: 500,
  color: vars.color.black,
  fontSize: 14,
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 18,
    },
  },
});

export const infoContainer = style({
  display: 'none',
  '@media': {
    'screen and (min-width: 1024px)': {
      display: 'flex',
      marginTop: 30,
      flexDirection: 'column',
      gap: 10,
    },
  },
});

export const infoTitle = style({
  '@media': {
    'screen and (min-width: 1024px)': {
      display: 'flex',
      fontSize: 14,
      fontWeight: 500,
      color: vars.color.g500,
    },
  },
});

export const infoContent = style({
  '@media': {
    'screen and (min-width: 1024px)': {
      fontSize: 16,
      fontWeight: 400,
      color: vars.color.black,
    },
  },
});

export const mobileInfoContent = style({
  fontSize: 12,
  fontWeight: 400,
  color: vars.color.black,
  '@media': {
    'screen and (min-width: 1024px)': {
      display: 'none',
    },
  },
});
