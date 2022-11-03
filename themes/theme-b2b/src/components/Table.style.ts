import type { Theme } from '@marigold/components';

export const Table: Theme['components']['Table'] = {
  base: {
    table: {
      borderCollapse: 'collapse',
      fontSize: 'xxsmall',
    },
    header: {
      py: 'small',
      px: 'small',
      cursor: 'default',
      color: 'tableColor.base.header',
      textAlign: 'left',
      borderBottom: '1px solid',
      borderColor: 'tableBorder.base.header',

      '&:focus': {
        outlineColor: 'tableOutline.base.header.focus',
      },
    },
    row: {
      '&:selected': {
        bg: 'tableColor.row.selected',
      },
      '&[data-hover]': {
        bg: 'tableColor.row.dataHover',
      },
      '&:focus-visible': {
        outlineColor: 'tableOutline.base.row.focusVisible',
      },
    },
    cell: {
      py: 'small',
      px: 'small',
      color: 'tableColor.base.cell',
      borderBottom: '1px solid',
      borderColor: 'tableBorder.base.cell',
      '&:focus': {
        outlineColor: 'tableOutline.base.cell.focus',
      },
    },
  },
  variant: {
    compact: {
      header: {
        py: 'xsmall',
      },
      cell: {
        py: 'xsmall',
      },
    },
    expanded: {
      header: {
        py: 'medium',
      },
      cell: {
        py: 'medium',
      },
    },
  },
};
