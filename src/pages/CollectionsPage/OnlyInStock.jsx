
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function OnlyInStock() {
  return (
    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label="Only in Stock" />
      
    </FormGroup>
  );
}