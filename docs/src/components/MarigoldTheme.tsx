import React, { ReactNode } from 'react';
import { ThemeProvider, __defaultTheme } from '@marigold/system';
import { useThemeSwitch } from './ThemeSwitch';

export interface MarigoldThemeProps {
  children: ReactNode;
}

/**
 * Component to wrap children in the current marigold theme
 */
export const MarigoldTheme = ({ children }: MarigoldThemeProps) => {
  const { current, themes } = useThemeSwitch();

  return (
    <ThemeProvider theme={(current && themes[current]) || __defaultTheme}>
      {children}
    </ThemeProvider>
  );
};
