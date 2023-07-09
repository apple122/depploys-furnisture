import React, { useContext, useState } from 'react'
import { Modal, Typography, Button, Box } from '@mui/material';
import { Context_Users } from './Users';

export default function Form_add() {

    const { Submit, open, handleOpen, handleClose } = useContext(Context_Users)

    const [agreement, setAgreement] = useState(false);

    const handleChange = (event) => {
        setAgreement(event.target.checked);
    }

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
                    <div className='py-2 text-[22px]'>ເພີມຂໍ້ມູນ Users</div><hr />
                    <div className='pt-5'>
                        <form method='POST' className='grid grid-cols-1 gap-5' onSubmit={Submit}>
                            <div className='form-group'>
                                <label>UserName</label>
                                <input type='text' className='p-2 w-full border rounded focus:border-blue-200' placeholder=':.......' required />
                            </div>
                            <div className='form-group'>
                                <label>Password</label>
                                <input type={agreement != true ? 'password' : ''} className='p-2 w-full border rounded focus:border-blue-200' placeholder=':.......' required />
                            </div>
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" onChange={handleChange} type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="remember" class="text-black select-none">ສະແດງລະຫັດຜ່ານ</label>
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
