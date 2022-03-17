import React, { useContext } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/URL";
import { Typography } from "@mui/material";
import { GlobalContext } from "../../global/GlobalStateContext";
import EmptyCart from "./components/EmptyCart";
import CartWithProducts from "./components/CartWithProducts";
import CardProducts from "../../components/CardProducts/CardProducts";
import RestaurantAddress from "./components/RestaurantAddress";

const AddressContainer = styled.div`
  height: 76px;
  width: 100vw;
  margin: -15px 0 8px;
  background-color: #eee;
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const CartContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
`;

export default function CartPage() {
  const [data, loading] = useRequestData({}, `${BASE_URL}/profile/address`);
  const { cart, setCart, productDetails } = useContext(GlobalContext);

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
      <Header title={"Meu Carrinho"} arrow={"none"} />
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
