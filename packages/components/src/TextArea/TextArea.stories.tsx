import React from 'react';
import type { Meta, ComponentStory } from '@storybook/react';
import { TextArea } from './TextArea';
import isChromatic from 'chromatic';

export default {
  title: 'Components/TextArea',
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      description: 'The label',
      defaultValue: 'Label',
    },
    description: {
      control: {
        type: 'text',
      },
      description: 'Help Text',
      defaultValue: 'This is a help text description',
    },
    error: {
      control: {
        type: 'boolean',
      },
      description: 'Is the input invalid?',
      defaultValue: false,
    },
    errorMessage: {
      control: {
        type: 'text',
      },
      description: 'Error Message',
      defaultValue: 'Something went wrong',
    },

    required: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    readOnly: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    width: {
      control: {
        type: 'text',
      },
      description: 'The width of the field',
    },
    rows: {
      control: {
        type: 'number',
      },
      description: 'The number of rows',
    },
  },
} as Meta;

export const Basic: ComponentStory<typeof TextArea> = args => (
  <TextArea {...args} />
);

export const Controlled: ComponentStory<typeof TextArea> = args => {
  const [value, setValue] = React.useState('');
  return (
    <>
      <TextArea {...args} value={value} onChange={setValue} />
      <pre>
        <strong>Input Value:</strong>
        {value}
      </pre>
    </>
  );
};

Basic.parameters = {
  chromatic: { viewports: [320, 1200] },
  theme: isChromatic() ? 'b2b' : 'stacked',
};
