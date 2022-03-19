import axios from "axios"
import { useEffect, useState } from "react"

const useRequestData = (initialState, url) => {

    const [data, setData] = useState(initialState)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token')

        setLoading(true)
        const headers = { headers: { auth: token } }

        axios.get(url, headers)
            .then((res) => {
                setLoading(false)
                setData(res.data)
            })
            .catch((err) => {
                setLoading(false)
            })

    }, [url])

    return [data, loading]
}

export default useRequestData