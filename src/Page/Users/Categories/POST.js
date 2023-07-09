import React from 'react'
import Footer from '../../../Component/Footer/Footer'
import { Link, useLocation } from 'react-router-dom'
import data from './data'

export default function POST() {

    let item = useLocation().state

    console.log(item)

    return (
        <>
            <div className='w-full h-full flex justify-center pb-[5%]'>
                <div className='w-[80%] p-5'>
                    <p className='text-[32px] font-bold pb-5'>Furniture</p>
                    <p className='text-[32px] pb-5'>
                        <strong>Checkout</strong>
                        <p className='text-[24px]'>
                            Please enter your details below to complete your purchase
                        </p>
                    </p>
                    <div className='grid grid-cols-2 py-[5%]'>
                        <span className='w-[100%] border h-[0.5vh] rounded bg-green-600 relative'>
                            <p className='absolute -top-[8px] bg-green-800 w-[2vh] h-[2vh] rounded-full'></p>
                            <p className='absolute -top-[8px] -right-[9.5px] bg-green-800 w-[2vh] h-[2vh] rounded-full'></p>
                        </span>
                        <span className='w-[100%] text-end border h-[0.5vh] rounded bg-green-600 relative'>
                            <p className='absolute -top-[8px] -left-[11px] bg-green-800 w-[2vh] h-[2vh] rounded-full'></p>
                            <p className='absolute -top-[8px] -right-[0] bg-green-800 w-[2vh] h-[2vh] rounded-full'></p>
                        </span>
                    </div>

                    <div className='lg:flex gap-5 mt-5'>
                        <div className='w-[100%] mb-5 border p-5 hover:shadow-2xl transition delay-75'>
                            <div className='py-3 md:flex gap-5'>
                                <div className='w-[100%] h-[40vh]'>
                                    <p className='pb-3 text-[24px] font-bold'>ລາຍລະອຽດສີນຄ້າ</p>
                                    <hr className='pb-5' />
                                    <div className='sm:flex'>
                                        <div className='relative py-2 sm:w-[25%] w-100 h-[13vh]'>
                                            <img src={data.IMG + item.Image[2]} className='w-[10vh] h-[10vh] border-2 border-white rounded ml-4 absolute' />
                                            <img src={data.IMG + item.Image[1]} className='w-[10vh] h-[10vh] border-2 border-white rounded ml-2 absolute' />
                                            <img src={data.IMG + item.Image[0]} className='w-[10vh] h-[10vh] border-2 border-white rounded absolute' />
                                        </div>
                                        <div className='sm:px-5 sm:inline hidden'>
                                            <p className='font-bold'>{item.v2Items}</p>
                                            <p>Color: {item.sellColor}</p>
                                            <p>ຈຳນວນ: {item.sellQty}</p>
                                            <p className='text-red-500 font-bold'>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'LAK' }).format(item.sellbprice * item.sellQty)}</p>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <div className='relative py-2 sm:w-[25%] w-100 h-[13vh]'>
                                            <p>ປະເພດສິນຄ້າ: </p>
                                            <p>ຊື່ສີນຄ້າ: </p>
                                            <p>ສີ: </p>
                                            <p>ຈຳນວນສັງຊື້: </p>
                                            <p>ລາຄາຕໍ່ຊີ້ນ: </p>
                                            <p>ໂປຣໂມຊັ່ນ: </p>
                                        </div>
                                        <div className='relative py-2 sm:w-[25%] w-100 h-[13vh]'>
                                            <p>{item.sellType}</p>
                                            <p>{item.v2Items}</p>
                                            <p>{item.sellColor}</p>
                                            <p>{item.sellQty} qty</p>
                                            <p className='text-red-500'>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'LAK' }).format(item.sellbprice)}</p>
                                            <p className='text-red-500'>{item.sellPercent}%</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='w-[100%]'>
                                    <p className='pb-3 text-[24px] font-bold'>ສະຖານທີ່ຈັດສົ່ງ</p>
                                    <hr className='pb-5' />
                                    <div className='flex'>
                                        <div className='relative py-2 md:w-[25%] w-100 '>
                                            <p>ຊື່ ນາມສະກຸນ: </p>
                                            <p>ເບີໂທ: </p>
                                            <p>ບ້ານ: </p>
                                            <p>ເມືອງ: </p>
                                            <p>ແຂວງ: </p>
                                            <p>ຮ່ອມ: </p>
                                        </div>
                                        <div className='relative py-2 md:w-[25%] w-100'>
                                            <p>{item.Location[0] + ' ' + item.Location[1]}</p>
                                            <p>{item.Location[6]}</p>
                                            <p>{item.Location[2]}</p>
                                            <p>{item.Location[3]}</p>
                                            <p>{item.Location[4]}</p>
                                            <p>{item.Location[5]}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className='pb-5' />
                            <div className='flex'>
                                <div className='relative py-2 w-100'>
                                    <p>ຍອດເງີນກິບ: </p>
                                    <p className='text-red-500 text-[32px] font-bold'>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'LAK' }).format((item.sellbprice - (((item.sellbprice - item.sellPercent) * item.sellPercent) / 100)) * item.sellQty)} - <span className='text-[18px]'>{item.sellPercent}%</span></p>
                                    <p>ຍອດເງີນ ເລດເງີນ USD: </p>
                                    <p className='text-red-500 text-[32px] font-bold'>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(item.sellAmount)}</p>
                                    <hr className='mt-5 pb-5 w-[100%]' />
                                    <p>ຍອດເງີນສຳລະຈິງ: </p>
                                    <p className='text-red-500 text-[32px] font-bold'>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(item.sellAmount)}</p>
                                </div>
                            </div>
                            <hr className='pb-5 mt-5' />
                            <div>
                                <Link to={'/Products'} className='border py-1 px-3 bg-green-500 text-white rounded'><i class="bi bi-shop"></i> | ໜ້າລາຍການສີນຄ້າ</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
