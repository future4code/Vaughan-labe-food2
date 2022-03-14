import axios from "axios"
import { useEffect, useState } from "react"

const useRequestData = (initialState, url) => {

    const [data, setData] = useState(initialState)
    const [loading, setLoading] = useState(false)

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA3SHFaT0o3NnVrME9HUkI3NHhGIiwibmFtZSI6ImVzZm9tZWFkbyIsImVtYWlsIjoiZXNmb21lYWRvQGZ1dHVyZTQuY29tIiwiY3BmIjoiMTEwLjExMC4xMTAtMTAiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUiBxdWFscXVlciBjb2lzYSwgMDAwLCA3MSAtIHF1YWxxdWVyIGx1Z2FyIiwiaWF0IjoxNjQ3MjkwMTA3fQ.l5VVhvVblsIvqn0eTuC0lKs_lqi6q3s5KEGMYkfASFo"
    useEffect(() => {


        setLoading(true)
        const headers = { headers: { auth: token } }

        axios.get(url, headers)
            .then((res) => {
                setLoading(false)
                setData(res.data)
            })
            .catch((err) => {
                console.log(err.response)
                setLoading(false)
            })

    }, [url])

    return [data, loading]
}

export default useRequestData