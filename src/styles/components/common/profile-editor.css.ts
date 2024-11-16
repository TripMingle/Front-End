import { style } from '@vanilla-extract/css';
import { vars } from '../../globalTheme.css';

export const imageContainer = style({
  display: 'inline-flex',
  position: 'relative',
});

export const inputImage = style({
  display: 'none',
});

export const editButton = style({
  position: 'absolute',
  display: 'flex',
  right: 0,
  bottom: 0,
  width: 24,
  height: 24,
  padding: 6,
  background: vars.color.secondary,
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
});

export const removeButton = style({
  position: 'absolute',
  display: 'flex',
  right: 0,
  top: 0,
  width: 24,
  height: 24,
  padding: 6,
  color: vars.color.white,
  background: vars.color.g600,
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  fontWeight: '700',
  fontSize: '14px',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 1,
  transition: 'all 0.2s ease',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  '@media': {
    'screen and (min-width: 1024px)': {
      opacity: 0,
      selectors: {
        [`${imageContainer}:hover &`]: {
          opacity: '1',
        },
      },
    },
  },
});
