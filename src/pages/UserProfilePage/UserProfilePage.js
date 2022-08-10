import Box from '@mui/material/Box';

import { GET_ME } from '../../queries/customerQueries';
import { useQuery } from '@apollo/client';
import MUITab from './Components/MUITab';


import AvatarUpload from 'components/AvatarUpload'
import ImageEditor from 'components/ImageEditor'
import { CssBaseline, Grid } from '@mui/material';
/* function createData(OrderNumber, Date, ShippingAddress, Total, View) {
  return { OrderNumber, Date, ShippingAddress, Total, View};
} */
//dummy data
/* const rows = [
  createData('Email', $email),
  // createData('Address', 'passwd', <Button variant="contained" sx={ { borderRadius: 28, backgroundColor:'#ffb2cc' } }>View</Button>)

]; */

export default function UserProfilePage() {
  const { loading, error, data } = useQuery(GET_ME);
  console.log(data);

  return (
    <Box>

      <AvatarUpload />
      <ImageEditor />
      <MUITab />
    </Box >
  );
}
