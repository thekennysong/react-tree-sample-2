import React, { Component, CSSProperties } from 'react';
import HeaderCellWrapper from './HeaderCellWrapper';
import { ColumnProps } from './Column';

export type TreeTableHeaderProps = {
  columns: Array<ColumnProps>;
  height?: number;
};

export default class TreeTableHeader extends Component<
  TreeTableHeaderProps,
  {}
> {
  static defaultProps = {
    height: 36,
  };

  render() {
    const { columns, height } = this.props;

    return (
      <div
        className="cp_tree-table_header"
        style={{ ...STYLE_ROW, height: `${height}px` }}
      >
        {columns.map((column: ColumnProps, indexKey) => {
          return (
            <HeaderCellWrapper
              key={indexKey}
              renderHeaderCell={column.renderHeaderCell}
              grow={column.grow}
              basis={column.basis}
            />
          );
        })}
      </div>
    );
  }
}

const STYLE_ROW: CSSProperties = {
  display: 'flex',

  boxSizing: 'border-box',
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  marginBottom: '25px',
};
