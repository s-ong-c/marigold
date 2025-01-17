import React, { ReactNode } from 'react';
import {
  Box,
  useComponentStyles,
  ThemeComponentProps,
  ThemeExtension,
} from '@marigold/system';
import { HtmlProps } from '@marigold/types';

// Theme Extension
// ---------------
export interface BodyThemeExtension extends ThemeExtension<'Body'> {}

// Props
// ---------------
export interface BodyProps extends ThemeComponentProps, HtmlProps<'section'> {
  children?: ReactNode;
}

// Component
// ---------------
export const Body = ({ children, variant, size, ...props }: BodyProps) => {
  const styles = useComponentStyles('Body', { variant, size });
  return (
    <Box as="section" {...props} css={styles}>
      {children}
    </Box>
  );
};
