import axios from "axios";
import { BASE_URL } from "../constants/URL";
import { goToHome, goToProfile } from "../routes/Coordinator";




export const addAddress = (body, navigate, screen) => {
    const token = localStorage.getItem('token')
    const headers = { headers: { auth: token } }
    axios.put(`${BASE_URL}/address`, body, headers)
    .then((res) => {
        localStorage.setItem('token', res.data.token)
        alert("Endereço salvo com sucesso!")
        if(screen === 'editAddress'){
            goToProfile(navigate)
            navigate(0)
        } else {
            goToHome(navigate)
        }

    }).catch((err) => {
        alert(err.response.data.message)
    })
}