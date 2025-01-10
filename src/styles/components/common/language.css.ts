import { vars } from '@/styles/globalTheme.css';
import { recipe } from '@vanilla-extract/recipes';

export const text = recipe({
  base: {
    display: 'inline-flex',
    borderRadius: 5,
    padding: '4px 5px',
    fontFamily: vars.font.menu,
    fontWeight: 500,
    fontSize: 10,
    color: vars.color.white,
    '@media': {
      'screen and (min-width: 1024px)': {
        padding: '5px 6px',
        fontSize: 12,
      },
    },
  },
  variants: {
    language: {
      korean: {
        background: `linear-gradient(45deg, #3688FF, #0038FF)`,
      },
      english: {
        background: `linear-gradient(45deg, #FFB74C, #FF7A00)`,
      },
      chinese: {
        background: `linear-gradient(45deg, #FF8D8D, #FF0000)`,
      },
      japanese: {
        background: `linear-gradient(45deg, #908DFF, #9E00FF)`,
      },
    },
  },
});
