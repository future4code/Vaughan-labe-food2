import axios from "axios";
import { BASE_URL } from "../constants/URL";
import { goToHome } from "../routes/Coordinator";

export const placeOrder = (idRestaurant, cart, paymentMethod, navigate) => {
  

  const token = localStorage.getItem('token')
  const headers = { headers: { auth: token } }

  const bodyPlaceOrder = { products: cart, paymentMethod: paymentMethod }

  axios.post(`${BASE_URL}/restaurants/${idRestaurant}/order`, bodyPlaceOrder, headers)
    .then((response) => {
      alert("Pedido aceito!")
      goToHome(navigate)
    })
    .catch((err) => {
      alert(err.response.data.message);
    })
}