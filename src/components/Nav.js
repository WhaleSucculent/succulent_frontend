import { styled } from "@mui/material/styles";
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  InputBase,
  Badge,
  Divider,
  Drawer,
  List,
  CssBaseline,
  AppBar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from "react-redux";
import { logoimg } from "../assets/images/whale.png"
import Link from "./Link";
import { useMeQuery } from "queries/utilQueries";
import Loading from "./Loading";
import { useLocation, useNavigate } from "react-router-dom";
import { client } from "graphql/apolloClient";
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { AnimateSharedLayout, motion } from "framer-motion";
import React, { useState } from "react";
import './Nav.css';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


import LightbulbIcon from '@mui/icons-material/Lightbulb';
import GrassIcon from '@mui/icons-material/Grass';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LandscapeIcon from '@mui/icons-material/Landscape';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import { useTheme } from "@emotion/react";

const pages = ["succulents", "growlights", "soil/rocks", "pots", "contact"];
const pageIcons = [<GrassIcon />, <LightbulbIcon />, <LandscapeIcon />, <RiceBowlIcon />, <ContactPageIcon />];
const settings = ["Profile", "Account", "Orders"];
const drawerWidth = 240;


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const ResponsiveAppBar = (props) => {
  const { data, loading, error } = useMeQuery();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { cartTotalQty } = useSelector(state => state.cart);
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);
  const { window } = props;
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    client.clearStore();
    window.location.reload();
    navigate('/');
  }
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    justifyContent: "space-between",

    backgroundColor: "#f0f0f0",
    color: "black",

    marginRight: 10,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "black",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      //   border: 'solid 1px',
      borderRadius: "5px",

      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));


  if (loading) return <div>Lo</div>
  if (error) return <div>Lo</div>


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="relative" style={{ background: "white", zIndex: 90 }}>
        <Container maxWidth="xl">
          <Toolbar disableGuters>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Link to="/">
              <Typography
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  ml: 2,
                  pl: 2,
                  display: { xs: "none", md: "flex", alignItems: "center" },
                  color: "primary.main",
                }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1808/1808120.png"
                  width={55}
                  height={55}
                  alt={"Whale Succulent Logo"}
                />
                <Typography sx={{fontSize: "1.5rem"}}>WHALE SUCCULENT</Typography>
              </Typography>
            </Link>

            {/* Hambuger Menu show when < md */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }} component={motion.div} whileHover={{ scale: 1.2 }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleDrawerOpen}
              //   color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <Typography
              variant={{ md: "h5" }}
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "none", sm: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "Montserrat",
                fontWeight: 700,
                color: "primary.main",
                textDecoration: "none",
              }}
            >
              Whale
            </Typography>

            {/* Top Menu when md */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} >
              {pages.map((page) => (
                <Box component={motion.div} whileHover={{ scale: 1.2 }}>
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      color: "#000000",
                    }}
                  >
                    <Link to={`${page}`} color={"text.primary"}>
                      {page}
                    </Link>
                  </Button>
                </Box>
              ))}
            </Box>

            {/* Seach Box */}
            <Box>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>

            {/* Shopping Cart button */}
            <Box component={motion.div} whileHover={{ scale: 1.2 }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  color: "#000000",
                }}
              >
                <Badge badgeContent={cartTotalQty} color="error">
                  <Link to={"cart"} >
                    <ShoppingCartOutlinedIcon fontSize="large" />
                  </Link>
                </Badge>
              </Button>
            </Box>

            {/* Avatar and The Menu under it */}
            <Box sx={{ flexGrow: 0 }}>
              <Box component={motion.div} whileHover={{ scale: 1.2 }}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    color: "#000000",
                  }}
                >
                  {!data?.me ? (<Link to={"login"}>
                    <LoginOutlinedIcon fontSize="large" />

                  </Link>) : (<Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} >
                      <Avatar
                        alt={`${data?.me.firstname} ${data?.me.lastname}`}
                        src={data?.me.avatar}
                        fontSize='large'

                      />
                    </IconButton>
                  </Tooltip>)}
                </Button>
              </Box>

              <Box sx={{ flexGrow: 0 }}>

                <Menu
                  sx={{ mt: "50px" }}
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
                        <Link to={"admin/product"} color={"primary"} sx={{ display: 'flex', alignItems: "center", justifyItems: "center" }} >
                          <ChangeCircleOutlinedIcon />
                          <Typography textAlign="center"  >Admin</Typography>
                        </Link>
                      </MenuItem>
                      <Divider />
                    </>)}
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link to={"profile/myprofile"}>
                      <Typography textAlign="center">Profile</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link to={"profile/myorders"}>
                      <Typography textAlign="center">Orders</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link to={"profile/payments"}>
                      <Typography textAlign="center">Payment</Typography>
                    </Link>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleLogout}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: 'background.paper',
          },
          zIndex: 99,
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {pages.map((text, index) => (
            <Link to={`${text}`}>
              <ListItem key={text} disablePadding>
                <ListItemButton sx={{
                  '& .MuiListItemIcon-root': {
                    color: "black",
                    ":hover": {
                      color: "#3A85AB",
                    }
                  
                  }
                }}>
                  <ListItemIcon>
                    {pageIcons[index]}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{
                    color: "black", ':hover' : { color: "#3A85AB" }
                  }} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
export default ResponsiveAppBar;
