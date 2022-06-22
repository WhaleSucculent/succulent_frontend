import { Box, Container, Grid, Link } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box bgcolor="#F5F5F5" color="black">
      <Container maxWidth="lg">
        <Grid container padding={10}>
          <Grid item xs={12} sm={4}>
            <Box>
              <Link href="/" color="inherit" fontWeight="bold" fontSize="25px">
                Contact Us
              </Link>
            </Box>
            <Box>
              <p> 774 Gordon Baker Rd</p>
              <p>North York, ON M2H 3B4</p>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box>
              <Link href="/" color="inherit" fontWeight="bold" fontSize="25px">
                Store Hours
              </Link>
            </Box>
            <Box>
              <p>Mon-Friday : 1pm-6pm</p>
              <p>Sat : 2pm-6pm</p>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box>
              <Link href="/" color="inherit" fontWeight="bold" fontSize="25px">
                Follow Us
              </Link>
            </Box>
            <Box>
              <p>Instagram</p>
              <p>WeChat</p>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
