import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { Colors } from '../pages/ProductDetailPage/Themes';
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import { GraphicEq } from "@mui/icons-material";
import Link from "./Link";


function Footer() {
  return (
    <Box bgcolor={Colors.primary} color="black">
      <Container>
        <Grid container padding={4}>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
            <Link to="/shipping">Shipping & Return</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/term">Terms and Conditions</Link>
            <Link to="/contact">Contact</Link>
          </Box>
        </Grid>
        <Box pt={{ xs: 3, sm: 1 }} pb={{ xs: 5, sm: 5 }}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start' }}>
            Whale Succulent &reg; 2022
          </div>

        </Box>
      </Container>
    </Box>
  );
}

export default Footer;