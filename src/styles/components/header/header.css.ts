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
    height: 44,
    zIndex: 100,
    '@media': {
      'screen and (min-width: 1024px)': {
        height: 60,
      },
    },
  },
  variants: {
    theme: {
      white: {
        background: vars.color.white,
        boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.1)',
      },
      clear: { background: 'rgba(0,0,0,0)' },
    },
  },
  defaultVariants: {
    theme: 'white',
  },
});

export const navbar = recipe({
  base: {
    padding: '0px 24px',
    display: 'flex',
    width: '100%',
    maxWidth: 1920,
    alignItems: 'center',
    boxSizing: 'border-box',
    '@media': {
      'screen and (min-width: 1024px)': {
        padding: '0px 60px',
      },
    },
  },
  variants: {
    theme: {
      white: {
        color: vars.color.black,
      },
      clear: { color: vars.color.white },
    },
  },
  defaultVariants: {
    theme: 'white',
  },
});

export const logoContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  marginRight: 'auto',
  cursor: 'pointer',
  '@media': {
    'screen and (min-width: 1024px)': {
      gap: 10,
    },
  },
});

export const logo = style({
  display: 'flex',
  width: 24,
  height: 24,
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 40,
      height: 40,
    },
  },
});

export const title = style({
  width: 108,
  height: 12,
  '@media': {
    'screen and (min-width: 1024px)': {
      display: 'flex',
      width: 180,
      height: 20,
    },
  },
});

// export const title2 = recipe({
//   base: {
//     position: 'relative',
//     height: 20,
//     marginRight: 'auto',
//     fontFamily: vars.font.menu,
//     fontSize: 16,
//     fontWeight: 'bold',
//     '@media': {
//       'screen and (min-width: 1024px)': {
//         height: 30,
//         fontSize: 24,
//       },
//     },
//   },
//   variants: {
//     theme: {
//       white: {
//         color: 'transparent',
//         background: `linear-gradient(45deg, ${vars.color.primary}, ${vars.color.secondary})`,
//         backgroundClip: 'text',
//       },
//       clear: { color: vars.color.white },
//     },
//   },
//   defaultVariants: {
//     theme: 'white',
//   },
// });

export const user = style({
  display: 'flex',
  cursor: 'pointer',
});

export const profileContainer = style({
  alignItems: 'center',
  display: 'none',
  '@media': {
    'screen and (min-width: 1024px)': {
      display: 'flex',
    },
  },
});

export const profile = style({
  padding: '0px 12px',
  borderRadius: '50%',
});

export const icon = style({
  paddingLeft: '20px',
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 36,
      height: 36,
    },
  },
});

export const name = style({
  fontWeight: '500',
});

export const text = style({
  paddingRight: 20,
  fontWeight: '300',
});
