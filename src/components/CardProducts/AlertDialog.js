import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { GlobalContext } from '../../global/GlobalStateContext';
import { NumberInput } from '@mantine/core';
import { DialogBox } from './Styled';

export default function AlertDialog({ idProduct, check, img, name, price, description, shipping, restaurantId, restaurantName, restaurantAddress, deliveryTime }) {
    const [open, setOpen] = useState(false);
    const { cart, setCart, productDetails, setProductDetails, activeRestaurantID, setActiveRestaurantID } = useContext(GlobalContext);
    const [value, setValue] = useState(1);

    const handleClickOpen = () => {
        setOpen(true);
    };


    const handleCloseEmpty = () => {
        setOpen(false);
    }


    const validateRestaurantID = () => {

        if (!activeRestaurantID) {
            return false
        }

        return restaurantId != activeRestaurantID
    }


    const handleClose = () => {

        if (validateRestaurantID()) {
            alert('Finalize a Sua Compra Anterior Primeiro');
            setOpen(false);
            return false
        }

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
                restaurantId: restaurantId,
                restaurantAddress: restaurantAddress,
                restaurantName: restaurantName,
                deliveryTime: deliveryTime
            }
        ]
        setProductDetails(newProductDetails)

        localStorage.setItem("cart", JSON.stringify(newCart));
        localStorage.setItem("productDetails", JSON.stringify(newProductDetails));

        setActiveRestaurantID(restaurantId);

        setOpen(false);

    };


    const removeFromCart = () => {
        const deleteProduct = cart.filter(product => {
            return product.id !== idProduct
        })

        setCart(deleteProduct)

        const deleteProductDetails = productDetails.filter(productDetails => {
            return productDetails.id !== idProduct
        })
        setProductDetails(deleteProductDetails)

        localStorage.setItem("cart", JSON.stringify(deleteProduct));
        localStorage.setItem("productDetails", JSON.stringify(deleteProductDetails));
    }

    return (
        <DialogBox>
            {cart.length && check ?
                <Button variant="outlined" onClick={removeFromCart}>
                    Remover
                </Button> :
                <Button variant="outlined" onClick={handleClickOpen}>
                    Adicionar
                </Button>}

            <Dialog
                open={open}
                onClose={handleCloseEmpty}
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
        </DialogBox>
    );
}