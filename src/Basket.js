import React from 'react';
import Drawer from '@mui/material/Drawer';
import { Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import BasketItem from './BasketItem';

function Basket(props) {
    const {cartOpen, closeCart, order, removeFromOrder} = props
    return (
        <Drawer anchor='right' open={cartOpen} onClose={closeCart}>
                <List sx={{width: '400px'}}>
                    <ListItem>
                        <ListItemIcon>
                            <ShoppingBasket/>
                        </ListItemIcon>
                        <ListItemText primary='Kорзина'/>
                    </ListItem>
                </List>
                <Divider/>
                {!order.length ? 
                    (<ListItem>Kорзина пуста</ListItem>) : 
                    <>
                    {order.map((item) => 
                        
                            <BasketItem key={item.name} removeFromOrder={removeFromOrder} {...item}/>
                        )}
                        <Divider/>
                        <ListItem>
                            <Typography sx={{fontWeight: '700'}}>
                            Общая стоимость:{' '}
                                {order.reduce((acc, item) => {
                                    return acc + item.price * item.quantity;
                                }, 0)}{' '}
                                uah.
                            </Typography>
                        </ListItem>
                    </>
                }
        </Drawer>
    );
}

export default Basket;