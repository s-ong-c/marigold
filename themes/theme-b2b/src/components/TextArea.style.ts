import { Theme } from '@marigold/components';
import { colors } from '../colors';
import { semanticColors } from '../semantic-colors';

export const TextArea: Theme['components']['TextArea'] = {
  base: {
    color: 'textAreaColor.base',
    lineHeight: 'large',

    border: '1px solid',
    borderColor: 'textAreaBorder.base',
    borderRadius: 'small',
    outline: 'none',

    py: 'none',
    px: 'xsmall',

    '&:hover': {
      borderColor: 'textAreaBorder.base.hover',
    },

    '&:focus': {
      borderColor: 'orange60',
      boxShadow: `0 0 0 1px ${colors.orange60}`,
    },

    '&:disabled': {
      bg: 'textAreaBackground.base.disabled',
      color: 'gray40',
      cursor: 'not-allowed',
    },

    '&:error': {
      borderColor: 'textAreaBorder.base.error',
      boxShadow: `0 0 0 1px ${semanticColors.textAreaBoxShadow.base.error}`,
    },
  },
};
