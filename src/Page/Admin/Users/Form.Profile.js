import React, { useContext, useState } from 'react'
import { Modal, Typography, Button, Box } from '@mui/material';
import { Context_Users } from './Users';
import axios from 'axios';
import data from './data';
import Swal from 'sweetalert2';

export default function Form_Profile(props) {
    const item = (props.data)
    const [Preview, setPreview] = useState(undefined)

    function Submit(e) {
        e.preventDefault()
        axios.patch(data.Mainurl + data.PATCH + item._id, {
            "Image": Preview.name,
            "Fullname": e.target[1].value,
            "Email": e.target[5].value,
            "Tel": e.target[6].value,
            "distric": e.target[7].value,
            "village": e.target[8].value,
            "Province": e.target[9].value,
            "Currdate": (e.target[2].value + '-' + e.target[3].value + '-' + e.target[4].value)
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
            // setReducer()
            setOpen(false);

        })
    }

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <a href="#" onClick={handleOpen} class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><i class="bi bi-pencil-square"></i> | Edit</a>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box id='StyleModal'>
                    <div className='py-2 text-[22px]'>ເພີມຂໍ້ມູນ Users</div><hr />
                    <div className='pt-5'>
                        <form method='POST' onSubmit={Submit} className='grid grid-cols-1 gap-5'>
                            <div className='grid grid-cols-2 gap-5'>
                                <div className='flex justify-center'>
                                    <input type='file' id='image' onChange={(e) => setPreview(e.target.files[0])} className='hidden' />
                                    <label for='image' className='rounded-full w-[30vh] h-[30vh] bg-gray-500 overflow-hidden object-cover flex justify-center items-center'>
                                        <img src={Preview !== undefined ? URL.createObjectURL(Preview) : ''} className='object-cover' alt='Select Image' />
                                    </label>
                                </div>
                                <div>
                                    <div className='form-group'>
                                        <label>Fullname</label>
                                        <input type='text' className='p-2 w-full border rounded focus:border-blue-200' placeholder=':.......' required />
                                    </div>
                                    <div className='grid grid-cols-3'>
                                        <div className='form-group'>
                                            <label>day</label>
                                            <input type='number' className='p-2 w-full border rounded focus:border-blue-200' placeholder=':.......' required />
                                        </div>
                                        <div className='form-group'>
                                            <label>month</label>
                                            <input type='number' className='p-2 w-full border rounded focus:border-blue-200' placeholder=':.......' required />
                                        </div>
                                        <div className='form-group'>
                                            <label>year</label>
                                            <input type='number' className='p-2 w-full border rounded focus:border-blue-200' placeholder=':.......' required />
                                        </div>
                                    </div>
                                    <div className='form-group'>
                                        <label>Email</label>
                                        <input type='email' className='p-2 w-full border rounded focus:border-blue-200' placeholder=':.......' required />
                                    </div>
                                    <div className='form-group'>
                                        <label>Tell</label>
                                        <input type='test' className='p-2 w-full border rounded focus:border-blue-200' placeholder=':.......' required />
                                    </div>
                                    <div className='grid grid-cols-2'>
                                        <div className='form-group'>
                                            <label>ບ້ານ</label>
                                            <input type='text' className='p-2 w-full border rounded focus:border-blue-200' placeholder=':.......' required />
                                        </div>
                                        <div className='form-group'>
                                            <label>ເມືອງ</label>
                                            <input type='text' className='p-2 w-full border rounded focus:border-blue-200' placeholder=':.......' required />
                                        </div>
                                    </div>
                                    <div className='form-group'>
                                        <label>ແຂວງ</label>
                                        <input type='text' className='p-2 w-full border rounded focus:border-blue-200' placeholder=':.......' required />
                                    </div>
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
