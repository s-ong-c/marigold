import React, { ReactNode, useRef } from 'react';
import { useTableHeaderRow } from '@react-aria/table';
import { GridNode } from '@react-types/grid';

import { useTableContext } from './Context';
import { Box } from '@marigold/system';

// Props
// ---------------
export interface TableHeaderRowProps {
  children: ReactNode;
  item: GridNode<object>;
}

// Component
// ---------------
export const TableHeaderRow = ({ item, children }: TableHeaderRowProps) => {
  const { state } = useTableContext();

  const ref = useRef(null);
  const { rowProps } = useTableHeaderRow({ node: item }, state, ref);

  return (
    <Box __baseCSS={{ display: 'contents' }} {...rowProps} ref={ref}>
      {children}
    </Box>
  );
};
