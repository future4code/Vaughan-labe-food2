import React, { useContext } from "react";
import { Typography } from "@mui/material";
import { CardContainer } from "./Styled";
import AlertDialog from "./AlertDialog";
import { GlobalContext } from "../../../global/GlobalStateContext";
import Range from "../../../function/includeNumber";

export default function CardProducts(props) {
  const { cart, setCart } = useContext(GlobalContext);

  const productQuantity = cart.length && cart
  .map((order) => {
    if (order.id === props.id){
      return order.quantity;
    } else {
      return false;
    }
  });
  // console.log("Posição",props.position)
  // console.log("Quantidade", productQuantity);

  const range = new Range(1, 25)
  console.log(range.has(40));

  return (
    <CardContainer>
      <img src={props.img} alt={props.name} />
      <div>
        <div id="info-title">
          <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }} color='primary'>{props.name}</Typography>
          {productQuantity && productQuantity[props.position] === 1 ? 
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