import * as React from "react";
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
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const pages = ["succulents", "growlights", "soil/rocks", "pots", "information"];
const settings = ["Profile", "Account", "Orders"];



const ResponsiveAppBar = () => {
  const { data, loading, error } = useMeQuery();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { cartTotalQty } = useSelector(state => state.cart);

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
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/1808/1808120.png"
                width={55}
                height={55}
                alt={"Whale Succulent Logo"}
              />
              <p>Whale Succulent</p>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={handleCloseNavMenu}
                    style={{ color: "black" }}
                  >
                    <Link to={`${page}`} underline={"hover"}>
                      <Typography textAlign="center">{page}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
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
                  <Link to={`${page}`} underline={"hover"} color={"black"}>
                    {page}
                  </Link>
                </Button>
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
            <Box>
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
                  <Link to={"cart"} underline={"hover"} >
                    <ShoppingCartOutlinedIcon 
                    fontSize="large"/>
                  </Link>
                </Badge>
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              {console.log(data)}
              {console.log(data.email)}
              {!data?.me ? (<Link to={"login"} underline={"hover"} color={"black"}>
                Sign In
              </Link>) : (<Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} >
                  <Avatar
                    alt={`${data.firstname} ${data.lastname}`}
                    src={data.avatar}
                    fontSize='large'
                  
                  />
                </IconButton>
              </Tooltip>)}

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
                {console.log(location)}
                {console.log(data.me)}
                {data && data?.me?.role === "admin" && (
                  <>
                    <MenuItem >
                      <Link to={"admin/product"} underline={"hover"} color={"black"} sx={{ display: 'flex', alignItems: "center", justifyItems: "center" }} >
                        <ChangeCircleOutlinedIcon />
                        <Typography textAlign="center"  >Admin</Typography>
                      </Link>
                    </MenuItem>
                    <Divider />
                  </>)}

                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Link to={`${setting}`.toLowerCase()} underline={"hover"}>
                      <Typography textAlign="center">{setting}</Typography>
                    </Link>
                  </MenuItem>
                ))}
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
