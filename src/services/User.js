import axios from "axios";
import { BASE_URL } from "../constants/URL";

export const login = (body) => {

    axios.post(`${BASE_URL}/login`, body)
        .then((res) => {
            console.log(res.data)
        }).catch((err) => {
            alert(err.response.data.message)
        })
}