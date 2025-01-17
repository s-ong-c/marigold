import React from 'react';
import type { Meta, ComponentStory } from '@storybook/react';
import { Box, Headline, Image, Stack, Text, Tiles } from '@marigold/components';
import isChromatic from 'chromatic';

export default {
  title: 'Components/Tiles',
  argTypes: {
    space: {
      control: {
        type: 'select',
      },
      options: [
        'none',
        'xxsmall',
        'xsmall',
        'small',
        'medium',
        'large',
        'xlarge',
        'xxlarge',
      ],
      description: 'Responsive Style Value',
      table: {
        defaultValue: {
          summary: 'none',
        },
      },
    },
    tilesWidth: {
      control: {
        type: 'text',
      },
      description: 'Responsive Style Value',
      defaultValue: '300px',
    },
    stretch: {
      control: {
        type: 'boolean',
      },
      description:
        'Makes tiles take available width, instead of sticking to the tiles width',
    },
    equalHeight: {
      control: {
        type: 'boolean',
      },
      description:
        'Specifies the size of an implicitly-created grid row track or pattern of tracks.',
    },
  },
} as Meta;

export const Boxes: ComponentStory<typeof Tiles> = args => (
  <>
    <Tiles {...args}>
      <Box
        css={{
          border: '1px solid #ced4da',
          bg: '#e9ecef',
          height: '100px',
        }}
      />
      <Box
        css={{
          border: '1px solid #ced4da',
          bg: '#e9ecef',
          height: '100px',
        }}
      />
      <Box
        css={{
          border: '1px solid #ced4da',
          bg: '#e9ecef',
          height: '100px',
        }}
      />
      <Box
        css={{
          border: '1px solid #ced4da',
          bg: '#e9ecef',
          height: '100px',
        }}
      />
      <Box
        css={{
          border: '1px solid #ced4da',
          bg: '#e9ecef',
          height: '100px',
        }}
      />
      <Box
        css={{
          border: '1px solid #ced4da',
          bg: '#e9ecef',
          height: '100px',
        }}
      />
      <Box
        css={{
          border: '1px solid #ced4da',
          bg: '#e9ecef',
          height: '100px',
        }}
      />
      <Box
        css={{
          border: '1px solid #ced4da',
          bg: '#e9ecef',
          height: '100px',
        }}
      />
    </Tiles>
    <br />
    <Tiles {...args}>
      <Box
        css={{
          border: '1px solid #ced4da',
          bg: '#e9ecef',
          height: '100px',
        }}
      />
      <Box
        css={{
          border: '1px solid #ced4da',
          bg: '#e9ecef',
          height: '100px',
        }}
      />
    </Tiles>
  </>
);

export const DifferentHights: ComponentStory<typeof Tiles> = args => (
  <Tiles {...args}>
    <Box
      css={{
        border: '1px solid #ced4da',
        bg: '#e9ecef',
      }}
    >
      <Text align="center">I love Tiles!</Text>
      <Text align="center">I love Tiles!</Text>
      <Text align="center">I love Tiles!</Text>
      <Text align="center">I love Tiles!</Text>
      <Text align="center">I love Tiles!</Text>
      <Text align="center">I love Tiles!</Text>
      <Text align="center">I love Tiles!</Text>
      <Text align="center">I love Tiles!</Text>
    </Box>
    <Box
      css={{
        border: '1px solid #ced4da',
        bg: '#e9ecef',
      }}
    >
      <Text align="center">I love Tiles!</Text>
      <Text align="center">I love Tiles!</Text>
    </Box>
    <Box
      css={{
        border: '1px solid #ced4da',
        bg: '#e9ecef',
      }}
    >
      <Text align="center">I love Tiles!</Text>
      <Text align="center">I love Tiles!</Text>
      <Text align="center">I love Tiles!</Text>
      <Text align="center">I love Tiles!</Text>
    </Box>
    <Box
      css={{
        border: '1px solid #ced4da',
        bg: '#e9ecef',
      }}
    >
      <Text align="center">I love Tiles!</Text>
      <Text align="center">I love Tiles!</Text>
    </Box>
    <Box
      css={{
        border: '1px solid #ced4da',
        bg: '#e9ecef',
      }}
    >
      <Text align="center">I love Tiles!</Text>
      <Text align="center">I love Tiles!</Text>
    </Box>
    <Box
      css={{
        border: '1px solid #ced4da',
        bg: '#e9ecef',
      }}
    >
      <Text align="center">I love Tiles!</Text>
      <Text align="center">I love Tiles!</Text>
    </Box>
  </Tiles>
);

export const Stacks: ComponentStory<typeof Tiles> = args => (
  <Tiles {...args}>
    <Box
      css={{
        border: '1px solid #fa8005',
        bg: 'orange10',
        p: 'small',
      }}
    >
      <Stack space="medium" alignX="center">
        <Image
          src="https://www.pokewiki.de/images/6/63/Sugimori_004.png"
          alt="glumanda"
          width={200}
          height={200}
        />
        <Headline level="4">Glumanda</Headline>
        <Text>
          Glumanda ist ein Pokémon mit dem Typ Feuer und existiert seit der
          ersten Spielgeneration. Es ist neben Bisasam und Schiggy eines der
          Starter-Pokémon in Pokémon Rot, Blau, Feuerrot und Blattgrün.
        </Text>
      </Stack>
    </Box>
    <Box
      css={{
        border: '1px solid #fa8005',
        bg: 'orange10',
        p: 'small',
      }}
    >
      <Stack space="medium" alignX="center">
        <Image
          src="https://www.pokewiki.de/images/7/7a/Sugimori_005.png"
          alt="glutexo"
          width={200}
          height={200}
        />
        <Headline level="4">Glutexo</Headline>
        <Text>
          Glutexo ist ein Pokémon mit dem Typ Feuer und existiert seit der
          ersten Spielgeneration. Als erste Weiterentwicklung von Glumanda
          spielt es eine wichtige Rolle als Starter-Pokémon in Pokémon Rot,
          Blau, Feuerrot, Blattgrün.
        </Text>
      </Stack>
    </Box>
    <Box
      css={{
        border: '1px solid #fa8005',
        bg: 'orange10',
        p: 'small',
      }}
    >
      <Stack space="medium" alignX="center">
        <Image
          src="https://www.pokewiki.de/images/9/96/Sugimori_006.png"
          alt="glurak"
          width={250}
          height={200}
        />
        <Headline level="4">Glurak</Headline>
        <Text>
          Glurak ist ein Pokémon mit den Typen Feuer und Flug und existiert seit
          der ersten Spielgeneration. Es stellt die zweite Entwicklungsstufe von
          Glumanda und Glutexo dar und ist somit neben Bisaflor und Turtok eine
          der Endentwicklungen der Starter-Pokémon aus Kanto.
        </Text>
      </Stack>
    </Box>
  </Tiles>
);

Stacks.parameters = {
  // Set the viewports in Chromatic at a story level.
  chromatic: { viewports: [320, 1200] },
  theme: isChromatic() ? 'b2b' : 'stacked',
};
