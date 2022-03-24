import axios from "axios"
import { useEffect, useState } from "react"

const useRequestData = (initialState, url) => {

    const [data, setData] = useState(initialState)
    const [loading, setLoading] = useState(false)

    const getData = (url) => {
        const token = localStorage.getItem('token')
        const headers = { headers: { auth: token } }
        setLoading(true)

        axios.get(url, headers)
            .then((res) => {
                setLoading(false)
                setData(res.data)
            })
            .catch((err) => {
                setLoading(false)
            })
    }

    useEffect(() => {
        getData(url)
    }, [url])

    return [data, loading, getData]
}

export default useRequestData