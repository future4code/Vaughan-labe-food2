import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { GlobalContext } from '../../../global/GlobalStateContext';
import { NumberInput } from '@mantine/core';

export default function AlertDialog({ idProduct }) {
    const [open, setOpen] = useState(false);
    const { cart, setCart } = useContext(GlobalContext);
    const [value, setValue] = useState(1);

    // console.log("Value", value);
    // console.log("Cart", cart);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        const newCart = [
            ...cart,
            {
                id: idProduct,
                quantity: value
            }
        ];
        setCart(newCart);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Adicionar
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" sx={{ fontSize: "16px" }}>
                    {"Informe a quantidade desejada"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <NumberInput
                            name={"quantity"}
                            value={value}
                            defaultValue={1}
                            onChange={(val) => setValue(val)}
                            min={1}
                            max={25}
                            size={"lg"}
                            required
                        />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Adicionar ao carrinho
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}