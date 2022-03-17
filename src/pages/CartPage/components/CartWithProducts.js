import { Typography } from "@mui/material";
import React from "react";
import { TotalContainer } from "./Styled";
import styled from "styled-components";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { GlobalContext } from "../../../global/GlobalStateContext";
import { useContext } from "react";
import CardProducts from "../../../components/CardProducts/CardProducts";

const PaymentInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export default function CartWithProducts() {
    const { cart, productDetails } = useContext(GlobalContext);
    console.log(productDetails)

    const shippingTotal = () => {
        let sum = 0
        let arr = []
        for (let i = 0; i < productDetails.length; i++) {
            if (!arr.includes(Number(productDetails[i].restaurantId))) {
                sum += productDetails[i].shipping
                arr.push(Number(productDetails[i].restaurantId))
            }
        }
        return sum
    }

    const total = () => {
        let sum = 0
        for (let product of productDetails) {
            sum += product.price * product.quantity
        }
        return sum
    }

    // const selectedProducts = productDetails.length && productDetails.map((item => {
    //     return (
    //         <CardProducts
    //             key={item.id}
    //             img={item.image}
    //             name={item.name}
    //             price={item.price}
    //             description={item.description}
    //             id={item.id}
    //         />
    //     )
    // }))

    return (
        <PaymentInfoBox>
            {/* {selectedProducts} */}
            <Typography sx={{ alignSelf: "flex-end" }}>Frete: R$ {shippingTotal().toFixed(2).replace(".", ",")}</Typography>
            <TotalContainer>
                <Typography>Total:</Typography>
                <Typography color="primary" sx={{ fontWeight: "bold" }}>
                    R$ {(total() + shippingTotal()).toFixed(2).replace(".", ",")}
                </Typography>
            </TotalContainer>
            <Typography sx={{ pb: "8px", borderBottom: "1px solid black" }}>
                Forma de pagamento
            </Typography>
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Dinheiro" />
                <FormControlLabel
                    control={<Checkbox />}
                    label="Cartão de Crédito"
                />
            </FormGroup>

            <Button sx={{ mt: "5px" }} variant="contained" color="primary">
                Confirmar
            </Button>
        </PaymentInfoBox>
    );
}