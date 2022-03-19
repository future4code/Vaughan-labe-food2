import React, { useState } from "react";
import { GlobalContext } from "./GlobalStateContext";
import useRequestData from "../hooks/useRequestData";
import { BASE_URL } from "../constants/URL";

export default function GlobalState(props) {
  const [cart, setCart] = useState([])
  const [productDetails, setProductDetails] = useState([])
  const [activeRestaurantID, setActiveRestaurantID] = useState(0)
  const [paymentMethod, setPaymentMethod] = useState("")
  const [profileData, loading] = useRequestData({}, `${BASE_URL}/profile`)
  const [addressData, addressloading] = useRequestData({}, `${BASE_URL}/profile/address`)
  const [timePopUp, setTimePopUp] = useState(false)

  const data = {
    cart,
    setCart,
    productDetails,
    setProductDetails,
    activeRestaurantID,
    setActiveRestaurantID,
    paymentMethod,
    setPaymentMethod,
    profileData,
    loading,
    addressData, 
    addressloading,
    timePopUp,
    setTimePopUp
  };

  return (
    <GlobalContext.Provider value={data}>
      {props.children}
    </GlobalContext.Provider>
  );
}
