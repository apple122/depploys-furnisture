import React, { useEffect, useState } from 'react'
import data from './data'
import axios from 'axios'

export default function useFunctions() {

    const [APICURRENCY, setCurrency] = useState([])

    const [APITYPE, setAPITYPE] = useState([])
    const [APIUsers, setAPIUsers] = useState([])
    const [APIITEMS, setAPIITEMS] = useState([])
    const [APISALE, setSALE] = useState([])

    useEffect(() => {
        axios.get(data.Mainurl + data.GETCURRENCY).then((res) => {
            setCurrency(res.data)
        })
        
        axios.get(data.Mainurl + data.get).then((res) => {
            setAPITYPE(res.data)
        })

        axios.get(data.Mainurl + data.GETUsers).then((res) => {
            setAPIUsers(res.data)
        })

        axios.get(data.Mainurl + data.GETITEMS).then((res) => {
            setAPIITEMS(res.data)
        })

        axios.get(data.Mainurl + data.GETSALE).then((res) => {
            setSALE(res.data)
        })

    }, [])

    return {
        APICURRENCY,
        
        APITYPE,
        APIUsers,
        APIITEMS,
        APISALE,
    }
}
