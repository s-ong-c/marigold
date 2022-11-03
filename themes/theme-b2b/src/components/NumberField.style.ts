import type { Theme } from '@marigold/components';
import { colors } from '../colors';
import { semanticColors } from '../semantic-colors';

export const NumberField: Theme['components']['NumberField'] = {
  base: {
    group: {
      border: '1px solid',
      borderColor: 'numberFieldBorder.base',
      borderRadius: 'small',

      '&:hover': {
        borderColor: 'numberFieldBorder.base.hover',
      },

      '&:focus': {
        borderColor: 'numberFieldBorder.base.focus',
        boxShadow: `0 0 0 1px ${colors.orange60}`,
      },

      '&:disabled': {
        bg: 'numberFieldBackground.base.disabled',
        color: 'gray40',
        cursor: 'not-allowed',
      },

      '&:error': {
        borderColor: 'numberFieldBorder.base.error',
        boxShadow: `0 0 0 1px ${semanticColors.numberFieldBoxShadow.base.error}`,
      },
    },
    stepper: {
      color: 'text',
      width: 'xsmall',

      '&:nth-of-type(1)': {
        borderRight: '1px solid',
        borderColor: 'numberFieldBorder.stepper.firstOfType',
      },
      '&:nth-of-type(2)': {
        borderLeft: '1px solid',
        borderColor: 'numberFieldBorder.stepper.secondOfType',
      },

      '&:hover': {
        color: 'gray90',
        bg: 'numberFieldBackground.stepper.hover',
      },

      '&:disabled': {
        color: 'gray40',
      },

      '&:hover-group': {
        borderColor: 'numberFieldBackground.stepper.hoverGroup',
      },

      '&:focus-group': {
        borderColor: 'numberFieldBackground.stepper.focusGroup',
      },

      '&:error-group': {
        borderColor: 'numberFieldBackground.stepper.errorGroup',
      },
    },
  },
};
