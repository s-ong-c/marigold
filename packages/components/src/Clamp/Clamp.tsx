import React, { ReactNode } from 'react';
import { Box, ResponsiveStyleValue } from '@marigold/system';

export interface ClampProps {
  children: ReactNode;
  space?: ResponsiveStyleValue<string>;
  height?: [min: string, max: string];
  width?: [min: string, max: string];
}

export const Clamp = ({
  children,
  space = 'none',
  height,
  width,
}: ClampProps) => (
  <Box
    css={{
      p: space,
      maxHeight: `min(${height?.join(',')})`,
      maxWidth: `min(${width?.join(',')})`,
    }}
  >
    {children}
  </Box>
);

// TODO: What do we want here? What use cases are there? Do we want to have a min/max range or just a max?
