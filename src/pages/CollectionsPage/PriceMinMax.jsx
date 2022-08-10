import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function PriceMinMax({priceMin, priceMax, priceSubmit, priceMaxSet, priceMinSet}) {
   return (
     <div>
       <Typography variant="body" gutterBottom>
          Price
       </Typography>
       <Stack direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}>
        <form onSubmit={priceSubmit}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <input placeholder="Min" type="text"  name="min" value={priceMin} onChange={(e) => priceMinSet(e.target.value)}  id="min" style={{padding:'10px 20px', borderRadius:'5px', borderColor:'#6DC9F7'}} />
          <Typography variant="body" gutterBottom margin="normal" sx={{marginTop:'10px', marginBottom:'10px'}}>
            to
          </Typography>
          <input type="text" placeholder="Max" name="max" id="max" value={priceMax} onChange={(e) => priceMaxSet(e.target.value)} style={{padding:'10px 20px', borderRadius:'5px', borderColor:'#6DC9F7'}} />
          <Button sx={{backgroundColor:'#ffb2cc', marginTop:'15px'}} variant="contained" type="submit"  color="primary">Filter</Button>
          </Stack>
        </form>
       </Stack>
     </div>
   )
 }
 
 export default PriceMinMax