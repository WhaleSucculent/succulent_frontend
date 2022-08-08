import { styled } from "@mui/material/styles";
import {
  AppBar,
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
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
import { useState } from "react";
import './Nav.css';

const pages = ["succulents", "growlights", "soil/rocks", "pots", "information"];
const settings = ["Profile", "Account", "Orders"];

const ResponsiveAppBar = () => {
  const { data, loading, error } = useMeQuery();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { cartTotalQty } = useSelector(state => state.cart);
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();


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


  return (
    <>
      <AppBar position="static" style={{ background: "white" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Link to="/">
              <Typography
                noWrap
                component="a"
                sx={{
                  mr: 2,
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
                <Typography variant="h5">WHALE SUCCULENT</Typography>
              </Typography>
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }} component={motion.div} whileHover={{ scale: 1.2 }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              //   color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                color="black"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <AnimateSharedLayout>
                  <Box style={{ transform: "translateZ(0)" }}>
                    {pages.map((page, i) => (
                      <MenuItem
                        key={page}
                        onClick={handleCloseNavMenu}
                        style={{ color: "black" }}
                      >
                        {/* <motion.div
                          animate
                          key={i}
                          className={`title ${i === selectedMenuItem && "selected"}`}
                          onClick={() => setSelectedMenuItem(i)}
                        >
                          {i === selectedMenuItem && (
                            <motion.div
                              layoutId="underline"
                              className="underline"
                            />
                          )} */}
                          <Link to={`${page}`}>
                            <Typography textAlign="center" >{page}</Typography>
                          </Link>
                        {/* </motion.div> */}
                      </MenuItem>
                    ))}
                  </Box>
                </AnimateSharedLayout>
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "Montserrat",
                fontWeight: 700,
                color: "primary.main",
                textDecoration: "none",
              }}
            >
              Whale
            </Typography>

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
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default ResponsiveAppBar;
