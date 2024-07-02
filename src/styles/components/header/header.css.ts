import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/globalTheme.css';

export const fixedbar = style({
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  top: 0,
  width: '100%',
  zIndex: 100,
});

export const clearNavbar = style({
  backgroundColor: 'rgba(255, 255, 255, 0)',
  padding: '0px 60px',
  display: 'flex',
  height: '60px',
  width: '100%',
  maxWidth: 1800,
  color: vars.color.white,
  alignItems: 'center',
});

export const whiteNavbar = style({
  backgroundColor: '#ffffff',
  padding: '0px 60px',
  display: 'flex',
  height: '60px',
  width: '100%',
  maxWidth: 1800,
  color: vars.color.black,
  alignItems: 'center',
});

export const whiteLogo = style({
  fontFamily: vars.font.menu,
  fontSize: '24px',
  fontWeight: 'bold',
  color: vars.color.white,
  position: 'relative',
  marginRight: 'auto',
});

export const primaryLogo = style({
  fontFamily: vars.font.menu,
  fontSize: '24px',
  fontWeight: 'bold',
  background: `linear-gradient(45deg, ${vars.color.primary}, ${vars.color.secondary})`,
  backgroundClip: 'text',
  color: 'transparent',
  position: 'relative',
  marginRight: 'auto',
});

export const profile = style({
  padding: '0px 12px',
  borderRadius: '50%',
});

export const icon = style({
  paddingLeft: '20px',
});

export const name = style({
  fontWeight: '500',
});

export const text = style({
  paddingRight: 20,
  fontWeight: '300',
});
