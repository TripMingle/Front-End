import { vars } from '@/app/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const fixedbar = style({
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100%',
});

export const clearNavbar = style({
  backgroundColor: 'rgba(255, 255, 255, 0)',
  padding: '0px 60px',
  zIndex: 100,
  display: 'flex',
  height: '60px',
  color: vars.color.white,
  alignItems: 'center',
});

export const whiteNavbar = style({
  backgroundColor: '#ffffff',
  padding: '0px 60px',
  zIndex: 100,
  display: 'flex',
  height: '60px',
  color: vars.color.black,
  alignItems: 'center',
});

export const whiteLogo = style({
  fontFamily: vars.font.menu,
  fontSize: '24px',
  fontWeight: '500',
  color: vars.color.white,
  position: 'relative',
  marginRight: 'auto',
});

export const primaryLogo = style({
  fontFamily: vars.font.menu,
  fontSize: '24px',
  fontWeight: '500',
  color: vars.color.primary,
  position: 'relative',
  marginRight: 'auto',
});

export const profile = style({
  width: '36px',
  height: '36px',
  padding: '0px 12px',
  borderRadius: '50%',
});

export const name = style({
  fontWeight: '500',
});

export const icon = style({
  width: '24px',
  height: '24px',
  paddingLeft: '20px',
});
