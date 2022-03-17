import React, { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalStateContext";


export default function GlobalState(props) {

    const [cart, setCart] = useState([]);
    const [productDetails, setProductDetails] = useState([])

    const data = { cart, setCart, productDetails, setProductDetails }

    return (
        <GlobalContext.Provider value={data}>
            {props.children}
        </GlobalContext.Provider>
    )
}