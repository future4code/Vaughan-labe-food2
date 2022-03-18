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
import { goToEditAddress, goToEditUser } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";

export default function ProfilePage() {
  useProtectedPage()
  
  const [data] = useRequestData({}, `${BASE_URL}/profile`);
  const [orderData] = useRequestData(
    {},
    `${BASE_URL}/orders/history`
  );
  const navigate = useNavigate()

  const orderHistory =
    orderData.orders &&
    orderData.orders.map((order) => {
      return <OrderHistoryCard 
      name={order.restaurantName} 
      price={order.totalPrice}
      date={order.createdAt}    
      />;
    });

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
              <CreateIcon onClick={() => goToEditUser(navigate)} />
            </NameAndEdit>
            <Typography>{data.user.email}</Typography>
            <Typography>{data.user.cpf}</Typography>
          </ProfileBox>
          <AddressBox>
            <div>
              <Typography color={"secondary"}>Endereço cadastrado</Typography>
              <Typography>{data.user.address}</Typography>
            </div>
            <CreateIcon onClick={() => goToEditAddress(navigate)} />
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
