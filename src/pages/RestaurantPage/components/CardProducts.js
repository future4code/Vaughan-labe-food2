import React from "react";
import {Typography } from "@mui/material";
import { CardContainer } from "./Styled";

export default function CardProducts(props){
    return(
          <CardContainer> 
            <img src={props.img} alt={props.name}/>
            <div>
                <Typography sx={{fontSize: '16px'}} color='primary'>{props.name}</Typography>
                <Typography sx={{fontSize: '12px'}} color='secondary'>{props.description}</Typography>
                <Typography sx={{fontSize: '16px'}} >R$ {props.price.toFixed(2).replace('.', ',')}</Typography>
            </div>
          </CardContainer>
    )
}