import { TableBody, TableBodyProps } from '@mui/material'
import { staggerVariants } from 'assets/config/animationVariants'
import { motion } from 'framer-motion'
import React from 'react'

const FramerTableBody = (props: TableBodyProps) => {
  return (
    <TableBody component={motion.div} variants={staggerVariants} initial="start" animate="end" />
      
  )
}

export default FramerTableBody