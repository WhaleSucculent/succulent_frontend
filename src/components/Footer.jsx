import { Box, Container, Grid, Link } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Help </Box>
            <Box>
              <Link href="/" color="inherit">
                Contact Us
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Follow Us Us
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
