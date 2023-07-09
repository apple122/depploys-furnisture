import React, { useContext, useState } from 'react'
import { Modal, Typography, Button, Box } from '@mui/material';
import { Context_Items } from './Product.Items';
import { NumericFormat } from 'react-number-format';

export default function Form_Items() {

    const { Submit, open, handleOpen, handleClose, APITYPE, setIMG } = useContext(Context_Items)

    const [Preview, setPreview] = useState([])
    function FileIMG(e) {
        setPreview(e)
        setIMG(e)
    }

    let array = []
    for (let x = 0; x < Preview.length; x++) {
        array.push(x)
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
                    <div className='py-2 text-[22px]'>ເພີມຂໍ້ມູນ ລາຍການສີນຄ້າ</div><hr />
                    <div className='pt-5'>
                        <form method='POST' className='grid grid-cols-1 gap-5' onSubmit={Submit} enctype="multipart/form-data">
                            <div className='grid grid-cols-2 gap-5'>
                                <div className='grid grid-cols-1 '>
                                    <div className='form-group'>
                                        <label>Image</label>
                                        <input type='file' className='p-2 w-full border rounded focus:border-blue-200' onChange={(e) => FileIMG(e.target.files)} placeholder=':.......' required multiple />
                                    </div>
                                    <div className='grid grid-cols-2 gap-1 overflow-scroll max-h-80'>
                                        {array.map((index) => {
                                            return <img src={URL.createObjectURL(Preview[index])} />
                                        })}
                                    </div>


                                </div>

                                <div>
                                    <div className='form-group'>
                                        <label>ປະເພດສີນຄ້າ</label>
                                        <select className='p-2 w-full border rounded focus:border-blue-200' placeholder=':.......' required >
                                            <option value=''>ເລືອກປະເພດສີນຄ້າ</option>
                                            {APITYPE.map((item) => (
                                                <option value={item._id}>{item.pro_type}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='form-group mt-3'>
                                        <label>ຊື່ສີນຄ້າ</label>
                                        <input type='text' className='p-2 w-full border rounded focus:border-blue-200' placeholder=':.......' required />
                                    </div>
                                    <div className='form-group mt-3'>
                                        <label>ລາຄາຂ່າຍ</label>
                                        <NumericFormat type='text' className='p-2 w-full border rounded focus:border-blue-200' placeholder=':.......' required />
                                    </div>
                                    <div className='flex'>
                                        <div className='form-group mt-3'>
                                            <label>ຈຳນວນ</label>
                                            <NumericFormat className='p-2 w-full border rounded focus:border-blue-200' placeholder=':.......' required />
                                        </div>

                                        <div className='form-group mt-3'>
                                            <label>Color</label>
                                            <input className='p-2 w-full border rounded focus:border-blue-200' placeholder=':.......' required />
                                        </div>
                                    </div>
                                    <div className='form-group mt-3'>
                                        <label>ຂະໜາດ</label>
                                        <input type='text' className='p-2 w-full border rounded focus:border-blue-200' placeholder=':.......' required />
                                    </div>
                                    <div className='form-group mt-3'>
                                        <label>ລາຍລະອຽດ</label>
                                        < textarea type='text' className='p-2 w-full border rounded focus:border-blue-200' placeholder=':.......' required />
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
