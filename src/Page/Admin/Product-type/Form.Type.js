import React, { useContext, useState } from 'react'
import { Context_Type } from './Product.type'
import { Modal, Typography, Button, Box } from '@mui/material';

export default function Form_Type() {

    const { Submit, open, handleOpen, handleClose } = useContext(Context_Type)

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
                    <div className='py-2 text-[22px]'>ເພີມຂໍ້ມູນ ປະເພດສີນຄ້າ</div><hr />
                    <div className='pt-5'>
                        <form method='POST' className='grid grid-cols-1' onSubmit={Submit}>
                            <div className='form-group'>
                                <label>ປະເພດສີນຄ້າ</label>
                                <input className='p-2 w-full border rounded focus:border-blue-200' placeholder=':.......' required />
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
