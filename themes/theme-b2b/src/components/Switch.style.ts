import type { Theme } from '@marigold/components';
import { colors } from '../colors';
import { semanticColors } from '../semantic-colors';

export const Switch: Theme['components']['Switch'] = {
  base: {
    track: {
      bg: 'switchBackground.base.track',
      boxShadow: `inset 0 0 0 1px ${semanticColors.switchBoxShadow.base.track}`,

      '&:checked': {
        bg: 'switchBackground.base.track.checked',
        boxShadow: `inset 0 0 0 1px ${semanticColors.switchBoxShadow.base.checked}`,
      },
      '&:disabled': {
        opacity: 0.5, // not in spec, but disabled is easier recognizable
        bg: 'switchBackground.base.track.disabled',
        boxShadow: `inset 0 0 0 1px ${semanticColors.switchBoxShadow.base.disabled}`,
      },
      '&:focus': {
        outline: '2px solid',
        outlineColor: 'orange60',
        outlineOffset: 3,
      },
    },
    thumb: {
      boxShadow: '1px 1px 4px rgba(0, 0, 0, 0.25)',

      '&:disabled': {
        bg: 'switchBackground.base.thumb.disabled',
      },
    },
  },
  size: {
    large: {
      track: {
        width: 96,
        height: 48,

        borderRadius: 40,
      },
      thumb: {
        top: 2,
        width: 44,
        height: 44,

        '&:checked': {
          transform: 'translateX(calc(95px - 44px))',
        },
      },
    },
  },
};
