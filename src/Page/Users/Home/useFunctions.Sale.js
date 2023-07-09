import axios from 'axios'
import React, { useEffect, useState } from 'react'
import data from './data'

export default function useFunctions_Sale() {

    const [APIIT, setAPIIT] = useState([])
    useEffect(() => {
        axios.get(data.Mainurl + data.GETITEMS).then((res) => {
            setAPIIT(res.data)
        })
    }, [])

    return {
        APIIT
    }
}
