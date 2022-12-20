import React, { ReactNode } from 'react';
import { useTableRowGroup } from '@react-aria/table';
import { Box } from '@marigold/system';

export interface TableBodyProps {
  children: ReactNode;
}

export const TableBody = ({ children }: TableBodyProps) => {
  const { rowGroupProps } = useTableRowGroup();
  return (
    <Box __baseCSS={{ display: 'contents' }} {...rowGroupProps}>
      {children}
    </Box>
  );
};
