import type { Theme } from '@marigold/components';
import { semanticColors } from '../semantic-colors';

export const Dialog: Theme['components']['Dialog'] = {
  base: {
    container: {
      // Make sure to have correct font
      fontFamily: 'body',
      borderRadius: '2px',
      boxShadow: `0px 4px 4px ${semanticColors.dialogBoxShadow.base}`,
      pl: 'large',
      pr: 'large',
      pb: 'large',
      pt: 'small',
    },
    closeButton: {
      position: 'relative',
      right: '-24px',
      top: '-8px',
    },
  },
};
