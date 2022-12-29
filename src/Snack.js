import { Alert, Snackbar } from '@mui/material';
import React from 'react';
const color = '#DB9200'
function Snack({isOpen, handleClose }) {
    return (
        <Snackbar
            open={isOpen}
            close={handleClose}
            autoHideDuration={3000}
        >
            <Alert color={color} severity="success">
                Товар успешно добавлен в корзину!
            </Alert> 
        </Snackbar>
    );
}

export default Snack;