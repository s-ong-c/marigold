import type { Theme } from '@marigold/components';

export const Button: Theme['components']['Button'] = {
  base: {
    border: 'none',
    borderRadius: 'small',
    // FIXME: when we use open-props
    lineHeight: '48px',
    px: 'large',
    outline: 'none',

    '&[data-focus-visible]': {
      outline: '1px solid',
      outlineColor: 'buttonBackground.base.focusVisible',
      outlineOffset: '1px',
    },

    '&:disabled': {
      color: 'buttonColor.base.disabled',
      bg: 'buttonBackground.base.disabled',
    },
  },
  variant: {
    primary: {
      color: 'buttonColor.primary',
      bg: 'buttonBackground.primary',
      '&:hover': {
        color: 'buttonColor.primary.hover',
        bg: 'buttonBackground.primary.hover',
      },
    },
    secondary: {
      color: 'buttonColor.secondary',
      bg: 'buttonBackground.secondary',
      '&:hover': {
        color: 'buttonColor.secondary.hover',
        bg: 'buttonBackground.secondary.hover',
      },
    },
    ghost: {
      color: 'buttonColor.ghost',
      border: '1px solid',
      outlineColor: 'buttonBorder.ghost',
      '&:hover': {
        color: 'buttonColor.ghost.hover',
        bg: 'buttonBackground.ghost.hover',
      },
    },
    text: {
      color: 'buttonColor.text',
      '&:hover': {
        color: 'buttonColor.text.hover',
        outlineColor: 'buttonBorder.text.hover',
        bg: 'buttonBackground.text.hover',
      },
    },
    menu: {
      color: 'buttonColor.menu',
      bg: 'buttonBackground.menu',
      '&:hover': {
        color: 'buttonColor.menu.hover',
        bg: 'buttonBackground.menu.hover',
      },
    },
  },
  size: {
    small: {
      lineHeight: '32px',
      px: 'small',
    },
  },
};
