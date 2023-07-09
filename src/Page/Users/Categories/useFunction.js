import React, { useEffect, useState } from 'react'
import data from '../Home/data'
import { useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'

export default function useFunction() {

    let location = useLocation().state
    let LoError = useLocation()

    let Naviagte = useNavigate()

    if (LoError.state === null) {
        // alert('ຂໍອາໄພ Token ສີນຄ້າໝົດອາຍຸກະລຸນາເລືອກສີນຄ້າອີກຄັ້ງ!')
        Naviagte('/Products', { state: 'OK' })
    }

    const [Number, setNumber] = useState(1)
    function Plus() {
        if (Number < location.v2qty) {
            setNumber(Number + 1)
        }
    }
    function Drop() {
        if (Number !== 1) {
            setNumber(Number - 1)
        }
    }

    function Buy(item) {
        Naviagte('/Buy', { state: { Number, item } })
    }

    const [PageIN, setIN] = useState(1)
    function SubPage1(e) {
        e.preventDefault()
        setIN(2)
    }

    function SubPage2(e) {

    }

    function back() {
        setIN(1)
    }

    const [OpenSA, setOpenSA] = useState(false);
    const showA = () => setOpenSA(true);
    const CloseA = () => setOpenSA(false);

    return {
        location,
        Buy,

        Plus,
        Drop,
        Number,

        OpenSA,
        showA,
        CloseA,

        SubPage1,
        SubPage2,
        PageIN,
        back,
    }
}
