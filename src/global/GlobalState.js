import React, { useState } from "react";
import { GlobalContext } from "./GlobalStateContext";


export default function GlobalState(props) {

    const [cart, setCart] = useState([]);
    const data = {cart, setCart}

    return(
    <GlobalContext.Provider value={data}>  
        {props.children}
    </GlobalContext.Provider>
    )
}