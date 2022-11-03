import { Theme } from '@marigold/components';

export const Link: Theme['components']['Link'] = {
  base: {
    color: 'linkColor.base',
    '&:hover': {
      textDecoration: 'none',
    },
    '&:disabled': {
      cursor: 'disabled',
    },
  },
  variant: {
    menuItemLink: {
      color: 'linkColor.menuItemLink',
      textDecoration: 'none',
    },
  },
};
