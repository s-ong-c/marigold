import type { Theme } from '@marigold/components';
import { colors } from '../colors';
import { semanticColors } from '../semantic-colors';

export const Input: Theme['components']['Input'] = {
  base: {
    color: 'inputColor.base',
    lineHeight: 'large',

    bg: 'inputBackground.base',
    border: '1px solid',
    borderColor: 'inputBorder.base',
    borderRadius: 'small',
    outline: 'none',

    py: 'none',
    px: 'xsmall',

    '&:hover': {
      borderColor: 'inputBorder.base.hover',
    },

    '&:focus': {
      borderColor: 'inputBorder.base.focus',
      boxShadow: `0 0 0 1px ${semanticColors.inputBoxShadow.base.focus}`,
    },

    '&:disabled': {
      bg: 'inputBackground.base.disabled',
      color: 'inputColor.base.disabled',
      cursor: 'not-allowed',
    },

    '&:error': {
      borderColor: 'inputBorder.base.error',
      boxShadow: `0 0 0 1px ${semanticColors.inputBoxShadow.base.error}`,
    },

    '&:in-group': {
      border: 'none',
      boxShadow: 'none',
    },
  },
};
