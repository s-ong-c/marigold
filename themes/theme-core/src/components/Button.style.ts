import type { Theme } from '@marigold/components';

export const Button: Theme['components']['Button'] = {
  base: {
    cursor: 'pointer',
    appearance: 'none',
    borderRadius: 'small',
    fontSize: 'xxsmall',
    lineHeight: '22px',
    height: 24,
    py: 0,
    px: 'small',
    bg: 'buttonBackground.base',
    color: 'buttonLabel.base',
    border: '1px solid',
    borderColor: 'buttonBorder.base',
    transition: 'all 200ms ease-out',

    '&:hover': {
      bg: 'buttonBackground.base.hover',
    },

    '&:disabled': {
      cursor: 'not-allowed',
      color: 'buttonLabel.base.disabled',
      bg: 'buttonBackground.base.disabled',
      border: '1px solid',
      borderColor: 'buttonBorder.base.disabled',
    },
  },
  variant: {
    primary: {
      color: 'buttonLabel.primary',
      bg: 'buttonBackground.primary',
      borderColor: 'buttonBorder.primary',

      '&:hover': {
        color: 'buttonLabel.primary.hover',
        bg: 'buttonBackground.primary.hover',
        borderColor: 'buttonBorder.primary.hover',
      },
    },
    secondary: {
      color: 'buttonLabel.secondary',
      bg: 'buttonBackground.secondary',
      border: '1px solid',
      outlineColor: 'buttonOutline.secondary',
      '&:hover': {
        bg: 'buttonBackground.secondary.hover',
      },
    },
    ghost: {
      color: 'buttonLable.ghost',
      border: '1px solid',
      outlineColor: 'buttonOutline.ghost',
      '&:hover': {
        color: 'buttonLable.ghost.hover',
        bg: 'buttonBackground.ghost.hover',
        cursor: 'pointer',
      },
    },
    text: {
      color: 'buttonLable.text',
      ':hover': {
        color: 'buttonLable.text.hover',
        outlineColor: 'buttonOutline.text.hover',
        bg: 'buttonBackground.text.hover',
        cursor: 'pointer',
      },
    },
  },
};
