import { vars } from '@/styles/globalTheme.css';
import { recipe } from '@vanilla-extract/recipes';

export const container = recipe({
  base: {
    width: '100%',
    color: vars.color.g500,
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 14,
    padding: '10px 20px',
    borderRadius: 10,
    boxShadow: '0px 5px 15px 0px rgba(0, 0, 0, 0.05)',
    cursor: 'pointer',
    boxSizing: 'border-box',
    '@media': {
      'screen and (min-width: 1024px)': {
        fontSize: 16,
        padding: '14px 20px',
        boxShadow: '0px 10px 20px 0px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  variants: {
    on: {
      true: {
        color: vars.color.secondary,
        border: `1px solid ${vars.color.secondary}`,
      },
      false: { border: '1px solid transparent' },
    },
  },
});
