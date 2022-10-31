import React, { ReactNode } from 'react';
import type { Meta, ComponentStory } from '@storybook/react';
import { Box } from '@marigold/system';
import { Table } from '../Table';
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

export const WithTable: ComponentStory<typeof Clamp> = args => (
  <Block>
    <Clamp {...args}>
      <Table aria-label="Table with selection" stretch>
        <Table.Header>
          <Table.Column>Name</Table.Column>
          <Table.Column>Height</Table.Column>
          <Table.Column>Mass</Table.Column>
          <Table.Column>Hair Color</Table.Column>
          <Table.Column>Skin Color</Table.Column>
          <Table.Column>Eye Color</Table.Column>
          <Table.Column>Birth Year</Table.Column>
          <Table.Column>Gender</Table.Column>
        </Table.Header>
        <Table.Body>
          <Table.Row key={1}>
            <Table.Cell>Luke Skywalker</Table.Cell>
            <Table.Cell>172</Table.Cell>
            <Table.Cell>77</Table.Cell>
            <Table.Cell>blond</Table.Cell>
            <Table.Cell>fair</Table.Cell>
            <Table.Cell>blue</Table.Cell>
            <Table.Cell>19BBY</Table.Cell>
            <Table.Cell>male</Table.Cell>
          </Table.Row>
          <Table.Row key={2}>
            <Table.Cell>C-3PO</Table.Cell>
            <Table.Cell>167</Table.Cell>
            <Table.Cell>75</Table.Cell>
            <Table.Cell>n/a</Table.Cell>
            <Table.Cell>gold</Table.Cell>
            <Table.Cell>yellow</Table.Cell>
            <Table.Cell>112BBY</Table.Cell>
            <Table.Cell>n/a</Table.Cell>
          </Table.Row>
          <Table.Row key={3}>
            <Table.Cell>R2-D2</Table.Cell>
            <Table.Cell>96</Table.Cell>
            <Table.Cell>32</Table.Cell>
            <Table.Cell>n/a</Table.Cell>
            <Table.Cell>white, blue</Table.Cell>
            <Table.Cell>red</Table.Cell>
            <Table.Cell>33BBY</Table.Cell>
            <Table.Cell>n/a</Table.Cell>
          </Table.Row>
          <Table.Row key={4}>
            <Table.Cell>Darth Vader</Table.Cell>
            <Table.Cell>202</Table.Cell>
            <Table.Cell>136</Table.Cell>
            <Table.Cell>none</Table.Cell>
            <Table.Cell>white</Table.Cell>
            <Table.Cell>yellow</Table.Cell>
            <Table.Cell>41.9BBY</Table.Cell>
            <Table.Cell>male</Table.Cell>
          </Table.Row>
          <Table.Row key={5}>
            <Table.Cell>Leia Organa</Table.Cell>
            <Table.Cell>150</Table.Cell>
            <Table.Cell>49</Table.Cell>
            <Table.Cell>brown</Table.Cell>
            <Table.Cell>light</Table.Cell>
            <Table.Cell>brown</Table.Cell>
            <Table.Cell>19BBY</Table.Cell>
            <Table.Cell>female</Table.Cell>
          </Table.Row>
          <Table.Row key={6}>
            <Table.Cell>Owen Lars</Table.Cell>
            <Table.Cell>178</Table.Cell>
            <Table.Cell>120</Table.Cell>
            <Table.Cell>brown, grey</Table.Cell>
            <Table.Cell>light</Table.Cell>
            <Table.Cell>blue</Table.Cell>
            <Table.Cell>52BBY</Table.Cell>
            <Table.Cell>male</Table.Cell>
          </Table.Row>
          <Table.Row key={7}>
            <Table.Cell>Beru Whitesun lars</Table.Cell>
            <Table.Cell>165</Table.Cell>
            <Table.Cell>75</Table.Cell>
            <Table.Cell>brown</Table.Cell>
            <Table.Cell>light</Table.Cell>
            <Table.Cell>blue</Table.Cell>
            <Table.Cell>47BBY</Table.Cell>
            <Table.Cell>female</Table.Cell>
          </Table.Row>
          <Table.Row key={8}>
            <Table.Cell>R5-D4</Table.Cell>
            <Table.Cell>97</Table.Cell>
            <Table.Cell>32</Table.Cell>
            <Table.Cell>n/a</Table.Cell>
            <Table.Cell>white, red</Table.Cell>
            <Table.Cell>red</Table.Cell>
            <Table.Cell>unknown</Table.Cell>
            <Table.Cell>n/a</Table.Cell>
          </Table.Row>
          <Table.Row key={9}>
            <Table.Cell>Biggs Darklighter</Table.Cell>
            <Table.Cell>183</Table.Cell>
            <Table.Cell>84</Table.Cell>
            <Table.Cell>black</Table.Cell>
            <Table.Cell>light</Table.Cell>
            <Table.Cell>brown</Table.Cell>
            <Table.Cell>24BBY</Table.Cell>
            <Table.Cell>male</Table.Cell>
          </Table.Row>
          <Table.Row key={10}>
            <Table.Cell>Obi-Wan Kenobi</Table.Cell>
            <Table.Cell>182</Table.Cell>
            <Table.Cell>77</Table.Cell>
            <Table.Cell>auburn, white</Table.Cell>
            <Table.Cell>fair</Table.Cell>
            <Table.Cell>blue-gray</Table.Cell>
            <Table.Cell>57BBY</Table.Cell>
            <Table.Cell>male</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Clamp>
  </Block>
);
