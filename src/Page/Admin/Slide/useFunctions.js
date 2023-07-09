import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import Swal from 'sweetalert2'
import data from './data'
import swal from 'sweetalert'

export default function useFunctions() {

    const [API, setAPI] = useState([])
    const [Reducer, setReducer] = useReducer(x => x + 1, 0)
    useEffect(() => {
        axios.get(data.Mainurl + data.GET).then((res) => {
            setAPI(res.data.reverse())
        })
    }, [Reducer])

    const [Preview, setPreview] = useState(undefined)

    function Submit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('Title', e.target[0].value)
        formData.append('Image', Preview)

        axios.post(data.Mainurl + data.POST, formData).then((res) => {
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
            setPreview('')
            setOpen(false);
        })
    }
    function FileIMG(e) {
        setPreview(e.target.files[0])
        // console.log(e.target.files.length)
    }

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
        setPreview(undefined)
    }

    function Del(e) {
        swal({
            title: "ລົບຂໍ້ມູນຮູບສະໄລສ໌?",
            text: "ທ່ານຕ້ອງການ ລົບຂໍ້ມູນຮູບສະໄລສ໌ ຫຼື ບໍ່!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(data.Mainurl + data.DEL + e).then((res) => {
                        swal("ລົບຂໍ້ມູນສຳເລັດ!", {
                            icon: "success",
                        });
                        setReducer()
                    })
                }
            });
    }

    function FuncReducer() {
        setReducer()
    }

    return {
        API,
        Submit,
        open,
        handleOpen,
        handleClose,

        Preview,
        FileIMG,

        Del,
        FuncReducer
    }
}
