import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';
function PriceMinMax() {
   return (
     <div>
       <Typography variant="h5" gutterBottom>
          Price
       </Typography>
       <Stack direction="row">
         <input type="text" name="min" id="min" />
         <Typography variant="body" gutterBottom>
          to
       </Typography>
       <input type="text" name="max" id="max" />
       </Stack>
     </div>
   )
 }
 
 export default PriceMinMax