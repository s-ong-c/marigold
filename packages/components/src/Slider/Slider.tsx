/**
 * Thanks to react-aria: https://react-spectrum.adobe.com/react-aria/useSlider.html
 */
import React, { forwardRef, ReactNode } from 'react';
import { useSlider } from '@react-aria/slider';
import { useSliderState } from '@react-stately/slider';
import { useNumberFormatter } from '@react-aria/i18n';
import { useObjectRef } from '@react-aria/utils';
import { AriaSliderProps } from '@react-types/slider';

import { ThemeExtensionsWithParts, useComponentStyles } from '@marigold/system';
import { HtmlProps } from '@marigold/types';

import { Box } from '../Box';
import { Thumb } from './Thumb';

// Theme Extension
// ---------------
export interface SliderThemeExtension
  extends ThemeExtensionsWithParts<
    'Slider',
    ['track', 'thumb', 'label', 'output']
  > {}

// Props
// ---------------
export interface SliderProps
  extends Omit<
      HtmlProps<'input'>,
      | 'step'
      | 'value'
      | 'defaultValue'
      | 'onChange'
      | 'onFocus'
      | 'onBlur'
      | 'size'
      | 'width'
    >,
    /**
     * `react-aria` has a slightly different API for some events e.g `onChange`, `onFocus`
     * `onBlur`. Thus, we adjust our regular props to match them.
     */
    Pick<
      AriaSliderProps,
      'maxValue' | 'step' | 'value' | 'defaultValue' | 'onChange'
    > {
  variant?: string;
  size?: string;
  width?: string;
  formatOptions?: Intl.NumberFormatOptions;
  children?: ReactNode;
}

// Component
// ---------------
/**
 * The slider consists of two parts.
 * A label + the output value and the slider functionality itself.
 * The slider itself consists of a track line and a thumb.
 */
export const Slider = forwardRef<HTMLDivElement, SliderProps>(
  ({ variant, size, width = '100%', ...props }, ref) => {
    const { formatOptions } = props;
    const trackRef = useObjectRef(ref);
    const numberFormatter = useNumberFormatter(formatOptions);
    const state = useSliderState({ ...props, numberFormatter });
    const { groupProps, trackProps, labelProps, outputProps } = useSlider(
      {
        label: props.children,
        ...props,
      },
      state,
      trackRef
    );

    const styles = useComponentStyles(
      'Slider',
      { variant, size },
      { parts: ['track', 'thumb', 'label', 'output'] }
    );

    return (
      <Box
        __baseCSS={{
          display: 'flex',
          flexDirection: 'column',
          touchAction: 'none',
          width,
        }}
        {...groupProps}
      >
        {/* Flex container for the label and output element. */}
        <Box __baseCSS={{ display: 'flex', alignSelf: 'stretch' }}>
          {props.children && (
            <Box as="label" __baseCSS={styles.label} {...labelProps}>
              {props.children}
            </Box>
          )}
          <Box
            as="output"
            {...outputProps}
            __baseCSS={{ flex: '1 0 auto', textAlign: 'end' }}
            css={styles.output}
          >
            {state.getThumbValueLabel(0)}
          </Box>
        </Box>
        {/* The track element holds the visible track line and the thumb. */}
        <Box
          {...trackProps}
          ref={trackRef}
          __baseCSS={{
            height: 32,
            width: '100%',
            cursor: props.disabled ? 'not-allowed' : 'pointer',
          }}
        >
          <Box
            __baseCSS={{
              top: '50%',
              transform: 'translateY(-50%)',
            }}
            css={styles.track}
          />
          <Thumb
            state={state}
            trackRef={trackRef}
            disabled={props.disabled}
            styles={styles.thumb}
          />
        </Box>
      </Box>
    );
  }
);
