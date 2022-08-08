import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

function Title(props) {
  return (
    <Box sx={{ borderBottom: "0.5rem solid #ffb2cc"  }} >
      <Typography component="h2" variant="h4" color="primary.dark" gutterBottom sx={{fontWeight: 800}} >
        {props.children}
      </Typography>
    </Box>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;