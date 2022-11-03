import type { Theme } from '@marigold/components';

export const Radio: Theme['components']['Radio'] = {
  base: {
    label: {
      fontSize: 'xsmall',

      '&:disabled': {
        color: 'radioColor.base.disabled',
      },
    },
    radio: {
      borderColor: 'radioBorder.radio',

      '&:hover': {
        borderColor: 'radioBorder.radio.hover',
      },

      '&:focus': {
        outline: '2px solid',
        outlineColor: 'orange60',
        outlineOffset: 3,
      },

      '&:checked': {
        color: 'radioColor.radio.checked',
        borderColor: 'radioBorder.radio.checked',
        bg: 'radioBackground.radio.checked',
      },

      '&:disabled': {
        bg: 'radioBackground.radio.disabled',
        borderColor: 'radioBorder.radio.disabled',
      },
    },
  },
};
