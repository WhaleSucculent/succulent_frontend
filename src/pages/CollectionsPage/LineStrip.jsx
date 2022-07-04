import SearchIcon from '@mui/icons-material/Search';
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import {useState} from 'react';

function LineStrip() {
   var lineStyle = {
      height:'2vw',
      backgroundColor:'rgba(130,170,182,255)',
      padding:'2em'
   }
   var gridContainer = {
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
   }
   var searchInput ={
      border:'none',
      padding:'.5em .3em',
      backgroundColor:'rgba(130,170,182,0)',
   }
   var searchBar ={
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#15588c',
     width:'100%',
      borderRadius:'5px',
      border:'rgba(130,170,182,0.5) solid 1px'
   }

   const [search, setSearch] = useState('');
  return (
    <div>
      <div style={lineStyle} className="container">
         <Grid style = {gridContainer} className='grid-container' container lg={12}>
            <Grid item lg={9}>
            <Typography align='center' variant="h4" gutterBottom>Collection Page</Typography>
               </Grid>
               <Grid  item lg={3}>
                  <div style={searchBar} className="searchBar">
                  <input style={searchInput} className="searchInput" type="text" name="search" id="search" onChange={(e)=> setSearch(e.target.value)} />
                  <SearchIcon className="searchIcon"/>
                  </div>
               
               </Grid>
        
         </Grid>
         
      </div>
    </div>
  )
}

export default LineStrip