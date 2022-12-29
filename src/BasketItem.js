import {ListItem, Typography, IconButton } from "@mui/material";
import Close from '@mui/icons-material/Close'
const BasketItem = ({removeFromOrder, name, id, price, quantity}) => {
    return (
        <ListItem>
            <Typography variant="body1">
                {name} {price}uah x{quantity}
            </Typography>
            
            <IconButton
                onClick={() => removeFromOrder(id)}
            >
                <Close/>
            </IconButton>
        </ListItem>
    );
};

export default BasketItem;