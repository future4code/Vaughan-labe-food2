import axios from "axios";
import { BASE_URL } from "../constants/URL";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA3SHFaT0o3NnVrME9HUkI3NHhGIiwibmFtZSI6ImVzZm9tZWFkbyIsImVtYWlsIjoiZXNmb21lYWRvQGZ1dHVyZTQuY29tIiwiY3BmIjoiMTEwLjExMC4xMTAtMTAiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUiBxdWFscXVlciBjb2lzYSwgMDAwLCA3MSAtIHF1YWxxdWVyIGx1Z2FyIiwiaWF0IjoxNjQ3MjkwMTA3fQ.l5VVhvVblsIvqn0eTuC0lKs_lqi6q3s5KEGMYkfASFo"

export const addAddress = (body, navigate) => {
    const headers = { headers: { auth: token } }
    axios.put(`${BASE_URL}/address`, body, headers)
    .then((res) => {
        localStorage.setItem('token', res.data.token)
        alert("Endereço salvo com sucesso!")
        navigate(-1)
    }).catch((err) => {
        alert(err.response.data.message)
    })
}