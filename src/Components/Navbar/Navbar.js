// This component is for the appbar / navbar of our page from material ui
import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, styled, Toolbar, Tooltip, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const pages = ['Products', 'Pricing', 'Blog'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    const [anchorElNav, setAnchorElNav] = useState(null)
    const [anchorElUser, setAnchorElUser] = useState(null);
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
    // customizing mui appbar to apply styles according to the3 design
    const CustomAppbar = styled(AppBar)(({ theme }) => ({
        width: "100%", backgroundColor: "white", color: "black", boxShadow: 0.1
    }));
    return (
        <div>
            <CustomAppbar position="static">
                <Container maxWidth="xxl"  >
                    <Toolbar disableGutters >
                        {/* pc version */}
                        <Box

                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, flexGrow: 0.5 }}
                        >
                            LOGO
                        </Box>
                        {/* movile version */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        {/* mobile version */}
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            LOGO
                        </Typography>
                        {/* pc version */}
                        {/* here react router dom will be used to navigate */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                            <Typography component="div" variant='h6' sx={{ ml: 4, fontWeight: 'light' }}>
                                <Link to="/home" style={{ textDecoration: "none", color: "black" }}>HOME</Link>
                            </Typography>
                            <Typography component="div" variant='h6' sx={{ ml: 4, fontWeight: 'light' }}>
                                <Link to="/about" style={{ textDecoration: "none", color: "black" }}>ABOUT</Link>
                            </Typography>
                            <Typography component="div" variant='h6' sx={{ ml: 4, fontWeight: 'light' }}>
                                <Link to="/contact" style={{ textDecoration: "none", color: "black" }}>CONTACT</Link>
                            </Typography>
                            <Typography component="div" variant='h6' sx={{ ml: 4, fontWeight: 'light' }}>
                                <Link to="/write" style={{ textDecoration: "none", color: "black" }}>WRITE</Link>
                            </Typography>
                            {/* LOGIN/LOGOUT WILL BE SHOWN ACCORDING TO THE USER'S USING STATUS */}
                            {/* THAT MEANS IF THE USE IS NOT LOGGED IN IT WILL SHOW THE LOGIN OPTION , ELSE IT WILL SHOW LOGOUT OPTION */}
                            <Typography component="div" variant='h6' sx={{ ml: 4, fontWeight: 'light' }}>
                                <Link to="/login" style={{ textDecoration: "none", color: "black" }}>LOGIN</Link>
                            </Typography>
                        </Box>

                        <Box sx={{ flexGrow: 0.5 }}>


                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />



                        </Box>
                    </Toolbar>
                </Container>
            </CustomAppbar>
        </div>
    );
};
export default Navbar;