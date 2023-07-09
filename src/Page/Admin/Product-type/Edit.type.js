import React, { useContext, useState } from 'react'
import { Modal, Typography, Button, Box } from '@mui/material';
import data from './data'
import axios from 'axios';
import Swal from 'sweetalert2';
import { Context_Type } from './Product.type';

export default function Edit_Type(props) {
    const item = props.Items

    const { Reload } = useContext(Context_Type)

    function Submit(e) {
        e.preventDefault()
        if (e.target[0].value !== '') {
            axios.put(data.Mainurl + data.put + item._id, {
                "pro_type": e.target[0].value,
                "pro_status": "true",
                "pro_curdate": e.pro_curdate    
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
                Reload()
                Toast.fire({
                    icon: 'success',
                    title: 'ບັນທືກຂໍ້ມູນສຳເລັດ!'
                })
                setOpen(false);

            })
        }
    }

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <button type='button' onClick={handleOpen} className='py-1 px-2 rounded bg-blue-500 text-white'><i class="bi bi-plus-lg"></i> | ແກ້ໄຂຂໍ້ມູນ</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box id='StyleModal'>
                    <div className='py-2 text-[22px]'>ເພີມຂໍ້ມູນ ປະເພດສີນຄ້າ</div><hr />
                    <div className='pt-5'>
                        <form method='POST' className='grid grid-cols-1' onSubmit={Submit}>
                            <div className='form-group'>
                                <label>ປະເພດສີນຄ້າ</label>
                                <input className='p-2 w-full border rounded focus:border-blue-200' defaultValue={item.pro_type} placeholder=':.......' required />
                            </div>
                            <hr />
                            <div className='pt-5 flex gap-2'>
                                <button type='submit' className='bg-blue-500 rounded py-1 px-2 text-white'><i class="bi bi-cloud-download"></i> | ບັນທືກຂໍ້ມູນ</button>
                                <button type='reset' onClick={handleClose} className='bg-red-500 rounded py-1 px-2 text-white'><i class="bi bi-x-diamond-fill"></i> | ຍົກເລີກ</button>
                            </div>
                        </form>

                    </div>
                </Box>
            </Modal>

        </>
    )
}
