import type { Theme } from '@marigold/components';

import { semanticColors } from '../semantic-colors';

export const ListBox: Theme['components']['ListBox'] = {
  base: {
    container: {
      fontSize: 'xxsmall',
      background: 'listBoxBackground.base',

      px: 'xxsmall',
      pb: 'xxsmall',

      borderTop: 'none',
      borderRight: '1px solid',
      borderLeft: '1px solid',
      borderBottom: '1px solid',
      borderBottomRightRadius: '2px',
      borderBottomLeftRadius: '2px',
      borderColor: 'listBoxBoarderColor.base',

      '&:error': {
        background: 'listBoxBackground.base.error',
        borderTop: 'none',
        borderRight: '1px solid',
        borderLeft: '1px solid',
        borderBottom: '1px solid',
        borderBottomRightRadius: '2px',
        borderBottomLeftRadius: '2px',
        borderColor: 'listBoxBoarderColor.base.error',
      },
    },

    list: {
      outline: 'none',
    },

    section: {
      fontSize: 'xxsmall',
      fontWeight: 'bold',
      lineHeight: 'medium',
      px: 'xxsmall',
    },

    option: {
      color: 'listBoxColor.option',
      fontSize: 'xxsmall',
      lineHeight: 'medium',

      outline: 'none',
      cursor: 'pointer',

      p: '0 6px 0 15px',

      '&:focus': {
        color: 'listBoxColor.option.focus',
        bg: 'listBoxBackground.option.focus',
        backgroundImage: `linear-gradient(${semanticColors.listBoxBackgroundImage.option.focus.colorStopOne} 20%, ${semanticColors.listBoxBackgroundImage.option.focus.colorStopTwo} 90%)`,
      },

      '&:selected': {
        color: 'listBoxColor.option.selected',
        bg: 'listBoxBackground.option.selected',
        backgroundImage: `linear-gradient(${semanticColors.listBoxBackgroundImage.option.selected.colorStopOne} 20%, ${semanticColors.listBoxBackgroundImage.option.selected.colorStopTwo} 90%)`,
      },

      '&:disabled': {
        cursor: 'not-allowed',
        color: 'listBoxColor.option.disabled',
      },
      '&:hover': {
        bg: 'listBoxBackground.option.hover',
      },
    },
  },
};
