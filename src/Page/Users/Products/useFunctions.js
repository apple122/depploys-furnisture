import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import data from './data'

export default function useFunctions() {

    const [API, setAPI] = useState([])
    const [APITEM, setAPITEM] = useState([])

    const [Type, setType] = useState('')
    const [Reducer, setReducer] = useReducer(x => x + 1, 0)
    useEffect(() => {
        axios.get(data.Mainurl + data.GETTYPE).then((res) => {
            setAPI(res.data)
        })

        axios.get(data.Mainurl + data.GETITEM + '?v1typeId=' + Type).then((res) => {
            setAPITEM(res.data)
        })
    }, [Reducer])

    function ChangeType(e) {
        setType(e)
        setReducer()
    }
    return {
        API,
        APITEM,
        ChangeType
    }
}
