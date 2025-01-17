import React from 'react';
import type { Meta, ComponentStory } from '@storybook/react';

import { Inset } from '../Inset';
import { Text } from '../Text';
import isChromatic from 'chromatic';

export default {
  title: 'Components/Inset',
  argTypes: {
    space: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large'],
      description: 'set padding on all sides',
    },
    spaceX: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large'],
      description: 'set padding on left and right side',
    },
    spaceY: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large'],
      description: 'set padding on top and bottom side',
    },
  },
} as Meta;

export const Basic: ComponentStory<typeof Inset> = args => (
  <Inset {...args}>
    <Text>
      It is a dark time for the Rebellion. Although the Death Star has been
      destroyed, Imperial troops have driven the Rebel forces from their hidden
      base and pursued them across the galaxy. Evading the dreaded Imperial
      Starfleet, a group of freedom fighters led by Luke Skywalker has
      established a new secret base on the remote ice world of Hoth. The evil
      lord Darth Vader, obsessed with finding young Skywalker, has dispatched
      thousands of remote probes into the far reaches of space....
    </Text>
  </Inset>
);

Basic.parameters = {
  chromatic: { viewports: [320, 1200] },
  theme: isChromatic() ? 'b2b' : 'stacked',
};
