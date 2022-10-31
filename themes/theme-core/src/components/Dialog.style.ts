import type { Theme } from '@marigold/components';

export const Dialog: Theme['components']['Dialog'] = {
  base: {
    container: {
      borderRadius: '2px',
      pl: 'large',
      pr: 'large',
      pb: 'large',
      pt: 'small',
      bg: 'dialogBackground.container',
    },
    closeButton: {
      position: 'relative',
      right: '-24px',
      top: '-8px',
      bg: 'buttonBackground.primary',
      border: '1px solid ',
      borderColor: 'primary',
      borderRadius: 'small',
      color: 'buttonLabel.primary',
    },
  },
};
