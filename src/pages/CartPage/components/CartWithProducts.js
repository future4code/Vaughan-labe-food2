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


    const total = () => {
        let sum = 0
        for (let product of productDetails) {
            sum += product.price * product.quantity
        }
        return sum
    }

    const shipping = productDetails[0].shipping;

    return (
        <PaymentInfoBox>
            {/* {selectedProducts} */}
            <Typography sx={{ alignSelf: "flex-end" }}>Frete: R$ {productDetails[0] && shipping.toFixed(2).replace(".", ",")}</Typography>
            <TotalContainer>
                <Typography>Total:</Typography>
                <Typography color="primary" sx={{ fontWeight: "bold" }}>
                    R$ {(total() + shipping).toFixed(2).replace(".", ",")}
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