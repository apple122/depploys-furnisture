import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import data from './data'
import { useReducer } from 'react'
import swal from 'sweetalert'

export default function useFunctions() {

    const [API, setAPI] = useState([])
    const [Reducer, setReducer] = useReducer(x => x + 1, 0)
    useEffect(() => {
        axios.get(data.Mainurl + data.GET).then((res) => {
            setAPI(res.data)
        })
    }, [Reducer])

    function Submit(e) {
        e.preventDefault()
        if (e.target[0].value !== '') {
            axios.post(data.Mainurl + data.POST, {
                "UserName": e.target[0].value,
                "Password": e.target[1].value
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
                setOpen(false);

            })
        }
    }

    function DelData(e) {
        swal({
            title: "ລົບຂໍ້ມູນ?",
            text: "ທ່່ານຕ້ອງການລົບຂໍ້ມູນນີ້ ຫຼື ບໍ່!",
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

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return {
        open,
        handleOpen,
        handleClose,

        Submit,
        API,

        DelData
    }
}
