import React, { useContext } from "react";
import { Typography } from "@mui/material";
import { CardContainer } from "./Styled";
import AlertDialog from "./AlertDialog";
import { GlobalContext } from "../../../global/GlobalStateContext";
import checkForNumbers from "../../../function/includeNumber";

export default function CardProducts(props) {
  const { cart, setCart } = useContext(GlobalContext);

  const productQuantity = cart.length && cart
    .map((order) => {
      if (order.id === props.id) {
        return order.quantity;
      } else {
        return false;
      }
    });

  console.log("array:", productQuantity, "tem numero:", productQuantity && checkForNumbers(productQuantity))

  return (
    <CardContainer>
      <img src={props.img} alt={props.name} />
      <div>
        <div id="info-title">
          <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }} color='primary'>{props.name}</Typography>
          {productQuantity && checkForNumbers(productQuantity) ?
            (<div id="quantity-product">
              <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }} color='primary'>{productQuantity === 0 ? null : productQuantity}</Typography>
            </div>) : null
          }
        </div>
        <Typography sx={{ fontSize: '12px' }} color='secondary'>{props.description}</Typography>
        <div>
          <Typography sx={{ fontSize: '16px' }} >R$ {props.price.toFixed(2).replace('.', ',')}</Typography>
          <AlertDialog idProduct={props.id} />
        </div>
      </div>
    </CardContainer>
  )
}