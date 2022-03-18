import axios from "axios";
import { BASE_URL } from "../constants/URL";
import { goToHome } from "../routes/Coordinator";

const token = localStorage.getItem('token')

export const addAddress = (body, navigate, screen) => {
    const headers = { headers: { auth: token } }
    axios.put(`${BASE_URL}/address`, body, headers)
    .then((res) => {
        localStorage.setItem('token', res.data.token)
        alert("Endereço salvo com sucesso!")
        if(screen === 'editAddress'){
            navigate(-1)
        } else {
            goToHome(navigate)
        }

    }).catch((err) => {
        alert(err.response.data.message)
    })
}