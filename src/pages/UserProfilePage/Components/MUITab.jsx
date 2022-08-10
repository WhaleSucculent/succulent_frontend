import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Formik } from 'formik';
import { deliveryFormSchema } from 'pages/CheckoutPage/components/delivery/delivery-form.schema';
import Delivery from 'pages/CheckoutPage/components/delivery/delivery';
import Checkout from 'pages/CheckoutPage/CheckoutPage';
import { Provider } from 'react-redux';
import { rootStore } from 'store/root.store';
import ProfileAddressForms from 'components/Form/ProfileAddressForms';
import { ProfileAddressForm } from 'components/Form/profileaddress-form';
import ProfileSignupForm from 'components/Form/ProfileSignupForm';
import ProfilePaymentForm from 'components/Form/ProfilePaymentForm';
import Payments from "pages/UserProfilePage/Payments";


export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Provider store={rootStore}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Profile" value="1" />
              <Tab label="Address" value="2" />
              <Tab label="Payment" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <ProfileSignupForm />
          </TabPanel>
          <TabPanel value="2">
            <ProfileAddressForms />
          </TabPanel>
          <TabPanel value="3">
            <Payments/>
          </TabPanel>
        </TabContext>
      </Provider>
    </Box>
  );
}
