import React, { useContext } from "react";
import { Typography } from "@mui/material";
import {  CardContainer, InfoProductBox } from "./Styled";
import AlertDialog from "./AlertDialog";
import { GlobalContext } from "../../global/GlobalStateContext";
import checkForNumbers from "../../function/includeNumber";

export default function CardProducts(props) {
  const { cart } = useContext(GlobalContext);

  const productQuantity = cart.length && cart
    .map((order) => {
      if (order.id === props.id) {
        return order.quantity;
      } else {
        return false;
      }
    });

  const check = productQuantity && checkForNumbers(productQuantity)

  return (
    <CardContainer>
      <img src={props.img} alt={props.name} />
      <InfoProductBox>
          <Typography sx={{ fontSize: '16px', fontWeight: 'bold', gridArea: '1/1/2/3', lineHeight: "0.9", mt: "4px" }} color='primary'>{props.name}</Typography>
          {productQuantity && checkForNumbers(productQuantity) ?
            (<div id="quantity-product">
              <Typography sx={{ fontSize: '16px', fontWeight: 'bold', gridArea: '1/2/2/3', textAlign: 'center'}} color='primary'>{productQuantity === 0 ? null : productQuantity}</Typography>
            </div>) : null
          }
        <Typography sx={{ fontSize: '12px', gridArea: '2/1/3/4' }} color='secondary'>{props.description}</Typography>
          <Typography sx={{ fontSize: '16px', gridArea: '3/1/4/2' }} >R$ {props.price.toFixed(2).replace('.', ',')}</Typography>
          <AlertDialog
            idProduct={props.id}
            img={props.img}
            name={props.name}
            price={props.price}
            description={props.description}
            check={check}
            shipping={props.shipping}
            restaurantId={props.restaurantId}
            restaurantAddress={props.restaurantAddress}
            restaurantName={props.restaurantName}
            deliveryTime={props.deliveryTime}
          />
      </InfoProductBox>
    </CardContainer>
  )
}