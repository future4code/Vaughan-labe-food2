import React from "react";
import { Typography } from "@mui/material";


export default function RestaurantAddress({productDetails}){

    return(
        <>
         <Typography color={'primary'} sx={{fontWeight: 'bold', m: '8px 16px 2px'}}>{productDetails[0].restaurantName}</Typography>
         <Typography color={'secondary'} sx={{m: '2px 16px'}}>{productDetails[0].restaurantAddress}</Typography>
         <Typography color={'secondary'} sx={{m: '2px 16px 16px'}}>{productDetails[0].deliveryTime} min</Typography>
        </>
    )
}