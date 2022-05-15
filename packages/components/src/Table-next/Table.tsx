import React, { useRef } from 'react';
import { useTable, TableProps as AriaTableProps } from '@react-aria/table';
import {
  Cell,
  Column,
  Row,
  TableBody as Body,
  TableHeader as Header,
  TableStateProps,
  useTableState,
} from '@react-stately/table';

import {
  Box,
  ThemeExtensionsWithParts,
  useComponentStyles,
} from '@marigold/system';

import { TableContext } from './Context';
import { TableHeader } from './TableHeader';
import { TableHeaderRow } from './TableHeaderRow';

// Theme Extension
// ---------------
export interface TableThemeExtension
  extends ThemeExtensionsWithParts<
    'Table',
    ['table', 'header', 'row', 'cell']
  > {}

// Props
// ---------------
export interface TableProps
  extends Pick<
      AriaTableProps<object>,
      'focusMode' | 'onRowAction' | 'onCellAction'
    >,
    Omit<TableStateProps<object>, 'showSelectionCheckboxes'> {
  variant?: string;
  size?: string;
}

// Table Component
// ---------------
export const Table: Table = ({ variant, size, ...props }: TableProps) => {
  const tableRef = useRef(null);
  const state = useTableState({
    ...props,
    showSelectionCheckboxes:
      props.selectionMode === 'multiple' &&
      // TODO: It this necessary?
      props.selectionBehavior !== 'replace',
  });
  const { gridProps } = useTable(props, state, tableRef);

  const styles = useComponentStyles(
    'Table',
    { variant, size },
    { parts: ['table', 'header', 'row', 'cell'] }
  );

  const { collection } = state;

  return (
    <TableContext.Provider value={{ state, styles }}>
      <Box as="table" ref={tableRef} css={styles.table} {...gridProps}>
        <TableHeader>
          {collection.headerRows.map(headerRow => (
            <TableHeaderRow key={headerRow.key} item={headerRow}>
              header cell
            </TableHeaderRow>
          ))}
        </TableHeader>
        body!
      </Box>
    </TableContext.Provider>
  );
};

// Export collection components to conveniently have access to them.
Table.Body = Body;
Table.Cell = Cell;
Table.Column = Column;
Table.Header = Header;
Table.Row = Row;

/**
 * Necessary since TypeScript can not infer the
 * types of the @react-stately components.
 */
interface Table {
  (props: TableProps): JSX.Element;
  Body: typeof Body;
  Cell: typeof Cell;
  Column: typeof Column;
  Header: typeof Header;
  Row: typeof Row;
}
