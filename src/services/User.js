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

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA3SHFaT0o3NnVrME9HUkI3NHhGIiwibmFtZSI6ImVzZm9tZWFkbyIsImVtYWlsIjoiZXNmb21lYWRvQGZ1dHVyZTQuY29tIiwiY3BmIjoiMTEwLjExMC4xMTAtMTAiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUiBxdWFscXVlciBjb2lzYSwgMDAwLCA3MSAtIHF1YWxxdWVyIGx1Z2FyIiwiaWF0IjoxNjQ3MjkwMTA3fQ.l5VVhvVblsIvqn0eTuC0lKs_lqi6q3s5KEGMYkfASFo"

export const updateProfile = (body, navigate) => {
    const headers = { headers: { auth: token } }
    axios.put(`${BASE_URL}/profile`, body, headers)
    .then((res) => {
        alert("Perfil atualizado com sucesso!")
        navigate(-1)
    }).catch((err) => {
        alert(err.response.data.message)
    })
}