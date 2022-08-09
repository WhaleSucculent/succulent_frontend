import { useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { client } from "graphql/apolloClient";

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems, secondaryListItems } from './listItems';
import { Outlet, useNavigate } from 'react-router-dom';
import { Avatar, Menu, MenuItem, Tooltip } from '@mui/material';
import { useMeQuery } from 'queries/utilQueries';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import Link from 'components/Link';



const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);


function DashboardContent() {
  const [open, setOpen] = useState(true);
  const { data, loading, error } = useMeQuery();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    client.clearStore();
    window.location.reload();
    navigate('/');
  }

  return (

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="absolute" open={open} sx={{ bgcolor: "white" }}>
        <Toolbar
          sx={{
            pr: '24px', // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >

          </Typography>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} >
              <Avatar
                alt={`${data?.firstname} ${data?.lastname}`}
                src={data?.me.avatar}
                fontSize='large'

              />
            </IconButton>

          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}


          >
            {data && data?.me?.role === "admin" && (
              <>
                <MenuItem >
                  <Link to={"/"} color={"secondary.main"} sx={{ display: 'flex', alignItems: "center", justifyItems: "center" }} >
                    <ChangeCircleOutlinedIcon />
                    <Typography textAlign="center">Customer</Typography>
                  </Link>
                </MenuItem>
                <Divider />
              </>)}
            <MenuItem onClick={handleCloseUserMenu}  >
              <Link to={"/admin/home"}>
                <Typography textAlign="center" tex >Dashboard</Typography>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <Link to={"/admin/order"}>
                <Typography textAlign="center">Orders</Typography>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <Link to={"/admin/user"}>
                <Typography textAlign="center">Payment</Typography>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <Link to={"/admin/product"}>
                <Typography textAlign="center">Inventory</Typography>
              </Link>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout}>
              <Typography textAlign="center">Logout</Typography>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} >
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer} sx={{
            color: "#3A85AB",
            ":hover": {
              color: "#8AD8FF"
            }
          }}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav" >
          {mainListItems}
          <Divider sx={{ my: 1, bgcolor: 'primary.dark'}}  />
          {secondaryListItems}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Outlet />

      </Box>
    </Box>

  );
}

export default function Dashboard() {
  return <DashboardContent />;
}