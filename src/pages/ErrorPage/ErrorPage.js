import { Box, Container } from '@mui/material'
import { SucculentContainer } from 'components/succulentLoader'
import SucculentModel from 'components/SucculentModel'
import React from 'react'
import { ReactComponent as PageNotFound } from '../../assets/images/error.svg'

const ErrorPage = () => {
  return (
    <Container sx={{ position: "fixed", width: "100vw", height: "100vh", backgroundColor: "white" }} >
      <SucculentModel/>
      <Box sx={{ position: "fixed", bottom: "0px", width: "100vw", height: "40vh", zIndex: "120" }}>
        <PageNotFound />
      </Box>
    </Container>
  )
}

export default ErrorPage