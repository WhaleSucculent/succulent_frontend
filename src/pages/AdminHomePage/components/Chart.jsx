import {  Card, Grid, ListItem, Typography } from '@mui/material'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React from 'react'


function Chart() {
  return (
    <div>Chart

<Grid item xs={15} sm container>
          <Grid item xs container direction="column" spacing={20}>
            <Grid item xs>
    <ListItem>  
    <Grid item xs>
         <Typography gutterBottom variant="h4" component="div" textAlign="center">
       Total Revanue
      </Typography>
      <Typography >
 
       <CircularProgressbar value={69} text={"69%"}/>
       </Typography>
     
      <Typography variant="h6" color="text.secondary" textAlign="center">
      Total sales made today
      </Typography>
      <Grid item xs textAlign="center">
      <Typography sx={10} variant="h3"color="text.secondary">
        $1365
      </Typography>
    </Grid>
      </Grid>
      
      </ListItem>
  </Grid>
  </Grid>

  <Grid item xs container direction="column" spacing={20}>
            <Grid item xs>
    <ListItem>  
          <Grid item xs>
         <Typography gutterBottom variant="h4" component="div" textAlign="center">
       Total Expense
      </Typography>
      <Typography  style={{ display: "flex",
justifyContent: "center",
alignItems: "center" }} >
       <CircularProgressbar value={26} text={"26%"}/>
      </Typography>
      <Typography variant="h6" color="text.secondary" textAlign="center">
      Expense made today
      </Typography>
      <Grid item xs textAlign="center">
      <Typography sx={10} variant="h3"color="text.secondary">
        $865
      </Typography>
    </Grid>
      </Grid>
      </ListItem>
  </Grid>
  </Grid>

 <Grid item xs container direction="column" spacing={20}>
            <Grid item xs>
    <ListItem>  
    <Grid item xs>
         <Typography gutterBottom variant="h4" component="div" textAlign="center">
       Total Revanue
      </Typography>
 
       <CircularProgressbar value={57} text={"57%"}/>
     
      <Typography variant="h6" color="text.secondary" textAlign="center">
      Total sales made today
      </Typography>
      <Grid item xs textAlign="center">
      <Typography sx={10} variant="h3"color="text.secondary">
        $1365
      </Typography>
    </Grid>
      </Grid>
      
      </ListItem>
  </Grid>
  </Grid>

</Grid>




       
    </div>
  )
}

export default Chart