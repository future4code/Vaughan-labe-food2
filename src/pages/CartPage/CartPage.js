import React, { useContext, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/URL";
import { Typography } from "@mui/material";
import { GlobalContext } from "../../global/GlobalStateContext";
import EmptyCart from "./components/EmptyCart";
import CartWithProducts from "./components/CartWithProducts";
import CardProducts from "../../components/CardProducts/CardProducts";
import RestaurantAddress from "./components/RestaurantAddress";
import useProtectedPage from "../../hooks/useProtectedPage";
import { CartContainer, AddressContainer } from "./Styled";

export default function CartPage() {
  useProtectedPage()

  const [data, loading] = useRequestData({}, `${BASE_URL}/profile/address`);
  const { cart, setCart, productDetails, setProductDetails} = useContext(GlobalContext);

  useEffect(()=>{

    if(localStorage.getItem("cart")){        
      
      setCart(JSON.parse(localStorage.getItem("cart")));
      setProductDetails(JSON.parse(localStorage.getItem("productDetails")));
      
    }
  
    
  },[])

  const selectedProducts = productDetails.length && productDetails.map((item => {
    return (
      <CardProducts
        key={item.id}
        img={item.image}
        name={item.name}
        price={item.price}
        description={item.description}
        id={item.id}
      />
    )
  }))

  return (
    <CartContainer>
      <Header title={"Meu Carrinho"} arrow={"none"} logout={'none'} />
      <AddressContainer>
        <Typography sx={{ ml: "16px" }}>Endereço de entrega</Typography>
        {data.address && (
          <Typography sx={{ ml: "16px" }}>
            {data.address.street}, {data.address.number}
          </Typography>
        )}
      </AddressContainer>
      {cart.length ? (
        <div>
          <RestaurantAddress
            productDetails={productDetails}
          />
          {selectedProducts}
          <CartWithProducts />
        </div>

      ) : (
        <div>
          <Typography sx={{ textAlign: 'center' }}>Carrinho vazio</Typography>
          <EmptyCart />
        </div>
      )}
      <Footer initialValue={1} />
    </CartContainer>
  );
}
