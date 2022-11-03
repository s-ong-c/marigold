import type { Theme } from '@marigold/components';

export const Checkbox: Theme['components']['Checkbox'] = {
  base: {
    label: {
      fontSize: 'xsmall',

      '&:disabled': {
        color: 'checkBoxColor.base.disabled',
      },
    },
    checkbox: {
      borderRadius: 'small',
      borderColor: 'checkBoxBorder.checkbox',

      '&:hover': {
        borderColor: 'checkBoxBorder.checkbox.hover',
      },

      '&:focus': {
        outline: '2px solid',
        outlineColor: 'checkBoxOutline.checkbox.focus',
        outlineOffset: 3,
      },

      '&:checked': {
        color: 'checkBoxColor.checkbox.checked',
        borderColor: 'checkBoxBorder.checkbox.checked',
        bg: 'checkBoxBackground.checkbox.checked',
      },

      '&:indeterminate': {
        color: 'checkBoxColor.checkbox.indeterminate',
        borderColor: 'checkBoxBorder.checkbox.indeterminate',
        bg: 'checkBoxBackground.checkbox.indeterminate',
      },

      '&:disabled': {
        bg: 'checkBoxBackground.checkbox.disabled',
        borderColor: 'checkBoxBorder.checkbox.disabled',
      },
    },
  },
};
