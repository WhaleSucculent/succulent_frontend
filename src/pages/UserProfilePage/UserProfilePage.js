import {Toolbar, TableContainer, Box, Paper, Table, TableHead, TableBody, TableRow, TableCell, Button} from '@mui/material';

import { GET_ME } from '../../queries/customerQueries';
import { useQuery } from '@apollo/client';
import EditIcon from '@mui/icons-material/Edit';
import Title from 'pages/AdminHomePage/components/Title';
import { motion } from 'framer-motion';
import { lineSelectedVariants, staggerVariants } from 'assets/config/animationVariants';
import { EditAttributesRounded } from '@mui/icons-material';
import EditProfile from './EditProfile';
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
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          pt: { xs: 1, sm: 1, xl: 4 },
          pb: { xs: 1, sm: 1, xl: 4 },
        }}
      >
        <Title>
          Profile
        </Title>
      </Toolbar>
      <TableContainer component={Paper} sx={{ width: '100%' }}>
        <Table sx={{ width: '100%' }} aria-label="a dense table">
          <TableHead>
          </TableHead>
          {data && (
            <TableBody component={motion.div} variants={staggerVariants} initial="start" animate="end">
            <TableRow component={motion.div} variants={lineSelectedVariants} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <TableCell>
                First Name
              </TableCell>
              <TableCell>
                {data.me.firstName}
              </TableCell>
            </TableRow>

            <TableRow component={motion.div} variants={lineSelectedVariants} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <TableCell>
                Last Name
              </TableCell>
              <TableCell>
                {data.me.lastName}
              </TableCell>
            </TableRow>

            <TableRow component={motion.div} variants={lineSelectedVariants} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <TableCell>
                Email
              </TableCell>
              <TableCell>
                {data.me.email}
              </TableCell>
            </TableRow>

            <TableRow component={motion.div} variants={lineSelectedVariants} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <TableCell>
                Phone
              </TableCell>
              <TableCell>
                {data.me.phone}
              </TableCell>
              <TableCell>
                <Button>
                  <EditProfile customer={data.me}/>
                  {/* <EditIcon /> */}
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
          )}

        </Table>
      </TableContainer>

      {/* <AvatarUpload /> */}
      {/* <ImageEditor /> */}
      {/* <MUITab /> */}
    </Box >
  );
}
