import axios from 'axios'
import React, { useEffect, useState } from 'react'
import data from './data'

export default function useFunctions_Type() {

    const [APITP, setAPITP] = useState([])
    const [APITT, setAPIIT] = useState([])
    
    useEffect(() => {
        axios.get(data.Mainurl + data.GETTP).then((res) => {
            setAPITP(res.data)
        })

        axios.get(data.Mainurl + data.GETITEMS).then((res) => {
            setAPIIT(res.data)
        })
    }, [])

    return {
        APITP,
        APITT
    }
}
