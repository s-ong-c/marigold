import type { Theme } from '@marigold/components';

import { semanticColors } from '../semantic-colors';

export const Card: Theme['components']['Card'] = {
  base: {
    bg: 'cardBackground.base',
    p: 'small',
    boxShadow: `0px 4px 4px ${semanticColors.cardBoxShadow.base}`,
    borderRadius: 'large',
    maxWidth: '300px',
  },
};
