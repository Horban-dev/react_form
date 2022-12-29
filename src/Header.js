import React from 'react';
import {AppBar, Badge, IconButton, Toolbar, Typography} from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
function Header({handleCart, orderLength}) {
    return (
        <AppBar position="static" onClick={handleCart}>
            <Toolbar>
                <Typography
                variant="h5"
                component="span"
                sx={{flexGrow: 1}}>
                    My Shop
                </Typography>
                <IconButton color="inherit">
                    <Badge color="secondary" badgeContent={orderLength}/>
                    <ShoppingBasketIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Header;