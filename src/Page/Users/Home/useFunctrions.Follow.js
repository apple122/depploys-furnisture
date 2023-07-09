import axios from 'axios'
import React, { useEffect, useState } from 'react'
import data from './data'

export default function useFunctrions_Follow() {

    const [API, setAPI] = useState([])
    useEffect(() => {
        axios.get(data.Mainurl + data.GETFOLLOW).then((res) => {
            setAPI(res.data)
        })
    }, [])
    return {
        API
    }
}
