import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import data from './data'
import { useReducer } from 'react'
import Swal from 'sweetalert2'

export default function useFunctions() {

    const [APIUSERS, setAPIU] = useState([])
    const [APIA, setAPIA] = useState([])
    const [Reducer, setReducer] = useReducer(x => x + 1, 0)
    useEffect(() => {
        axios.get(data.Mainurl + data.GET).then((res) => {
            setAPIU(res.data)
        })

        axios.get(data.Mainurl + data.GETA).then((res) => {
            setAPIA(res.data)
        })
    }, [Reducer])

    const [Data, setData] = useState('')
    let array = []
    for (let x = 0; x < Data.length; x++) {
        array.push(Data[x]?.value)
    }

    const [Preview, setPreview] = useState(undefined)
    const [lat, setlat] = useState('')
    const [lng, setlng] = useState('')
    const [text, settext] = useState('')

    let lan = []
    lan.push(lat)
    lan.push(lng)

    function Submit() {
        if (APIA.length > 0) {
            axios.patch(data.Mainurl + data.PATCH + APIA[0]?._id, {
                "users": array,
                "ab_image": Preview.name,
                "ab_text": text,
                "map": lan,
            }).then((res) => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'success',
                    title: 'ບັນທືກຂໍ້ມູນສຳເລັດ!'
                })
                setReducer()
            })
        } else {
            axios.post(data.Mainurl + data.POST, {
                "users": array,
                "ab_image": Preview.name,
                "ab_text": text,
                "map": lan,
            }).then((res) => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'success',
                    title: 'ບັນທືກຂໍ້ມູນສຳເລັດ!'
                })
                setReducer()
            })
        }
    }

    return {
        APIUSERS,
        Submit,
        setData,

        setPreview,
        Preview,
        setlat,
        setlng,
        settext,

    }
}
