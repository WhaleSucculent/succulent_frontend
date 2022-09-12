import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography, Button } from "@mui/material";
import Link from './Link';
import OnScrollAnimationBox from './OnScrollAnimationBox';

function Promotion() {

  const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
  };



  const image = {
    height: { xs: 40, md: 50, xl: 70 },
    my: { xs: 2, md: 3, xl: 4 },
  };


  return (
    <Box

      component="section"
      sx={{ display: 'flex', overflow: 'hidden', filter: "opacity(90%)", mt: "2rem" }}
    >

      <Container

        sx={{
          mt: 2,
          mb: 5,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box sx={{

          width: "100%",
          height: "100%",
          zIndex: "-1",
          pointerEvents: "none",
          overflow: "hidden",

        }}>
          <iframe title="vimeo" id="vimeoplayer" src="https://player.vimeo.com/video/130332226?api=1&background=1&autoplay=1&loop=1&autopause=0&muted=1" className="background-video ready" style={{
            width: "100vw",
            height: "56.25vw", /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
            minHeight: "100vh",
            minWidth: "177.77vh", /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }} />
        </Box>
        <Box
          component="img"
          //src="https://images.unsplash.com/photo-1511184150666-9bb7d41a88f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
          alt="curvy lines"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.7,
          }}
        />
        <OnScrollAnimationBox>
          <Typography variant="h4" marked="center" component="h2" sx={{ mb: { xs: 2, md: 6, lg: 12 }, fontWeight: 500 }} fontFamily="monospace">
            {/* fontSize:{xs: "1.5rem", lg: "2rem" } */}
            Keep Going, Keep Growing
          </Typography>
        </OnScrollAnimationBox>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>

                <Box
                  component="img"
                  src="https://cdn-icons-png.flaticon.com/512/1831/1831669.png"
                  alt="suitcase"
                  sx={image}
                />
                <Typography variant="h5" align="center" fontFamily="monospace" sx={{ fontWeight: 500 }}>
                  Over 20 products at our best value.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>

                <Box
                  component="img"
                  src="https://cdn-icons-png.flaticon.com/512/1581/1581725.png"
                  alt="graph"
                  sx={image}
                />
                <OnScrollAnimationBox>
                  <Typography variant="h5" align="center" fontFamily="monospace">
                    Find your new favorite as simple as one click.
                  </Typography>
                </OnScrollAnimationBox>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>

                <Box
                  component="img"
                  src="https://cdn-icons-png.flaticon.com/512/2731/2731865.png"
                  alt="clock"
                  sx={image}
                />
                <Typography variant="h5" align="center" fontFamily="monospace">
                  {'New offers every week. New experiences, new surprises. '}

                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
          <Link to="/register">
            <Button
              color="secondary"
              size='medium'
              variant="gradient"
              type='button'
              sx={{ mt: 4, fontWeight: 600 }}
            >

              Get started
            </Button>
          </Link>
      </Container>
    </Box>
  );
}



export default Promotion;
