import { TableRow, TableRowProps } from '@mui/material'
import { lineSelectedVariants } from 'assets/config/animationVariants'
import { motion } from 'framer-motion'
import React from 'react'

const FramerTableRow = (props: TableRowProps) => {
  return (
    <TableRow component={motion.div} variants={lineSelectedVariants} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}/>
    
  )
}

export default FramerTableRow