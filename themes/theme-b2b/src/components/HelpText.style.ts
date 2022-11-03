import { Theme } from '@marigold/components';

export const HelpText: Theme['components']['HelpText'] = {
  base: {
    container: {
      fontSize: 'xxsmall',
      color: 'helpTextColor.base',
      '&:error': {
        color: 'helpTextColor.base.error',
      },
    },
    icon: {
      size: 'xxsmall',
    },
  },
};
