import type { Theme } from '@marigold/components';

export const Slider: Theme['components']['Slider'] = {
  base: {
    track: {
      width: '100%',
      position: 'absolute',
      top: 16,
      height: 8,
      border: 'none',
      borderColor: 'transparent',
      borderRadius: 'large',
      color: 'transparent',
      bg: 'sliderBackground.base.track',
    },
    thumb: {
      verticalAlign: 'middle',
      border: '4px solid',
      borderColor: 'sliderBorder.base.thumb',
      width: 16,
      height: 16,
      bg: 'sliderBackground.base.thumb',
      borderRadius: 'large',
      '&:focus': {
        border: '4px solid',
        borderColor: 'sliderBorder.base.thumb.hover',
      },
      '&:disabled': {
        border: '4px solid',
        borderColor: 'sliderBorder.base.thumb.disabled',
        bg: 'sliderBackground.base.thumb.disabled',
      },
    },
    label: {
      color: 'sliderColor.base.lable',
      fontSize: 'xxsmall',
      fontWeight: 'body',
    },
    output: {
      color: 'sliderColor.base.output',
      fontSize: 'xxsmall',
      fontWeight: 'body',
    },
  },
};
