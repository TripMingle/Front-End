import { vars } from '@/styles/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const countryWriteContainer = style({
  position: 'sticky',
  bottom: 20,
  display: 'flex',
  flexDirection: 'column',
  gap: 5,
  cursor: 'pointer',
  '@media': {
    'screen and (min-width: 1024px)': {
      bottom: 60,
    },
  },
});

export const iconContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 'auto',
  marginRight: 10,
  width: 42,
  height: 42,
  zIndex: 10,
  borderRadius: '50%',
  background: `linear-gradient(98.24deg, ${vars.color.secondary} 0%, ${vars.color.primary} 100%)`,
  '@media': {
    'screen and (min-width: 1024px)': {
      width: 48,
      height: 48,
      marginRight: 20,
    },
    'screen and (min-width: 1200px)': {
      marginRight: 'calc((100vw - 1200px)/2)',
    },
  },
});
