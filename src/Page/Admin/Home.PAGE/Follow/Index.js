import React, { useState } from 'react'
import Navbar_Admin from '../../../../Component/Navbar/Navbar.Admin'
import useFunctions from './useFunctions'
import data from './data'
import { NumberFormatBase } from 'react-number-format'

export default function Index_Follow() {

    let {
        API,
        Submit,

        name,
        setChange,
        setF,
        setI,
        setL,
        changeWA,

        is_active,

        setIn0,
        setIn1,
        setIn2,
        setIn3,
        setIn4,

        In0,
        In1,
        In2,
        In3,
        In4,
    } = useFunctions()

    const str = (API[0]?.WhatApp) !== undefined ? (API[0]?.WhatApp) : ''
    const NumberWhatApp = str.substring(18);

    return (
        <>
            <Navbar_Admin />

            <div class="p-4 sm:ml-64">
                <div class="border-2 border-gray-200 rounded-lg dark:border-gray-200">
                    <div class="p-2 grid grid-cols-2 gap-4">
                        <div class="rounded">
                            <p class="text-2xl">ຈັດການ ຊ່ອງທາງການຕິດຕາມ</p>
                        </div>
                        <div class="flex justify-end rounded">
                        </div>
                    </div>
                </div>

                <div class="grid md:grid-cols-2 gap-5 p-5 mt-2 border rounded">

                    <div className='grid grid-cols-1'>
                        <p className='text-[22px] font-bold'>ປ້ອນລີ້ງຊ່ອງທາງຕິດຕາມ</p>
                        <p>ກະລຸນາເລືອກລີ້ງທີ່ຈະໂຊໃນໜ້າຫຼັກ Follow Facebook</p>
                        <hr className='pb-3 mt-2' />
                        <div className='grid pb-3'>
                            <label>#Name</label>
                            <div className='flex'>
                                <input type='text' className='py-1 px-2 border rounded w-[100%]' defaultValue={API[0]?.Name} onChange={(e) => setChange(e.target.value)} placeholder='#:.....' required />
                            </div>
                        </div>
                        <div className='grid pb-3'>
                            <label>Link Facebook</label>
                            <div className='flex'>
                                <input type='url' className='py-1 px-2 border rounded w-[80%]' defaultValue={API[0]?.Facebook} onChange={(e) => setF(e.target.value)} placeholder='URL:.....' />
                                {
                                    API[0]?.Staus == 'Facebook' ?
                                        <button type='button' className='border rounded py-1 px-2 text-green-500'><i class="bi bi-check-circle-fill"></i></button>
                                        :
                                        <button type='button' className='border rounded py-1 px-2 text-red-500' onClick={() => is_active('Facebook')}><i class="bi bi-x-circle"></i></button>
                                }
                            </div>
                        </div>
                        <div className='grid pb-3'>
                            <label>Link Instagram</label>
                            <div className='flex'>
                                <input type='url' className='py-1 px-2 border rounded w-[80%]' defaultValue={API[0]?.Instagram} onChange={(e) => setI(e.target.value)} placeholder='URL:.....' />
                                {
                                    API[0]?.Staus == 'Instagram' ?
                                        <button type='button' className='border rounded py-1 px-2 text-green-500'><i class="bi bi-check-circle-fill"></i></button>
                                        :
                                        <button type='button' className='border rounded py-1 px-2 text-red-500' onClick={() => is_active('Instagram')}><i class="bi bi-x-circle"></i></button>
                                }
                            </div>
                        </div>
                        <div className='grid pb-3'>
                            <label>Link Line</label>
                            <div className='flex'>
                                <input type='url' className='py-1 px-2 border rounded w-[80%]' defaultValue={API[0]?.Line} onChange={(e) => setL(e.target.value)} placeholder='URL:.....' />
                                {
                                    API[0]?.Staus == 'Line' ?
                                        <button type='button' className='border rounded py-1 px-2 text-green-500'><i class="bi bi-check-circle-fill"></i></button>
                                        :
                                        <button type='button' className='border rounded py-1 px-2 text-red-500' onClick={() => is_active('Line')}><i class="bi bi-x-circle"></i></button>
                                }
                            </div>
                        </div>
                        <div className='grid pb-3'>
                            <label>Link WhatApp</label>
                            <div className='flex'>
                                <span className='py-1 px-2 border rounded'>+856</span>
                                <NumberFormatBase className='py-1 px-2 border rounded w-[73%]' value={(NumberWhatApp)} onChange={(e) => changeWA(e.target.value)} placeholder=':.....' />
                                {
                                    API[0]?.Staus == 'WhatApp' ?
                                        <button type='button' className='border rounded py-1 px-2 text-green-500'><i class="bi bi-check-circle-fill"></i></button>
                                        :
                                        <button type='button' className='border rounded py-1 px-2 text-red-500' onClick={() => is_active('WhatApp')}><i class="bi bi-x-circle"></i></button>
                                }
                            </div>
                        </div>

                        <div className=''>
                            <button type='button' onClick={Submit} className='border rounded bg-green-500 py-1 px-3 text-white'><i class="bi bi-cloud-download"></i> | Submit</button>
                        </div>
                    </div>

                    <div className='text-center pt-5'>
                        <p className='text-[22px] font-bold'>ຕົວຢ່າງຂໍ້ມູນເລືອກສະແດງ</p>
                        <p>ຂໍ້ມູນເລືອກສະແດງໃນໜ້າຫຼັກ Follow ............</p>
                        <hr className='pb-3 mt-2' />
                        <div className='mt-5'>
                            <p className='text-[32px] font-bold'>Follow {API[0]?.Staus}</p>
                            <p className=''>@{name !== '' ? name : API[0]?.Name}</p>
                            <div className='grid lg:grid-cols-5 md:grid-cols-3 gap-3 mt-2'>
                                <label for='In0' className='border rounded h-[15vh] overflow-hidden object-cover flex justify-center items-center'><img src={In0 !== '' ? URL.createObjectURL(In0) : data.IMG + (API[0]?.Image[0])} className='w-[100%] h-[100%] object-cover' alt='IMAGE' /></label>
                                <label for='In1' className='border rounded h-[15vh] overflow-hidden object-cover flex justify-center items-center'><img src={In1 !== '' ? URL.createObjectURL(In1) : data.IMG + (API[0]?.Image[1])} className='w-[100%] h-[100%] object-cover' alt='IMAGE' /></label>
                                <label for='In2' className='border rounded h-[15vh] overflow-hidden object-cover flex justify-center items-center'><img src={In2 !== '' ? URL.createObjectURL(In2) : data.IMG + (API[0]?.Image[2])} className='w-[100%] h-[100%] object-cover' alt='IMAGE' /></label>
                                <label for='In3' className='border rounded h-[15vh] overflow-hidden object-cover flex justify-center items-center'><img src={In3 !== '' ? URL.createObjectURL(In3) : data.IMG + (API[0]?.Image[3])} className='w-[100%] h-[100%] object-cover' alt='IMAGE' /></label>
                                <label for='In4' className='border rounded h-[15vh] overflow-hidden object-cover flex justify-center items-center'><img src={In4 !== '' ? URL.createObjectURL(In4) : data.IMG + (API[0]?.Image[4])} className='w-[100%] h-[100%] object-cover' alt='IMAGE' /></label>

                                <input type='file' id='In0' className='hidden' onChange={(e) => setIn0(e.target.files[0])} />
                                <input type='file' id='In1' className='hidden' onChange={(e) => setIn1(e.target.files[0])} />
                                <input type='file' id='In2' className='hidden' onChange={(e) => setIn2(e.target.files[0])} />
                                <input type='file' id='In3' className='hidden' onChange={(e) => setIn3(e.target.files[0])} />
                                <input type='file' id='In4' className='hidden' onChange={(e) => setIn4(e.target.files[0])} />
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}
