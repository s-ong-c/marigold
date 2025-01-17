import React from 'react';
import type { Meta, ComponentStory } from '@storybook/react';
import { Container } from '../Container';
import { Header } from './Header';
import isChromatic from 'chromatic';

export default {
  title: 'Components/Header',
  argTypes: {
    variant: {
      control: {
        type: 'text',
      },
      description: 'The variant of the header',
    },
    size: {
      control: {
        type: 'text',
      },
      description: 'The size of the header',
    },
  },
} as Meta;

export const Basic: ComponentStory<typeof Header> = args => (
  <Container contentType="content" size="medium">
    <Header {...args}>Awsome Header</Header>
  </Container>
);

Basic.parameters = {
  chromatic: { viewports: [320, 1200] },
  theme: isChromatic() ? 'b2b' : 'stacked',
};
