import axios from 'axios'
import React, { useEffect, useState } from 'react'
import data from './data'

export default function useFunctions() {

    const [API, setAPI] = useState([])
    const [Currency, setCurrency] = useState([])
    useEffect(() => {
        axios.get(data.Mainurl + data.GET).then((res) => {
            setAPI(res.data.reverse())
        })

        axios.get(data.Mainurl + data.Currency).then((res) => {
            setCurrency(res.data)
        })
    }, [])

    return {
        API,
        Currency
    }
}
