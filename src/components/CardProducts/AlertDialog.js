import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { GlobalContext } from '../../global/GlobalStateContext';
import { NumberInput } from '@mantine/core';

export default function AlertDialog({ idProduct, check, img, name, price, description, shipping, restaurantId }) {
    const [open, setOpen] = useState(false);
    const { cart, setCart, productDetails, setProductDetails } = useContext(GlobalContext);
    const [value, setValue] = useState(1);

    // console.log(JSON.parse(localStorage.getItem('cart')))

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
        const newProductDetails = [
            ...productDetails,
            {
                id: idProduct,
                quantity: value,
                name: name,
                price: price,
                description: description,
                image: img,
                shipping: shipping,
                restaurantId: restaurantId
            }
        ]
        setProductDetails(newProductDetails)
        // localStorage.setItem('cart', JSON.stringify(productDetails))
    };
    const removeFromCart = () => {
        const deleteProduct = cart.filter(product => {
            return product.id !== idProduct
        })
        setCart(deleteProduct)
        const deleteProductDetails = cart.filter(productDetails => {
            return productDetails.id !== idProduct
        })
        setProductDetails(deleteProductDetails)
    }

    return (
        <div>
            {cart.length && check ?
                <Button variant="outlined" onClick={removeFromCart}>
                    Remover
                </Button> :
                <Button variant="outlined" onClick={handleClickOpen}>
                    Adicionar
                </Button>}

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
        </div >
    );
}