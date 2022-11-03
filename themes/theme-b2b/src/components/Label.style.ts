import { Theme } from '@marigold/components';

export const Label: Theme['components']['Label'] = {
  base: {
    fontSize: 'xxsmall',
    color: 'labelColor.base',
    '&:disabled': {
      color: 'labelColor.base.disabled',
    },
  },
};
