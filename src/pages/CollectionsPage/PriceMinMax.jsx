import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
function PriceMinMax() {
   return (
     <div>
       <Typography variant="body" gutterBottom>
          Price
       </Typography>
       <Stack direction="column">
         <input placeholder="Min" type="text" name="min" id="min" style={{padding:'10px 20px', borderRadius:'5px', borderColor:'#6DC9F7'}}/>
         <Typography variant="body" gutterBottom margin="normal" sx={{marginTop:'10px', marginBottom:'10px'}}>
          to
       </Typography>
       <input type="text" placeholder="Max" name="max" id="max" style={{padding:'10px 20px', borderRadius:'5px', borderColor:'#6DC9F7'}}/>
       <Button variant="contained" color="primary" sx={{marginTop:'15px'}}>Filter</Button>
       </Stack>
     </div>
   )
 }
 
 export default PriceMinMax