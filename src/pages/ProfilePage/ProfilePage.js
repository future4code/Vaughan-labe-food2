import Header from "../../components/Header/Header";
import React from "react";
import Footer from "../../components/Footer/Footer";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/URL";
import { Typography } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import { NameAndEdit } from "./Styled";
import { ProfileBox } from "./Styled";
import { AddressBox } from "./Styled";
import OrderHistoryCard from "./components/OrderHistoryCard";

export default function ProfilePage() {
  const [data, loading] = useRequestData({}, `${BASE_URL}/profile`);
  const [orderData, orderLoading] = useRequestData(
    {},
    `${BASE_URL}/orders/history`
  );

  const orderHistory =
    orderData.orders &&
    orderData.orders.map((order) => {
      return <OrderHistoryCard 
      name={order.restaurantName} 
      price={order.totalPrice}
      date={order.createdAt}    
      />;
    });

  console.log(orderData);
  return (
    <div>
      <Header title={"Meu Perfil"} arrow={"none"} />
      {data.user && (
        <>
          <ProfileBox>
            <NameAndEdit>
              <Typography sx={{ fontWeight: "00" }}>
                {data.user.name}
              </Typography>
              <CreateIcon />
            </NameAndEdit>
            <Typography>{data.user.email}</Typography>
            <Typography>{data.user.cpf}</Typography>
          </ProfileBox>
          <AddressBox>
            <div>
              <Typography color={"secondary"}>Endereço cadastrado</Typography>
              <Typography>{data.user.address}</Typography>
            </div>
            <CreateIcon />
          </AddressBox>
        </>
      )}
      {orderData.orders && (
        <div>
          <Typography sx={{ textAlign: "center", m: "16px 0" }}>
            Histórico de pedidos
          </Typography>
          <div>{orderData.orders.length ? orderHistory : <Typography sx={{mt: '30px', textAlign: 'center'}}>Vazio</Typography>}</div>
        </div>
      )}

      <Footer initialValue={2} />
    </div>
  );
}
