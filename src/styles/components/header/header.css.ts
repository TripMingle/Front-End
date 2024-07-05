import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/styles/globalTheme.css';

export const fixedbar = recipe({
  base: {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    top: 0,
    width: '100%',
    zIndex: 100,
  },
  variants: {
    theme: {
      white: { background: vars.color.white },
      clear: { background: 'rgba(0,0,0,0)' },
    },
  },
  defaultVariants: {
    theme: 'white',
  },
});

export const navbar = recipe({
  base: {
    padding: '0px 60px',
    display: 'flex',
    height: '60px',
    width: '100%',
    maxWidth: 1800,
    alignItems: 'center',
  },
  variants: {
    theme: {
      white: { color: vars.color.black },
      clear: { color: vars.color.white },
    },
  },
  defaultVariants: {
    theme: 'white',
  },
});

export const logo = recipe({
  base: {
    position: 'relative',
    marginRight: 'auto',
    fontFamily: vars.font.menu,
    fontSize: '24px',
    fontWeight: 'bold',
  },
  variants: {
    theme: {
      white: {
        color: 'transparent',
        background: `linear-gradient(45deg, ${vars.color.primary}, ${vars.color.secondary})`,
        backgroundClip: 'text',
      },
      clear: { color: vars.color.white },
    },
  },
  defaultVariants: {
    theme: 'white',
  },
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
