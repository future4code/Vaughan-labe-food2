import axios from "axios";
import { BASE_URL } from "../constants/URL";

export const placeOrder = (idRestaurant, cart, paymentMethod) => {

  const token = localStorage.getItem('token')
  const headers = { headers: { auth: token } }

  const bodyPlaceOrder = { products: cart, paymentMethod: paymentMethod }

  axios.post(`${BASE_URL}/restaurants/${idRestaurant}/order`, bodyPlaceOrder, headers)
    .then((response) => {
      //Aqui fica o popup
    })
    .catch((err) => {
      alert(err.response.data.message);
    })
}