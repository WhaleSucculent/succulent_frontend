import React from 'react'
import { Grid, Typography } from '@mui/material'
import MovingIcon from '@mui/icons-material/Moving';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Chart from './components/Chart';
import Charts from './components/Charts';

const AdminHomePage = () => {
  return (
    <div>

      <Grid container spacing={2}>

        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h4" component="div">
                Revenue
              </Typography>
              <Typography variant="body2" gutterBottom>
                <b>  $2,5562</b>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Compared to last month
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body3">
                1.35<MovingIcon style={{ color: "green" }} />
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h4" component="div">
                Sales
              </Typography>
              <Typography variant="body2" gutterBottom>
                <b>  $2,5562</b>
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Compared to last month
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body3">
                0.162    <TrendingDownIcon style={{ color: "red" }} />
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h4" component="div">
                Profit
              </Typography>
              <Typography variant="body2" gutterBottom>
                <b>  $2,5562</b>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Compared to last month
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body3">
                0.92<TrendingDownIcon style={{ color: "red" }} />
              </Typography>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
      <Chart />
      <br></br>
      <br></br>
      <br></br>
      <Charts />
    </div>
  )
}

export default AdminHomePage