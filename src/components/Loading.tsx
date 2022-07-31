import { Box, CircularProgress, CircularProgressProps } from "@mui/material";
import React from "react";

const Loading = (props: CircularProgressProps) => {
  return <Box sx={{ display: 'flex', alignItems: 'center', alignContent: 'center', position: 'absolute' }} {...props} ><CircularProgress /></Box>;
};

export default Loading;
