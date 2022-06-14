import { AppBar, Box, Toolbar, Menu, MenuItem, Typography, Badge,InputBase, Avatar } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import {Spa, Mail, Notifications} from '@mui/icons-material';
import { useState } from 'react';

const StyledToolBar = styled(Toolbar)({
    display:'flex',
    justifyContent:"space-between",
})

const Search = styled("div")(({theme}) =>({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius:theme.shape.borderRadius,
    width:"40%",

}))

const IconsBox = styled(Box)(({theme})=>({
    display:"none",
    gap:"20px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
}))

const UserBox = styled(Box)(({theme})=>({
    display:"flex",
    gap:"10px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    },
    "&:hover":{
        cursor:"pointer"
    }
}))

const AvatarBox = styled(Box)(({theme})=>({
    backgroundColor:"white",
    borderRadius:"50%",
    display:"flex",
    justifyContent:"center",
    "&:hover":{
        cursor:"pointer"
    }
}))
const Navbar = () => {
    
    const [open,setOpen] = useState(false)

  return (
    <>
        <AppBar position="sticky">
            <StyledToolBar>
                <Typography sx={{
                    display:{
                        xs:"none",
                        sm:"block",
                    }
                }} variant="h6">
                    Media
                </Typography>
                <Spa p={2} sx={{
                    display:{
                        xs:"block",
                        sm:"none",
                    }
                }}/>
                <Search><InputBase placeholder="Search ..." /></Search>
                <IconsBox>
                    <Badge badgeContent={4} color="error">
                        <Mail  />
                    </Badge>

                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <AvatarBox onClick={e=>setOpen(true)}>
                        <Avatar src="./images/hacker.png" />
                    </AvatarBox>
                </IconsBox>
                <UserBox>
                    <AvatarBox onClick={e=>setOpen(true)}>
                        <Avatar src="./images/hacker.png" />
                    </AvatarBox>
                    <Typography color="white" variant="span">Hacker</Typography>
                </UserBox>
            </StyledToolBar>
            <Menu 
            open={open}
            onClose = {e=>setOpen(false)}
            anchorOrigin = {{
                verticval:"top",
                horizontal:"right",
            }}
            transformOrigin={{
                vertical:"top",
                horizontal:"right",
            }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My Account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    </>
  )
}
 
export default Navbar