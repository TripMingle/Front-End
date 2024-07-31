import { style } from '@vanilla-extract/css';

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
