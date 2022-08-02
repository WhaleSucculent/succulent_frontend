import { Box, Button, Container, Grid, TextField } from '@mui/material'
import React from 'react'

function userEdit() {
  return (
    <div>User Edit/Add Page
    <Container>
    <Grid container  spacing={2}>
          <Grid item xs={15}>
    <TextField id="standard-basic" label="Id" variant="standard" />

        </Grid>
   </Grid>
    <Grid container  spacing={2}>
          <Grid item xs={15}>
    <TextField id="standard-basic" label="First Name" variant="standard" />
  
         </Grid>
   </Grid>
    <Grid container  spacing={2}>
          <Grid item xs={15}>
    <TextField id="standard-basic" label="Last Name" variant="standard" />
  
         </Grid>
   </Grid>
    <Grid container  spacing={2} >
          <Grid item xs={15} >
    <TextField id="standard-basic" label="Email" variant="standard" />
  
         </Grid>
   </Grid>
    <Grid container  spacing={2}>
          <Grid item xs={15}>
            <br></br>
          <TextField
          id="outlined-multiline-static"
          label="Note"
          multiline
          rows={10}
          defaultValue=" Notes "
        />
  
         </Grid>
   </Grid>
   <Grid container  spacing={2}>
   <Grid  item xs={15}>
   <Button variant="contained" >SAVE</Button>
   </Grid>
      </Grid>
    </Container>
</div>
  )
}

export default userEdit