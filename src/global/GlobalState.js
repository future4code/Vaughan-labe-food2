import React, { useState } from "react";
import { GlobalContext } from "./GlobalStateContext";


export const GlobalState = (props) => {

    return(
    <GlobalContext.Provider>  
        {props.children}
    </GlobalContext.Provider>
    )
}