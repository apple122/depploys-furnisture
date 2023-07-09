import React, { useContext, useState } from 'react'
import { Modal, Typography, Button, Box } from '@mui/material';
import { NumericFormat } from 'react-number-format';
import { Context_Slide } from './Slide';

export default function Form_slide() {

    const { Submit, open, handleOpen, handleClose, Preview, FileIMG } = useContext(Context_Slide)

    return (
        <>
            <button type='button' onClick={handleOpen} className='p-2 bg-blue-500 rounded text-white'><i class="bi bi-plus-lg"></i> | ເພີມຂໍ້ມູນ</button>
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
                                    <input type='text' className='p-2 w-full border rounded focus:border-blue-200' placeholder=':.......' required />
                                </div>
                                <div className='form-group'>
                                    <label>Image</label>
                                    <input type='file' className='p-2 w-full border rounded focus:border-blue-200' onChange={FileIMG} placeholder=':.......' required/>
                                </div>
                                <div className='overflow-scroll max-h-80'>
                                    <img src={Preview !== undefined ? URL.createObjectURL(Preview) : ''} />
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
