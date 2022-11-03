import type { Theme } from '@marigold/components';
import { colors } from '../colors';
import { semanticColors } from '../semantic-colors';

export const Select: Theme['components']['Select'] = {
  base: {
    button: {
      appearance: 'none',
      lineHeight: 'large',

      px: 'xsmall',

      bg: 'selectBackground.base',
      borderRadius: 'small',
      border: '1px solid',
      borderColor: 'selectBorder.base',

      outline: 'none',
      cursor: 'pointer',

      '&:hover': {
        borderColor: 'selectBorder.base.hover',
      },

      '&:disabled': {
        color: 'selectColor.base.disabled',

        bg: 'selectBackground.base.disabled',
        borderColor: 'selectBorder.base.disabled',

        cursor: 'not-allowed',
      },

      '&:focus-visible': {
        borderColor: 'selectBorder.base.focusVisible',
        boxShadow: `0 0 0 1px ${semanticColors.selectBoxShadow.base.foucsVisible}`,
      },

      '&:expanded': {
        bg: 'selectBackground.base.expanded',
        borderColor: 'selectBorder.base.expanded',
      },

      '&:error': {
        borderColor: 'selectBorder.base.error',
      },
    },
  },
};
