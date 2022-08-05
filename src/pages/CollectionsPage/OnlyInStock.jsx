
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import {useState} from 'react';

export default function OnlyInStock() {
  const[stockCheck, setstockCheck] = useState(true);
  const handleChange = () => {
    setstockCheck(!stockCheck);
    console.log(stockCheck);
  }
  return (
    <FormGroup>
      <Stack direction = "column" alignItems="center" justifyContent="center" sx={{marginButtom:'25px'}}>
        <Typography variant="h5" gutterBottom>Availability</Typography>
        <FormControlLabel control={<Switch defaultChecked onChange={handleChange}/>} label="Only in Stock" />
      </Stack>
    </FormGroup>
  );
}