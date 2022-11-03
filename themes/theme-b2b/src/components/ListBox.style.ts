import type { Theme } from '@marigold/components';

export const ListBox: Theme['components']['ListBox'] = {
  base: {
    container: {
      mt: 2,

      bg: 'listBoxBackground.base',
      border: '1px solid',
      borderColor: 'listBoxBorder.base',
      borderRadius: 'small',

      '&:error': {
        borderColor: 'listBoxBorder.base.error',
      },
    },

    list: {
      outline: 'none',
    },

    option: {
      p: 'xsmall',

      outline: 'none',
      cursor: 'pointer',

      '&:focus': {
        bg: 'listBoxBackground.option.focus',
      },

      '&:selected': {
        color: 'listBoxColor.option.selected',
        bg: 'listBoxBackground.option.selected',
      },

      '&:disabled': {
        cursor: 'not-allowed',
        color: 'listBoxColor.option.disabled',
      },
    },

    sectionTitle: {
      color: 'listBoxColor.sectionTitle',
      fontSize: 'xxsmall',
      pt: 'xsmall',
      px: 'xsmall',
    },

    section: {
      outline: 'none',

      '&:nth-child(n+1)': {
        borderTop: '1px solid',
        borderColor: 'listBoxBorder.section',
      },
    },
  },
};
