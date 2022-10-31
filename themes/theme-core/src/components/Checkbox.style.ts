import type { Theme } from '@marigold/components';

export const Checkbox: Theme['components']['Checkbox'] = {
  base: {
    label: {
      fontSize: 'xxsmall',
      lineHeight: 'small',

      '&:disabled': {
        color: 'checkBoxLable.disabled',
      },
    },
    checkbox: {
      borderRadius: 'small',
      borderColor: 'checkBoxBorder.checkbox',
      bg: 'checkBoxBackground.checkbox.base',
      p: 2,

      '&:focus': {
        outline: '2px solid',
        outlineColor: 'checkBoxFocus.checkbox.focus',
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
