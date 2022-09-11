import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import ProfileAddressForms from 'components/Form/ProfileAddressForms';
import ProfileSignupForm from 'components/Form/ProfileSignupForm';
import Payments from "pages/UserProfilePage/Payments";


export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Profile" value="1" />
              <Tab label="Address" value="2" />
              <Tab label="Payment" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            {/* <ProfileSignupForm /> */}
          </TabPanel>
          <TabPanel value="2">
            {/* <ProfileAddressForms /> */}
          </TabPanel>
          <TabPanel value="3">
            <Payments/>
          </TabPanel>
        </TabContext>
    </Box>
  );
}
