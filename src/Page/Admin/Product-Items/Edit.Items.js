import React, { useContext, useState } from 'react'
import { Modal, Typography, Button, Box } from '@mui/material';
import { Context_Items } from './Product.Items';
import { NumericFormat } from 'react-number-format';
import data from './data';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Edit_Items(props) {

    let items = props.Items

    const { APITYPE, resetData } = useContext(Context_Items)

    const [Preview, setPreview] = useState([])
    function FileIMG(e) {
        setPreview(e)
    }

    let array = []
    for (let x = 0; x < Preview.length; x++) {
        array.push(x)
    }

    let setImage = []
    items.v2image.map((i) => {
        setImage.push(i)
    })

    const [OpenS, setOpenS] = useState(false);
    const show = () => setOpenS(true);
    const Close = () => setOpenS(false);

    function Submit(e) {
        e.preventDefault()
        let array = []
        for (let x = 0; x < Preview.length; x++) {
            array.push(Preview[x].name)
        }


        axios.patch(data.Mainurl + data.PATCH + items._id, {
            'v1typeId': (e.target[1].value),
            'v2image': (Preview.length > 0 ? array : setImage),
            'v2Items': (e.target[2].value),
            'v2size': (e.target[6].value),
            'v2sprice': (e.target[3].value),
            'v2qty': (e.target[4].value),
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
                title: 'ແກ້ໄຂຂໍ້ມູນສຳເລັດ!'
            })

            Close()
            resetData()

            for (let x = 0; x < Preview.length; x++) {
                const Multiple = new FormData()
                Multiple.append('profile', Preview[x])

                axios.post('http://localhost:3022/Multiple/data', Multiple).then((res) => {
                    console.log(Multiple)
                })
            }
        })
    }

    return (
        <>
            <button onClick={show} className='py-1 px-2 rounded bg-blue-500 text-white mr-2'><i class="bi bi-pencil-square"></i> | ແກ້ໄຂ</button>
            <Modal
                open={OpenS}
                onClose={Close}
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
                                        <input type='file' className='p-2 w-full border rounded focus:border-blue-200' onChange={(e) => FileIMG(e.target.files)} placeholder=':.......' multiple />
                                    </div>
                                    <div className='grid grid-cols-2 gap-1 overflow-scroll max-h-80'>
                                        {
                                            Preview.length > 0 ?
                                                array.map((index) => {
                                                    return <img src={URL.createObjectURL(Preview[index])} />
                                                })
                                                :
                                                items.v2image.map((i) => {
                                                    return <img src={data.IMG + i} />
                                                })
                                        }
                                    </div>


                                </div>

                                <div>
                                    <div className='form-group'>
                                        <label>ປະເພດສີນຄ້າ</label>
                                        <select className='p-2 w-full border rounded focus:border-blue-200' placeholder=':.......' required >
                                            <option value={items.v1typeId?._id}>{items.v1typeId?.pro_type}</option>
                                            {APITYPE.map((item) => (
                                                <option value={item._id}>{item.pro_type}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='form-group mt-3'>
                                        <label>ຊື່ສີນຄ້າ</label>
                                        <input type='text' defaultValue={items.v2Items} className='p-2 w-full border rounded focus:border-blue-200' placeholder=':.......' required />
                                    </div>
                                    <div className='form-group mt-3'>
                                        <label>ລາຄາຂ່າຍ</label>
                                        <NumericFormat type='text' value={items.v2sprice} className='p-2 w-full border rounded focus:border-blue-200' placeholder=':.......' required />
                                    </div>
                                    <div className='flex'>
                                        <div className='form-group mt-3'>
                                            <label>ຈຳນວນ</label>
                                            <NumericFormat value={items.v2qty} className='p-2 w-full border rounded focus:border-blue-200' placeholder=':.......' required />
                                        </div>

                                        <div className='form-group mt-3'>
                                            <label>Color</label>
                                            <input defaultValue={items.v2color} className='p-2 w-full border rounded focus:border-blue-200' placeholder=':.......' required />
                                        </div>
                                    </div>
                                    <div className='form-group mt-3'>
                                        <label>ຂະໜາດ</label>
                                        <input type='text' defaultValue={items.v2size} className='p-2 w-full border rounded focus:border-blue-200' placeholder=':.......' required />
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
                                <button type='reset' onClick={Close} className='bg-red-500 rounded py-1 px-2 text-white'><i class="bi bi-x-diamond-fill"></i> | ຍົກເລີກ</button>
                            </div>
                        </form>

                    </div>
                </Box>
            </Modal>

        </>
    )
}
