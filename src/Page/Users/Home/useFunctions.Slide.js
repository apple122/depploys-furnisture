import React, { useEffect, useState } from 'react'
import data from './data'
import axios from 'axios'

export default function useFunctions_Slide() {

    const [APISL, setAPISL] = useState([])
    useEffect(() => {
        axios.get(data.Mainurl + data.GETSL).then((res) => {
            setAPISL(res.data)
        })
    }, [])

    return {
        APISL
    }
}
