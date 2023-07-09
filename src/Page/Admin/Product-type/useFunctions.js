import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import data from './data'
import Swal from 'sweetalert2'
import Moment from 'moment'
import swal from 'sweetalert'

export default function useFunctions() {

    const [API, setAPI] = useState([])
    const [reducer, setReducer] = useReducer(x => x + 1, 0)
    useEffect(() => {
        axios.get(data.Mainurl + data.get).then((res) => {
            setAPI(res.data)
        })
    }, [reducer])

    function Submit(e) {
        e.preventDefault()
        if (e.target[0].value !== '') {
            axios.post(data.Mainurl + data.POST, {
                "pro_type": e.target[0].value
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

    function Reload() {
        setReducer()
    }

    function Delete(e) {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(data.Mainurl + data.del + e._id).then((res) => {
                        swal("Poof! Your imaginary file has been deleted!", {
                            icon: "success",
                        });
                        setReducer()
                    })
                }
            });
    }

    function is_active(e) {
        axios.patch(data.Mainurl + data.patch + e._id, {
            "pro_status": (e.pro_status == 'true' ? 'false' : 'true')
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
                title: (e.pro_status !== 'true' ? 'ສະແດງປະເພດ ສຳເລັດ!' : 'ປິດສະແດງປະເພດ')
            })
            setReducer()
        })
    }


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return {
        Submit,
        open,
        handleOpen,
        handleClose,
        API,
        Reload,
        Delete,

        is_active
    }
}
