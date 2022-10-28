import React, { ReactNode } from 'react';
import type { Meta, ComponentStory } from '@storybook/react';
import { Box } from '@marigold/system';
import { Clamp } from './Clamp';

export default {
  title: 'Components/Clamp',
  argTypes: {
    space: {
      control: {
        type: 'text',
      },
      description: 'spacing of the clamp',
    },
    width: {
      control: {
        type: 'select',
      },
      options: ['None', 'One Width', 'Two Widths'],
      mapping: {
        None: undefined,
        'One Width': ['300px'],
        'Two Widths': ['50vw', '500px'],
      },
      description: 'width of the clamp',
    },
    height: {
      control: {
        type: 'select',
      },
      options: ['None', 'One Height', 'Two Heights'],
      mapping: {
        None: undefined,
        'One Height': ['200px'],
        'Two Heights': ['50%', '500px'],
      },
      description: 'height of the clamp',
    },
  },
} as Meta;

const Block = ({ children }: { children: ReactNode }) => (
  <Box
    css={{
      background: 'hsla(218 16% 77% / 50%)',
      border: '1px solid hsla(218 16% 70% / 50%)',
      borderRadius: 12,
      p: 12,
      blockSize: '100%',
    }}
  >
    {children}
  </Box>
);

export const Basic: ComponentStory<typeof Clamp> = args => (
  <Clamp {...args}>
    <Block>I am clamped!</Block>
  </Clamp>
);
