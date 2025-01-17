/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@marigold/system';

import { Stack } from './Stack';
import { Text } from '../Text';

// Setup
// ---------------
const theme = {
  space: {
    none: 0,
    small: 2,
    medium: 4,
    large: 8,
  },
};

test('default space is "none"', () => {
  render(
    <ThemeProvider theme={theme}>
      <Stack>
        <Text>first</Text>
        <Text>second</Text>
      </Stack>
    </ThemeProvider>
  );
  const first = screen.getByText('first').parentElement;
  expect(first).toHaveStyle(`gap: 0`);
});

test('uses spacing from theme', () => {
  render(
    <ThemeProvider theme={theme}>
      <Stack space="small">
        <Text>first</Text>
        <Text>second</Text>
      </Stack>
    </ThemeProvider>
  );
  const first = screen.getByText(/first/).parentElement;
  expect(first).toHaveStyle(`gap: 2px`);
});

test('children are not aligned by default', () => {
  render(
    <Stack data-testid="stack">
      <Text>first</Text>
    </Stack>
  );
  const stack = screen.getByTestId('stack');
  expect(stack).toHaveStyle(`align-items: initial`);
});

test('allows to align children to the left', () => {
  render(
    <Stack alignX="left" data-testid="stack">
      <Text>first</Text>
    </Stack>
  );
  const stack = screen.getByTestId('stack');
  expect(stack).toHaveStyle(`align-items: flex-start`);
});

test('allows to align children to the center', () => {
  render(
    <Stack alignX="center" data-testid="stack">
      <Text>first</Text>
    </Stack>
  );
  const stack = screen.getByTestId('stack');
  expect(stack).toHaveStyle(`align-items: center`);
});

test('allows to align children to the right', () => {
  render(
    <Stack alignX="right" data-testid="stack">
      <Text>first</Text>
    </Stack>
  );
  const stack = screen.getByTestId('stack');
  expect(stack).toHaveStyle(`align-items: flex-end`);
});

test('children are not aligned vertically by default', () => {
  render(
    <Stack data-testid="stack">
      <Text>first</Text>
    </Stack>
  );
  const stack = screen.getByTestId('stack');
  expect(stack).toHaveStyle(`justify-content: initial`);
});

test('allows to align children to the vertical top', () => {
  render(
    <Stack alignY="top" data-testid="stack">
      <Text>first</Text>
    </Stack>
  );
  const stack = screen.getByTestId('stack');
  expect(stack).toHaveStyle(`justify-content: flex-start`);
});

test('allows to align children to the vertical center', () => {
  render(
    <Stack alignY="center" data-testid="stack">
      <Text>first</Text>
    </Stack>
  );
  const stack = screen.getByTestId('stack');
  expect(stack).toHaveStyle(`justify-content: center`);
});

test('allows to align children to the bottom', () => {
  render(
    <Stack alignY="bottom" data-testid="stack">
      <Text>first</Text>
    </Stack>
  );
  const stack = screen.getByTestId('stack');
  expect(stack).toHaveStyle(`justify-content: flex-end`);
});

test('behaves as inline be default', () => {
  render(
    <Stack data-testid="stack">
      <Text>first</Text>
    </Stack>
  );
  const stack = screen.getByTestId('stack');
  expect(stack).toHaveStyle(`blockSize: initial`);
});

test('allows to fill space', () => {
  render(
    <Stack stretch data-testid="stack">
      <Text>first</Text>
    </Stack>
  );
  const stack = screen.getByTestId('stack');
  expect(stack).toHaveStyle(`blockSize: 100%`);
});

test('supports nesting', () => {
  render(
    <ThemeProvider theme={theme}>
      <Stack space="large">
        <Stack space="small" data-testid="upperStack">
          <Text>first</Text>
          <Text>second</Text>
        </Stack>
        <Stack space="small" data-testid="lowerStack">
          <Text>third</Text>
          <Text>fourth</Text>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
  const first = screen.getByText(/first/).parentElement;
  const upperStack = screen.getByTestId('upperStack').parentElement;
  expect(first).toHaveStyle(`gap: 2px`);
  expect(upperStack).toHaveStyle(`gap: 8px`);

  const third = screen.getByText(/third/).parentElement;
  const lowerStack = screen.getByTestId('lowerStack').parentElement;
  expect(third).toHaveStyle(`gap: 2px`);
  expect(lowerStack).toHaveStyle(`gap: 8px`);
});

test('renders as div per default', () => {
  render(
    <ThemeProvider theme={theme}>
      <Stack data-testid="stack">
        <Text>first</Text>
        <Text>second</Text>
      </Stack>
    </ThemeProvider>
  );

  const stack = screen.getByTestId('stack');
  expect(stack instanceof HTMLDivElement).toBeTruthy();
});
