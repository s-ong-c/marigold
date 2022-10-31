import { Theme } from '@marigold/components';

export const Link: Theme['components']['Link'] = {
  base: {
    color: 'linkColor.base',
    '&:hover, &:visited': {
      textDecoration: 'underline',
      cursor: 'pointer',
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
    cardText: {
      color: 'linkColor.cardText',
      fontWeight: 'bold',
      '&:hover': {
        textDecoration: 'none',
      },
    },
  },
};
