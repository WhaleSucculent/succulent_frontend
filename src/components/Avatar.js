import { Button } from '@mui/material'
import { Box } from '@mui/system'
import { motion } from 'framer-motion'
import React from 'react'
import Link from './Link'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';


const Avatar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
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

        {!data?.me ? (<Link to={"login"} color={"black"}>
          <LoginOutlinedIcon fontSize="large" />

        </Link>) : (<Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} >
            <Avatar
              alt={`${data.firstname} ${data.lastname}`}
              src={data.avatar}
              fontSize='large'

            />
          </IconButton>
        </Tooltip>)}
      </Button>
    </Box>
  )
}

export default Avatar