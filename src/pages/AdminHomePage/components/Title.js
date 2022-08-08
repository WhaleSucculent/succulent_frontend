import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

function Title(props) {
  return (
    <Box sx={{
      borderBottom: "0.5rem solid #ffb2cc", width: 'fit-content',
      ml: { xs: 1 },
      mr: { xs: 1, sm: 1 },
      mt: { xs: 1 },
      mb: { xs: 1, sm: 1, xl: 2 },
    }} >
      <Typography component="h2" variant="h4" color="primary.dark" gutterBottom
        sx={{
          width: "fit-content",
          fontWeight: {xs: 300, md: 500, xl: 800}, 
          pt: { xs: 1, sm: 1, xl: 3 },
          fontSize: {xs: '1rem', md: '1.5rem', xl: '2rem'},
        }} >
        {props.children}
      </Typography>
    </Box>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;