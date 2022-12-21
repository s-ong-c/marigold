import React, { ReactNode, useRef } from 'react';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { useTableRow } from '@react-aria/table';
import { mergeProps } from '@react-aria/utils';
import { GridNode } from '@react-types/grid';

import { Box, useComponentStyles, useStateProps } from '@marigold/system';

import { useTableContext } from './Context';

// Props
// ---------------
export interface TableRowProps {
  children?: ReactNode;
  row: GridNode<object>;
}

// Component
// ---------------
export const TableRow = ({ children, row }: TableRowProps) => {
  const ref = useRef(null);
  const { interactive, state, ...ctx } = useTableContext();
  const { variant, size } = row.props;

  const { row: styles } = useComponentStyles(
    'Table',
    { variant: variant || ctx.variant, size: size || ctx.size },
    { parts: ['row'] }
  );
  const { rowProps, isPressed } = useTableRow(
    {
      node: row,
    },
    state,
    ref
  );

  const disabled = state.disabledKeys.has(row.key);
  const selected = state.selectionManager.isSelected(row.key);

  // Rows are focused if any cell inside it is focused
  const { focusProps, isFocusVisible } = useFocusRing({ within: true });
  const { hoverProps, isHovered } = useHover({
    isDisabled: disabled || !interactive,
  });

  const stateProps = useStateProps({
    disabled,
    selected,
    hover: isHovered,
    focusVisible: isFocusVisible,
    active: isPressed,
  });

  const gridTemplateColumns =
    state.selectionManager.selectionMode === 'multiple'
      ? `min-content repeat(${state.collection.columnCount - 1}, 1fr)`
      : `repeat(${state.collection.columnCount}, 1fr)`;
  return (
    <Box
      ref={ref}
      __baseCSS={{
        display: 'grid',
        gridTemplateColumns,

        cursor: !interactive ? 'text' : disabled ? 'default' : 'pointer',
      }}
      css={styles}
      {...mergeProps(rowProps, focusProps, hoverProps)}
      {...stateProps}
    >
      {children}
    </Box>
  );
};
