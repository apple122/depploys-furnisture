import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import data from './data'

export default function useFUnctions() {

    const [API, setAPI] = useState([])
    const [APIA, setAPIA] = useState([])
    useEffect(() => {
        axios.get(data.Mainurl + data.GETUERS).then((res) => {
            setAPI(res.data)
        })

        axios.get(data.Mainurl + data.GETABOUT).then((res) => {
            setAPIA(res.data)
        })
    }, [])

    return {
        API,
        APIA
    }
}
