import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import data from './data'
import Swal from 'sweetalert2'
import swal from 'sweetalert'

export default function useFunctions() {

    const [API, setAPI] = useState([])
    const [APITYPE, setTYPE] = useState([])
    const [Reducer, setReducer] = useReducer(x => x + 1, 0)

    useEffect(() => {
        axios.get(data.Mainurl + data.GET).then((res) => {
            setAPI(res.data.reverse())
        })

        axios.get(data.Mainurl + data.GETTYPE).then((res) => {
            setTYPE(res.data.reverse())
        })
    }, [Reducer])

    function Delete(e) {
        swal({
            title: "ລົບຂໍ້ມູນ?",
            text: "ທ່່ານຕ້ອງການລົບຂໍ້ມູນນີ້ ຫຼື ບໍ່!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(data.Mainurl + data.DEL + e._id).then((res) => {
                        swal("ລົບຂໍ້ມູນສຳເລັດ!", {
                            icon: "success",
                        });
                        setReducer()
                    })
                }
            });
    }

    function is_active(e) {
        axios.patch(data.Mainurl + data.PATCH + e._id, {
            "is_active": (e.is_active == "true" ? "false" : "true")
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
                title: e.is_active == "true" ? 'ປິດການຂ່່າຍສຳເລັດ!' : 'ເປິດການຂ່່າຍສຳເລັດ!'
            })
            setReducer()
        }).catch((err) => {
            console.log(err)
        })
    }

    const [IMG, setIMG] = useState('')

    function Submit(e) {
        e.preventDefault()

        let array = []
        for (let x = 0; x < IMG.length; x++) {
            array.push(IMG[x].name)
        }

        axios.post(data.Mainurl + data.POST, {
            'v1typeId': e.target[1].value,
            'v2image': array,
            'v2Items': e.target[2].value,
            'v2size': e.target[6].value,
            'v2sprice': e.target[3].value,
            'v2qty': e.target[4].value,
            'v2color': (e.target[5].value),
            'v2remark': (e.target[7].value)
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

            for (let x = 0; x < IMG.length; x++) {
                const Multiple = new FormData()
                Multiple.append('profile', IMG[x])
                axios.post('http://localhost:3022/Multiple/data', Multiple)
            }
        })
    }

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [OpenS, setOpenS] = useState(false);
    const show = () => setOpenS(true);
    const Close = () => setOpenS(false);

    function resetData() {
        setReducer()
    }

    async function Percent(e) {
        const { value: textIN } = await Swal.fire({
            title: 'ເປິດໂປຣ',
            input: 'number',
            inputLabel: 'ປ່ອນຈຳນວນເປີເຊັນເພືອທຳຫານເປິດໂປຣ',
            inputPlaceholder: 'ກະລຸນາປ່ອນຈຳນວນໂປຣ'
        })

        if (textIN) {
            axios.patch(data.Mainurl + data.PATCH + e._id, {
                "v2percent": textIN
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
                    title: 'ເປີດໂປຣສຳເລັດ!'
                })
                setReducer()
            }).catch((err) => {
                console.log(err)
            })
        }

    }

    return {
        API,
        Delete,
        APITYPE,

        Submit,
        open,
        handleOpen,
        handleClose,
        setIMG,

        OpenS,
        show,
        Close,
        resetData,

        is_active,
        Percent
    }
}
