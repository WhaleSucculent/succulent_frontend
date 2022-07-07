import SearchIcon from '@mui/icons-material/Search';
import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import {useState} from 'react';
import useStyles from './LineStripStyle'

function LineStrip() {
   const classes = useStyles();
   const [search, setSearch] = useState('');
  return (
    <div>
      <div className="container">
         <Stack className={classes.gridContainer} direction="row" justifyContent="space-between">
            
            <Typography align='center' variant="h4" gutterBottom>Collection Page</Typography>
           
            <div align="center" className={classes.searchBar} lg={2}>
              
               <input className={classes.searchInput} type="text" name="search" id="search" onChange={(e)=> setSearch(e.target.value)} />
               <SearchIcon className={classes.searchIcon}/>
   
            </div>
        
         </Stack>
         
      </div>
    </div>
  )
}

export default LineStrip