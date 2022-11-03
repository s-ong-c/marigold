import type { Theme } from '@marigold/components';

export const Message: Theme['components']['Message'] = {
  base: {
    container: {
      borderStyle: 'solid',
      borderWidth: '2px 2px 2px 16px',
      pt: 'xsmall',
      pb: 'small',
      px: 'small',
      fontSize: 'xxsmall',
      color: 'messageColor.base',
      bg: 'messageBackground.base',
    },
    title: {
      lineHeight: 'large',
      fontWeight: 'bold',
    },
    content: {
      lineHeight: 'small',
    },
    icon: {
      display: 'flex',
      alignItems: 'center',
      size: 16,
    },
  },
  variant: {
    warning: {
      container: {
        borderColor: 'messageBorder.warning',
      },
      icon: {
        color: 'messageIcon.warning',
      },
    },
    error: {
      container: {
        borderColor: 'messageBorder.error',
      },
      icon: {
        color: 'messageIcon.error',
      },
    },
    info: {
      container: {
        borderColor: 'messageBorder.info',
      },
      icon: {
        color: 'messageIcon.info',
      },
    },
  },
};
