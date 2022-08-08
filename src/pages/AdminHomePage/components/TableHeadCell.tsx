import { TableCell, TableCellProps } from '@mui/material';
import React from 'react'

const TableHeadCell = (props: TableCellProps) => {
  return <TableCell sx={{ fontWeight: 600 }} {...props}  />
}

export default TableHeadCell