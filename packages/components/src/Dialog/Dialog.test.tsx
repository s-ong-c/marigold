/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React, { useState } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { OverlayProvider } from '@react-aria/overlays';
import { ThemeProvider } from '@marigold/system';

import { Dialog } from './Dialog';
import { Button } from '../Button';
import { Headline } from '../Headline';

const theme = {
  colors: {
    green: '#2f9e44',
    black: '#212529',
  },
  space: {
    none: 'none',
    'small-1': '4px',
    'large-1': '16px',
  },
  components: {
    Dialog: {
      base: {
        container: {
          p: 'large-1',
        },
        closeButton: {
          p: 'small-1',
        },
      },
      variant: {
        custom: {
          container: {
            bg: 'green',
          },
          closeButton: {
            bg: 'black',
          },
        },
      },
      size: {
        large: {
          container: {
            width: '400px',
          },
        },
      },
    },
  },
};

const user = userEvent.setup();

let errorMock: jest.SpyInstance;

beforeEach(() => {
  errorMock = jest.spyOn(console, 'error').mockImplementation();
});

afterEach(() => {
  errorMock.mockRestore();
});

test('renders children correctly', () => {
  render(
    <OverlayProvider>
      <ThemeProvider theme={theme}>
        <Dialog.Trigger>
          <Button>Open</Button>
          <Dialog>
            <Headline>Headline</Headline>
            Content
          </Dialog>
        </Dialog.Trigger>
      </ThemeProvider>
    </OverlayProvider>
  );
  const button = screen.getByText('Open');
  expect(button).toBeInTheDocument();

  fireEvent.click(button);

  const headline = screen.getByText('Headline');
  expect(headline).toBeInTheDocument();

  const dialog = screen.getByText('Content');
  expect(dialog).toBeInTheDocument();
});

test('supports children as function', () => {
  const spy = jest.fn().mockReturnValue(<div>I am a spy!</div>);
  render(
    <OverlayProvider>
      <ThemeProvider theme={theme}>
        <Dialog.Trigger>
          <Button>Open</Button>
          <Dialog>{spy}</Dialog>
        </Dialog.Trigger>
      </ThemeProvider>
    </OverlayProvider>
  );
  const button = screen.getByText('Open');
  fireEvent.click(button);

  expect(spy).toHaveBeenCalled();
});

test('dialog can be opened by button', () => {
  render(
    <OverlayProvider>
      <ThemeProvider theme={theme}>
        <Dialog.Trigger>
          <Button>Open</Button>
          <Dialog>
            <Headline>Headline</Headline>
            Content
          </Dialog>
        </Dialog.Trigger>
      </ThemeProvider>
    </OverlayProvider>
  );
  const button = screen.getByText('Open');
  fireEvent.click(button);

  const dialog = screen.getByText('Content');
  expect(dialog).toBeVisible();
});

test('optionally renders a close button', () => {
  render(
    <OverlayProvider>
      <ThemeProvider theme={theme}>
        <Dialog.Trigger>
          <Button>Open</Button>
          <Dialog closeButton>
            <Headline>Headline</Headline>
            Content
          </Dialog>
        </Dialog.Trigger>
      </ThemeProvider>
    </OverlayProvider>
  );
  const button = screen.getByText('Open');
  fireEvent.click(button);
  const dialog = screen.getByText('Content');
  expect(dialog).toBeVisible();

  const closeButton = dialog.firstChild?.lastChild!;
  expect(closeButton).toBeInTheDocument();

  fireEvent.click(closeButton);
  expect(dialog).not.toBeVisible();
});

test('supoorts closing the dialog with escape key', async () => {
  render(
    <OverlayProvider>
      <ThemeProvider theme={theme}>
        <Dialog.Trigger>
          <Button>Open</Button>
          <Dialog closeButton>
            <Headline>Headline</Headline>
            Content
          </Dialog>
        </Dialog.Trigger>
      </ThemeProvider>
    </OverlayProvider>
  );
  const button = screen.getByText('Open');
  fireEvent.click(button);

  const dialog = screen.getByText('Content');
  await user.type(dialog, '{esc}');
  await waitFor(() => {
    expect(screen.queryByRole('Dialog')).not.toBeInTheDocument();
  });
});

test('close Dialog by clicking on the Underlay', () => {
  render(
    <OverlayProvider>
      <ThemeProvider theme={theme}>
        <Dialog.Trigger>
          <Button>Open</Button>
          <Dialog closeButton>
            <Headline>Headline</Headline>
            Content
          </Dialog>
        </Dialog.Trigger>
      </ThemeProvider>
    </OverlayProvider>
  );
  const button = screen.getByText('Open');
  fireEvent.click(button);

  const dialog = screen.getByRole('dialog');

  fireEvent.mouseDown(document.body);
  fireEvent.mouseUp(document.body);

  expect(dialog).not.toBeVisible();
});

test('child function is passed a close function', () => {
  render(
    <OverlayProvider>
      <ThemeProvider theme={theme}>
        <Dialog.Trigger>
          <Button>Open</Button>
          <Dialog>
            {({ close }) => <button onClick={close}>Custom Close</button>}
          </Dialog>
        </Dialog.Trigger>
      </ThemeProvider>
    </OverlayProvider>
  );
  const button = screen.getByText('Open');
  fireEvent.click(button);

  const dialog = screen.getByRole('dialog');
  const closeButton = screen.getByText('Custom Close');
  fireEvent.click(closeButton);

  expect(dialog).not.toBeVisible();
});

test('supports title for accessability reasons', () => {
  render(
    <OverlayProvider>
      <ThemeProvider theme={theme}>
        <Dialog.Trigger>
          <Button>Open</Button>
          <Dialog closeButton>
            <Headline>Headline</Headline>
            Content
          </Dialog>
        </Dialog.Trigger>
      </ThemeProvider>
    </OverlayProvider>
  );
  const button = screen.getByText('Open');
  fireEvent.click(button);

  const dialog = screen.getByRole('dialog');
  expect(dialog).toHaveAttribute('aria-labelledby');

  const headline = screen.getByText('Headline');
  expect(headline).toHaveAttribute('id');

  expect(headline.id).toBe(dialog.getAttribute('aria-labelledby'));
});

test('supports custom title for accessability reasons', () => {
  render(
    <OverlayProvider>
      <ThemeProvider theme={theme}>
        <Dialog.Trigger>
          <Button>Open</Button>
          <Dialog closeButton aria-labelledby="myTitle">
            <Headline id="myTitle">Headline</Headline>
            Content
          </Dialog>
        </Dialog.Trigger>
      </ThemeProvider>
    </OverlayProvider>
  );
  const button = screen.getByText('Open');
  fireEvent.click(button);

  const dialog = screen.getByRole('dialog');
  expect(dialog).toHaveAttribute('aria-labelledby');

  const headline = screen.getByText('Headline');
  expect(headline).toHaveAttribute('id');

  expect(headline.id).toBe(dialog.getAttribute('aria-labelledby'));
});

test('child function is passed an id for the dialog title (a11y)', () => {
  render(
    <OverlayProvider>
      <ThemeProvider theme={theme}>
        <Dialog.Trigger>
          <Button>Open</Button>
          <Dialog>
            {({ titleProps }) => <div {...titleProps}>Custom Headline</div>}
          </Dialog>
        </Dialog.Trigger>
      </ThemeProvider>
    </OverlayProvider>
  );
  const button = screen.getByText('Open');
  fireEvent.click(button);

  const dialog = screen.getByRole('dialog');
  const headline = screen.getByText('Custom Headline');

  expect(dialog).toHaveAttribute(
    'aria-labelledby',
    headline.getAttribute('id')
  );
});

test('warns if no element to attach the title can be found', () => {
  const warn = jest.spyOn(console, 'warn').mockImplementation();

  render(
    <OverlayProvider>
      <ThemeProvider theme={theme}>
        <Dialog.Trigger>
          <Button>Open</Button>
          <Dialog closeButton>Content</Dialog>
        </Dialog.Trigger>
      </ThemeProvider>
    </OverlayProvider>
  );
  const button = screen.getByText('Open');
  fireEvent.click(button);

  const dialog = screen.getByRole('dialog');
  expect(dialog).not.toHaveAttribute('aria-labelledby');
  expect(dialog.firstChild).not.toHaveAttribute('id');

  expect(warn).toHaveBeenCalled();
  expect(warn.mock.calls[0][0]).toMatchInlineSnapshot(
    `"No child in <Dialog> found that can act as title for accessibility. Please add a <Header> or <Headline> as direct child."`
  );
  warn.mockRestore();
});

test('supports focus and open dialog with keyboard', async () => {
  render(
    <OverlayProvider>
      <ThemeProvider theme={theme}>
        <Dialog.Trigger>
          <Button>Open</Button>
          <Dialog closeButton>
            <Headline>Headline</Headline>
            Content
          </Dialog>
        </Dialog.Trigger>
      </ThemeProvider>
    </OverlayProvider>
  );

  user.tab();
  await user.keyboard('[Enter]');

  const dialog = screen.getByRole('dialog');
  await waitFor(() => {
    expect(dialog).toBeVisible();
  });
});

test('dialog has base style', () => {
  render(
    <OverlayProvider>
      <ThemeProvider theme={theme}>
        <Dialog.Trigger>
          <Button>Open</Button>
          <Dialog closeButton>
            <Headline>Headline</Headline>
            Content
          </Dialog>
        </Dialog.Trigger>
      </ThemeProvider>
    </OverlayProvider>
  );
  const button = screen.getByText('Open');
  fireEvent.click(button);

  const dialog = screen.getByRole('dialog');
  expect(dialog).toBeVisible();

  const closeButton = dialog.firstChild?.lastChild;

  expect(closeButton).toHaveStyle(`padding: ${theme.space['small-1']}`);
  expect(dialog).toHaveStyle(`padding: ${theme.space['large-1']}`);
});

test('dialog has variant style', () => {
  render(
    <OverlayProvider>
      <ThemeProvider theme={theme}>
        <Dialog.Trigger>
          <Button>Open</Button>
          <Dialog variant="custom" closeButton>
            <Headline>Headline</Headline>
            Content
          </Dialog>
        </Dialog.Trigger>
      </ThemeProvider>
    </OverlayProvider>
  );
  const button = screen.getByText('Open');
  fireEvent.click(button);

  const dialog = screen.getByRole('dialog');
  expect(dialog).toBeVisible();

  const closeButton = dialog.firstChild?.lastChild;

  expect(closeButton).toHaveStyle(`background-color: ${theme.colors.black}`);
  expect(dialog).toHaveStyle(`background-color: ${theme.colors.green}`);
});

test('dialog supports size', () => {
  render(
    <OverlayProvider>
      <ThemeProvider theme={theme}>
        <Dialog.Trigger>
          <Button>Open</Button>
          <Dialog size="large" closeButton>
            <Headline>Headline</Headline>
            Content
          </Dialog>
        </Dialog.Trigger>
      </ThemeProvider>
    </OverlayProvider>
  );
  const button = screen.getByText('Open');
  fireEvent.click(button);

  const dialog = screen.getByRole('dialog');
  expect(dialog).toBeVisible();
  expect(dialog).toHaveStyle('width: 400px');
});

test('renders with dialog controller', () => {
  render(
    <OverlayProvider>
      <Dialog.Controller open>
        <Dialog>
          <Headline>Headline</Headline>Content
        </Dialog>
      </Dialog.Controller>
    </OverlayProvider>
  );

  const dialog = screen.getByRole('dialog');
  expect(dialog).toBeInTheDocument();
});

test('renders nothing by default', () => {
  render(
    <OverlayProvider>
      <Dialog.Controller>
        <Dialog>
          <Headline>Headline</Headline>Content
        </Dialog>
      </Dialog.Controller>
    </OverlayProvider>
  );

  const dialog = screen.queryByRole('dialog');
  expect(dialog).not.toBeInTheDocument();
});

test('dialog can be controlled', async () => {
  const Component = () => {
    const [open, setOpen] = useState(false);

    return (
      <OverlayProvider>
        <Button data-testid="button" onPress={() => setOpen(true)}>
          Open Dialog
        </Button>
        <Dialog.Controller open={open}>
          <Dialog>
            <Headline>Headline</Headline>
            <Button data-testid="close" onPress={() => setOpen(false)}>
              Close
            </Button>
          </Dialog>
        </Dialog.Controller>
      </OverlayProvider>
    );
  };

  render(<Component />);

  let dialog = screen.queryByRole('dialog');
  expect(dialog).not.toBeInTheDocument();

  const button = screen.getByTestId('button');
  await user.click(button);

  dialog = screen.queryByRole('dialog');
  expect(dialog).toBeInTheDocument();

  const close = screen.getByTestId('close');
  await user.click(close);

  dialog = screen.queryByRole('dialog');
  expect(dialog).not.toBeInTheDocument();
});

test('close state has a listener', async () => {
  const spy = jest.fn();

  const Component = () => {
    const [open, setOpen] = useState(false);

    return (
      <OverlayProvider>
        <Button data-testid="button" onPress={() => setOpen(true)}>
          Open Dialog
        </Button>
        <Dialog.Controller open={open} onOpenChange={spy}>
          <Dialog>
            {({ close }) => (
              <>
                <Headline>Headline</Headline>
                <Button data-testid="close" onPress={close}>
                  Close
                </Button>
              </>
            )}
          </Dialog>
        </Dialog.Controller>
      </OverlayProvider>
    );
  };

  render(<Component />);

  expect(spy.mock.calls).toMatchInlineSnapshot(`[]`);

  const button = screen.getByTestId('button');
  await user.click(button);

  expect(spy.mock.calls).toMatchInlineSnapshot(`[]`);

  const close = screen.getByTestId('close');
  await user.click(close);

  expect(spy.mock.calls).toMatchInlineSnapshot(`
    [
      [
        false,
      ],
    ]
  `);
});
