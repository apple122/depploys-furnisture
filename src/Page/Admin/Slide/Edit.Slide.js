import React from 'react'
import { Modal, Typography, Button, Box } from '@mui/material';
import { useState } from 'react';
import data from './data';
import Swal from 'sweetalert2';
import axios from 'axios';
import useFunctions from './useFunctions';
import { useContext } from 'react';
import { Context_Slide } from './Slide';

export default function Edit_Slide(props) {
    let item = props.Item

    const { FuncReducer } = useContext(Context_Slide)

    function Submit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('Image', (Preview !== '' ? Preview : item.Image))
        formData.append('Title', e.target[0].value)

        axios.patch(data.Mainurl + data.PATCH + item._id, formData).then((res) => {
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

            if (Preview !== undefined) {
                const Multiple = new FormData()
                Multiple.append('profile', Preview)
                axios.post('http://localhost:3022/Multiple/data', Multiple)
                FuncReducer()
            } else {
                FuncReducer()
            }

            Toast.fire({
                icon: 'success',
                title: 'ແກ້ໄຂຂໍ້ມູນສຳເລັດ!'
            })
            setPreview('')
            setOpen(false);
        })
    }

    const [Preview, setPreview] = useState(undefined)
    function ChangView(e) {
        setPreview(e.target.files[0])
    }

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            <button className='rounded bg-blue-400 py-1 px-2 text-white' onClick={handleOpen}><i class="bi bi-pencil-square"></i> ແກ້ໄຂ</button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box id='StyleModal'>
                    <div className='py-2 text-[22px]'>ເພີມຂໍ້ມູນ ລາຍການສີນຄ້າ</div><hr />
                    <div className='pt-5'>
                        <form method='POST' className='grid grid-cols-1 gap-5' onSubmit={Submit} enctype="multipart/form-data">
                            <div className='grid grid-cols-1 gap-5'>
                                <div className='form-group'>
                                    <label>ຫົວຂໍ້</label>
                                    <input type='text' className='p-2 w-full border rounded focus:border-blue-200' defaultValue={item.Title} placeholder=':.......' required />
                                </div>
                                <div className='form-group'>
                                    <label>Image</label>
                                    <input type='file' className='p-2 w-full border rounded focus:border-blue-200' onChange={ChangView} placeholder=':.......' />
                                </div>
                                <div className='overflow-scroll max-h-80'>
                                    <img src={Preview !== undefined ? URL.createObjectURL(Preview) : (data.IMG + item.Image)} />
                                </div>
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
