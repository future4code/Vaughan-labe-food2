import axios from "axios";
import { BASE_URL } from "../constants/URL";
import { goToCreateAddress, goToHome } from '../routes/Coordinator'

export const login = (body, navigate) => {


    axios.post(`${BASE_URL}/login`, body)
        .then((res) => {
            if (res.data.user.hasAddress) {
                goToHome(navigate)
            } else {
                goToCreateAddress(navigate)
            }
            localStorage.setItem('token', res.data.token)
        }).catch((err) => {
            alert(err.response.data.message)
        })
}