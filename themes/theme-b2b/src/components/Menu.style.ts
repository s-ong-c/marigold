import type { Theme } from '@marigold/components';

export const Menu: Theme['components']['Menu'] = {
  base: {
    container: {
      bg: 'menuBackground.base',
      border: '1px solid',
      borderColor: 'menuBorder.base',
      borderRadius: 'small',
    },
    item: {
      px: 'small',
      py: 'xxsmall',
      cursor: 'pointer',

      '&:focus': {
        bg: 'menuBackground.item.focus',
      },
    },
  },
};
