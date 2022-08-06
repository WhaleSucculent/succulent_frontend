import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import BusinessIcon from '@mui/icons-material/Business';
import PaymentIcon from '@mui/icons-material/Payment';
import Link from 'components/Link';
import { Outlet } from 'react-router-dom';
const drawerWidth = 240;

function UserSidebar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem >
          <Link to={'/profile/myprofile'} color="inherit" underline='hover'>
            <ListItemButton >
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </Link>
        </ListItem>
        <Divider />
        <ListItem >
          <Link to={'/profile/myorders'} color="inherit" underline='hover'>
            <ListItemButton>
              <ListItemIcon>
                <ShoppingBasketIcon/>
              </ListItemIcon>
              <ListItemText primary="My Orders">
                <Link href="/profile/myorders" underline="none">
                {'underline="none"'}
              </Link></ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
        <Divider />
        <ListItem >
          <Link to={'/admin/product'} color="inherit" underline='hover'>
            <ListItemButton>
              <ListItemIcon>
              <BusinessIcon/>
              </ListItemIcon>
              <ListItemText primary="Address" />
            </ListItemButton>
          </Link>
        </ListItem>
        <Divider />
        <ListItem >
          <Link to={'/admin/order'} color="inherit" underline='hover'>
            <ListItemButton>
              <ListItemIcon>
              <PaymentIcon/>
              </ListItemIcon>
              <ListItemText primary="Payment" />
            </ListItemButton>
          </Link>
        </ListItem>
        <Divider />
        <Divider />
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        {/* <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
            My Profile
            </Typography>
          </Toolbar>
        </AppBar> */}
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar>
              <Outlet/>
          </Toolbar>
        </Box>
      </Box>
    </>
  );
}

// /* Sidebar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// }; */

export default UserSidebar;
