import { Typography } from "@mui/material";
import React, { useState } from "react";
import { TotalContainer } from "./Styled";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { GlobalContext } from "../../../global/GlobalStateContext";
import { useContext } from "react";
import { placeOrder } from "../../../services/Order";
import { useNavigate } from "react-router-dom";
import { PaymentInfoBox } from './Styled'

export default function CartWithProducts() {
  const { cart, productDetails, paymentMethod, setPaymentMethod } = useContext(GlobalContext);
  const [money, setMoney] = useState(false);
  const [credit, setCredit] = useState(false);
  const navigate = useNavigate()
  const total = () => {
    let sum = 0;
    for (let product of productDetails) {
      sum += product.price * product.quantity;
    }
    return sum;
  };

  const shipping = productDetails[0].shipping;


  const clickCheckedMoney = () => {
    setMoney(true)
    setCredit(false)
    setPaymentMethod('money')
  }

  const clickCheckedCredit = () => {
    setMoney(false)
    setCredit(true)
    setPaymentMethod('creditcard')
  }


  return (
    <PaymentInfoBox>
      <Typography sx={{ alignSelf: "flex-end" }}>
        Frete: R$ {productDetails[0] && shipping.toFixed(2).replace(".", ",")}
      </Typography>
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
        <FormControlLabel control={<Checkbox />} checked={money} label="Dinheiro" onClick={clickCheckedMoney} />
        <FormControlLabel control={<Checkbox />} checked={credit} label="Cartão de Crédito" onClick={clickCheckedCredit} />
      </FormGroup>

      <Button sx={{ mt: "5px", mb: '100px' }} variant="contained" color="primary" onClick={() => placeOrder(productDetails[0].restaurantId, cart, paymentMethod, navigate)}>
        Confirmar
      </Button>
    </PaymentInfoBox>
  );
}
