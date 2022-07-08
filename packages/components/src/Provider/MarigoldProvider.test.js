/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from 'react';
import { useTheme } from '@marigold/system';
import { render, screen } from '@testing-library/react';
import { MarigoldProvider } from './MarigoldProvider';
// Setup
// ---------------
const theme = {
  colors: {
    black: '#000',
  },
  fontSizes: {
    body: 16,
    heading: 32,
  },
  text: {
    body: {
      fontSize: 'body',
      color: 'black',
    },
  },
};
test('themes can be cascaded', () => {
  const outerTheme = {
    colors: {
      primary: 'coral',
    },
  };
  const innerTheme = {
    colors: {
      primary: 'gainsboro',
    },
  };
  const Theme = ({ testId }) => {
    const { theme } = useTheme();
    return React.createElement(
      'div',
      { 'data-testid': testId },
      JSON.stringify(theme, null, 2)
    );
  };
  render(
    React.createElement(
      MarigoldProvider,
      { theme: outerTheme },
      React.createElement(
        React.Fragment,
        null,
        React.createElement(Theme, { testId: 'outer' }),
        React.createElement(
          MarigoldProvider,
          { theme: innerTheme },
          React.createElement(Theme, { testId: 'inner' })
        )
      )
    )
  );
  const outer = screen.getByTestId('outer');
  const inner = screen.getByTestId('inner');
  expect(outer.innerHTML).toMatchInlineSnapshot(`
    "{
      \\"colors\\": {
        \\"primary\\": \\"coral\\"
      }
    }"
  `);
  expect(inner.innerHTML).toMatchInlineSnapshot(`
    "{
      \\"colors\\": {
        \\"primary\\": \\"gainsboro\\"
      }
    }"
  `);
});
test('OverlayProvider is added', () => {
  const { container } = render(
    React.createElement(MarigoldProvider, { theme: theme }, 'Test')
  );
  expect(
    container.querySelector(`div[data-overlay-container="true"]`)
  ).toBeDefined();
});
test('OverlayProvider is added only once', () => {
  const innerTheme = { colors: { primary: 'red' } };
  const { container } = render(
    React.createElement(
      MarigoldProvider,
      { theme: theme },
      React.createElement(MarigoldProvider, { theme: innerTheme }, 'Test')
    )
  );
  expect(
    container.querySelectorAll(`div[data-overlay-container="true"]`).length
  ).toEqual(1);
});
test('applies global styles for body and html based on `theme.root`', () => {
  const theme = {
    fonts: {
      body: 'Inter',
      html: 'Roboto',
    },
    lineHeights: {
      body: 2.5,
    },
    fontWeights: {
      body: 500,
      html: 700,
    },
    root: {
      body: {
        fontFamily: 'body',
        lineHeight: 'body',
        fontWeight: 'body',
      },
      html: {
        fontFamily: 'html',
        fontWeight: 'html',
      },
    },
  };
  const view = render(
    React.createElement(
      MarigoldProvider,
      { theme: theme },
      React.createElement('h1', null, 'Hello')
    )
  );
  // eslint-disable-next-line testing-library/no-node-access
  const html = view.baseElement.parentElement;
  expect(html).toHaveStyle(`font-family: ${theme.fonts.html}`);
  expect(html).toHaveStyle(`font-weight: ${theme.fontWeights.html}`);
  const body = view.baseElement;
  expect(body).toHaveStyle(`font-family: ${theme.fonts.body}`);
  expect(body).toHaveStyle(`font-weight: ${theme.fontWeights.body}`);
  expect(body).toHaveStyle(`line-height: ${theme.lineHeights.body}`);
});
//# sourceMappingURL=MarigoldProvider.test.js.map