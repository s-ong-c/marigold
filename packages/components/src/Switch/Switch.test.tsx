import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ThemeProvider } from '@marigold/system';
import { Switch } from './Switch';
import userEvent from '@testing-library/user-event';

const theme = {
  fonts: {
    regular: 'Oswald Regular',
    body: 'Inter',
  },
  spaces: {
    medium: '16px',
    small: '8px',
  },
  sizes: {
    none: 0,
    large: 120,
  },
  components: {
    Switch: {
      base: {
        container: {
          p: 'medium',
        },
        label: {
          fontFamily: 'body',
        },
        track: {
          bg: 'blue',
          '&:checked': {
            bg: 'orange',
          },
          '&:disabled': {
            bg: 'gray',
          },
          '&:focus': {
            borderColor: 'gray',
          },
        },
        thumb: {
          bg: 'white',
          '&:disabled': {
            bg: 'black',
          },
        },
      },
      variant: {
        custom: {
          container: {
            p: 'small',
          },
          track: {
            bg: 'green',
          },
          thumb: {
            bg: 'hotpink',
          },
        },
      },
      size: {
        medium: {
          track: {
            p: 'medium',
          },
        },
      },
    },
  },
};
const user = userEvent.setup();
const getSwitchParts = () => {
  const label = screen.getByText('Label');
  // eslint-disable-next-line testing-library/no-node-access
  const container = label.parentElement!;
  // eslint-disable-next-line testing-library/no-node-access
  const track = container.lastChild!;
  // eslint-disable-next-line testing-library/no-node-access
  const thumb = track.lastChild!;

  const input: HTMLInputElement = screen.getByRole('switch');

  return { label, input, container, track, thumb };
};

test('supports base styling', () => {
  render(
    <ThemeProvider theme={theme}>
      <Switch>Label</Switch>
    </ThemeProvider>
  );
  const { label, container, track, thumb } = getSwitchParts();

  expect(label).toHaveStyle('font-family: Inter');
  expect(container).toHaveStyle(`padding: ${theme.spaces.medium}px`);
  expect(track).toHaveStyle('background-color: blue');
  expect(thumb).toHaveStyle('background-color: white');
});

test('supports a custom variant', () => {
  render(
    <ThemeProvider theme={theme}>
      <Switch variant="custom">Label</Switch>
    </ThemeProvider>
  );
  const { container, track, thumb } = getSwitchParts();

  expect(container).toHaveStyle(`padding: ${theme.spaces.small}px`);
  expect(track).toHaveStyle('background-color: green');
  expect(thumb).toHaveStyle('background-color: hotpink');
});

test('supports a size', () => {
  render(
    <ThemeProvider theme={theme}>
      <Switch size="medium">Label</Switch>
    </ThemeProvider>
  );
  const { track } = getSwitchParts();

  expect(track).toHaveStyle(`padding: ${theme.spaces.medium}px`);
});

test('takes full width by default', () => {
  render(
    <ThemeProvider theme={theme}>
      <Switch>Label</Switch>
    </ThemeProvider>
  );
  const { container } = getSwitchParts();
  expect(container).toHaveStyle('width: 100%');
});

test('allows to set width via prop', () => {
  render(
    <ThemeProvider theme={theme}>
      <Switch width="large">Label</Switch>
    </ThemeProvider>
  );
  const { container } = getSwitchParts();
  expect(container).toHaveStyle(`width: ${theme.sizes.large}px`);
});

test('supports disabled prop', () => {
  render(
    <ThemeProvider theme={theme}>
      <Switch disabled>Label</Switch>
    </ThemeProvider>
  );
  const { input, thumb, track } = getSwitchParts();

  expect(input).toBeDisabled();
  expect(track).toHaveStyle('background-color: gray');
  expect(thumb).toHaveStyle('background-color: black');
});

test('renders hidden <input> element', () => {
  render(
    <ThemeProvider theme={theme}>
      <Switch>Label</Switch>
    </ThemeProvider>
  );
  const { input } = getSwitchParts();
  expect(input instanceof HTMLInputElement).toBeTruthy();
});

test('toggle switch per click', () => {
  render(
    <ThemeProvider theme={theme}>
      <Switch>Label</Switch>
    </ThemeProvider>
  );

  const { input, track } = getSwitchParts();

  fireEvent.click(input);
  expect(track).toHaveStyle(`background-color: orange`);
  expect(input.checked).toBeTruthy();

  fireEvent.click(input);
  expect(track).toHaveStyle(`background-color: blue`);
  expect(input.checked).toBeFalsy();
});

test('focus element and toggle switch per keyboard space', async () => {
  render(
    <ThemeProvider theme={theme}>
      <Switch>Label</Switch>
    </ThemeProvider>
  );

  const { input, track } = getSwitchParts();
  user.tab();

  // eslint-disable-next-line testing-library/await-async-utils
  waitFor(() => expect(track).toHaveAttribute('data-focus'));
  user.keyboard('{space}');
  // eslint-disable-next-line testing-library/await-async-utils
  waitFor(() => expect(track).toHaveStyle(`background-color: orange`));
  // eslint-disable-next-line testing-library/await-async-utils
  waitFor(() => expect(input.checked).toBeTruthy());

  user.keyboard('{space}');
  // eslint-disable-next-line testing-library/await-async-utils
  waitFor(() => expect(track).toHaveStyle(`background-color: blue`));
  // eslint-disable-next-line testing-library/await-async-utils
  waitFor(() => expect(input.checked).toBeFalsy());
});

test('supports default checked', () => {
  render(
    <ThemeProvider theme={theme}>
      <Switch defaultChecked>Label</Switch>
    </ThemeProvider>
  );

  const { input } = getSwitchParts();

  expect(input.checked).toBeTruthy();
  fireEvent.click(input);
  expect(input.checked).toBeFalsy();
});

test('supports controlled component usage', () => {
  const onChange = jest.fn();
  render(
    <ThemeProvider theme={theme}>
      <Switch onChange={onChange}>Label</Switch>
    </ThemeProvider>
  );

  const { input } = getSwitchParts();

  fireEvent.click(input);
  expect(onChange).toHaveBeenCalledWith(true);
  expect(input.checked).toBeTruthy();

  fireEvent.click(input);
  expect(onChange).toHaveBeenCalledWith(false);
  expect(input.checked).toBeFalsy();
});

test('forwards ref', () => {
  const ref = React.createRef<HTMLInputElement>();
  render(
    <ThemeProvider theme={theme}>
      <Switch ref={ref}>Label</Switch>
    </ThemeProvider>
  );

  expect(ref.current).toBeInstanceOf(HTMLInputElement);
});
