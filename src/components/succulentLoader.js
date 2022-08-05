import { Box, CircularProgress } from '@mui/material'
import { forwardRef } from 'react'


export const SucculentSpinner = () => (
  <CircularProgress
    size="xl"
    sx={{ position: "absolute", left: "50%",top: "50%", backgroundColor: "black" }}
  />
)

export const SucculentContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-dog"
    sx={{ position: "fixed", left: "28%", width: "40vw", height: "100vh", backgroundColor: "white", zIndex: "10" }}
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <SucculentContainer>
      <SucculentSpinner />
    </SucculentContainer>
  )
}

export default Loader
