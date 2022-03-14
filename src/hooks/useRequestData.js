import axios from "axios"
import { useEffect, useState } from "react"

const useRequestData = (initialState, url) => {

    const [data, setData] = useState(initialState)
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        
        setLoading(true)
      
        axios.get(url)
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