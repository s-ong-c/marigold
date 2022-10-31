import type { Theme } from '@marigold/components';

export const Menu: Theme['components']['Menu'] = {
  base: {
    container: {
      bg: 'menuBackground.base',
      border: '1px solid',
      borderColor: 'gray40',
      borderRadius: 'small',
    },
    item: {
      fontSize: 'xxsmall',
      px: 'xxsmall',
      py: 'xxsmall',
      cursor: 'pointer',

      '&:hover': {
        color: 'menuColor.item.hover',
        bg: 'menuBackground.item.hover',
      },
    },
  },
};
