import axios from 'axios'
import React, { useState } from 'react'
import data from './data'
import { useEffect } from 'react'
import Swal from 'sweetalert2'
import { useReducer } from 'react'

export default function useFunctions() {

    const [API, setAPI] = useState([])
    const [Reducer, setReducer] = useReducer(x => x + 1, 0)
    useEffect(() => {
        axios.get(data.Mainurl + data.GET).then((res) => {
            setAPI(res.data)
        })
    }, [Reducer])

    const [name, setChange] = useState('')
    const [F, setF] = useState('')
    const [I, setI] = useState('')
    const [L, setL] = useState('')
    const [W, setW] = useState('')

    function changeWA(e) {
        setW('https://wa.me/+856'+e)
    }

    const [In0, setIn0] = useState('')
    const [In1, setIn1] = useState('')
    const [In2, setIn2] = useState('')
    const [In3, setIn3] = useState('')
    const [In4, setIn4] = useState('')

    let arrayIMG = []
    arrayIMG.push(In0.name !== undefined ? In0.name : (API[0]?.Image[0]))
    arrayIMG.push(In1.name !== undefined ? In1.name : (API[0]?.Image[1]))
    arrayIMG.push(In2.name !== undefined ? In2.name : (API[0]?.Image[2]))
    arrayIMG.push(In3.name !== undefined ? In3.name : (API[0]?.Image[3]))
    arrayIMG.push(In4.name !== undefined ? In4.name : (API[0]?.Image[4]))

    function Submit(e) {
        if (API.length > 0) {
            axios.patch(data.Mainurl + data.PATCH + API[0]?._id, {
                "Name": (name !== '' ? name : API[0]?.Name),
                "Facebook": (F !== '' ? F : API[0]?.Facebook),
                "Instagram": (I !== '' ? I : API[0]?.Instagram),
                "Line": (L !== '' ? L : API[0]?.Line),
                "WhatApp": (W !== '' ? W : API[0]?.WhatApp),
                "Image": arrayIMG
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

                if (API[0]?.Staus === 'Facebook') {
                    PACT({ active: API[0]?.Staus, link: (F !== '' ? F : API[0]?.Facebook) })
                } else if (API[0]?.Staus === 'Instagram') {
                    PACT({ active: API[0]?.Staus, link: (I !== '' ? I : API[0]?.Instagram) })
                } else if (API[0]?.Staus === 'Line') {
                    PACT({ active: API[0]?.Staus, link: (L !== '' ? L : API[0]?.Line) })
                } else if (API[0]?.Staus === 'WhatApp') {
                    PACT({ active: API[0]?.Staus, link: (W !== '' ? W : API[0]?.WhatApp) })
                }

                Toast.fire({
                    icon: 'success',
                    title: 'ປ່ຽນແປງຂໍ້ມູນສຳເລັດ'
                })
                setReducer()

                const IMG0 = new FormData()
                IMG0.append('profile', In0)
                axios.post('http://localhost:3022/Multiple/data', IMG0)
                const IMG01 = new FormData()
                IMG01.append('profile', In1)
                axios.post('http://localhost:3022/Multiple/data', IMG01)
                const IMG02 = new FormData()
                IMG02.append('profile', In2)
                axios.post('http://localhost:3022/Multiple/data', IMG02)
                const IMG03 = new FormData()
                IMG03.append('profile', In3)
                axios.post('http://localhost:3022/Multiple/data', IMG03)
                const IMG04 = new FormData()
                IMG04.append('profile', In4)
                axios.post('http://localhost:3022/Multiple/data', IMG04)

            })
        } else {
            axios.post(data.Mainurl + data.POST, {
                "Name": name,
                "Facebook": F,
                "Instagram": I,
                "Line": L,
                "WhatApp": W,
                "Image": arrayIMG
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
                    title: 'ປ່ຽນແປງຂໍ້ມູນສຳເລັດ'
                })
                setReducer()

                const IMG0 = new FormData()
                IMG0.append('profile', In0)
                axios.post('http://localhost:3022/Multiple/data', IMG0)
                const IMG01 = new FormData()
                IMG01.append('profile', In1)
                axios.post('http://localhost:3022/Multiple/data', IMG01)
                const IMG02 = new FormData()
                IMG02.append('profile', In2)
                axios.post('http://localhost:3022/Multiple/data', IMG02)
                const IMG03 = new FormData()
                IMG03.append('profile', In3)
                axios.post('http://localhost:3022/Multiple/data', IMG03)
                const IMG04 = new FormData()
                IMG04.append('profile', In4)
                axios.post('http://localhost:3022/Multiple/data', IMG04)

            })
        }
    }

    function PACT(e) {
        axios.patch(data.Mainurl + data.PATCH + API[0]?._id, {
            "Staus": e.active,
            "is_Link": e.link
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
                title: 'ປ່ຽນແປງຂໍ້ມູນສຳເລັດ'
            })
            setReducer()
        })
    }

    function is_active(e) {
        if (e === 'Facebook') {
            PACT({ active: e, link: (F !== '' ? F : API[0]?.Facebook) })
        } else if (e === 'Instagram') {
            PACT({ active: e, link: (I !== '' ? I : API[0]?.Instagram) })
        } else if (e === 'Line') {
            PACT({ active: e, link: (L !== '' ? L : API[0]?.Line) })
        } else if (e === 'WhatApp') {
            PACT({ active: e, link: (W !== '' ? W : API[0]?.WhatApp) })
        }
    }

    return {
        API,
        Submit,

        name,
        setChange,
        setF,
        setI,
        setL,
        changeWA,

        is_active,

        setIn0,
        setIn1,
        setIn2,
        setIn3,
        setIn4,

        In0,
        In1,
        In2,
        In3,
        In4,
    }
}
