import axios from "axios";
import { BASE_URL } from "../constants/URL";

export const placeOrder = (idRestaurant, cart, paymentMethod) => {

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA3SHFaT0o3NnVrME9HUkI3NHhGIiwibmFtZSI6ImVzZm9tZWFkbyIsImVtYWlsIjoiZXNmb21lYWRvQGZ1dHVyZTQuY29tIiwiY3BmIjoiMTEwLjExMC4xMTAtMTAiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUiBxdWFscXVlciBjb2lzYSwgMDAwLCA3MSAtIHF1YWxxdWVyIGx1Z2FyIiwiaWF0IjoxNjQ3MjkwMTA3fQ.l5VVhvVblsIvqn0eTuC0lKs_lqi6q3s5KEGMYkfASFo"
    const headers = { headers: { auth: token } }

    const bodyPlaceOrder = {products : cart, paymentMethod: paymentMethod}

    console.log(paymentMethod);

    axios.post(`${BASE_URL}/restaurants/${idRestaurant}/order`, bodyPlaceOrder, headers)
    .then((response) =>{
      console.log(response);
    })
    .catch((err) => {
        console.log(err.response);
    })
}