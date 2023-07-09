import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../../Component/Navbar/Navbar'
import data from '../Home/data'
import useFunction from './useFunction'

export default function Category_01() {

    let {
        location,
        Buy,

        Plus,
        Drop,
        Number,
    } = useFunction()

    const [plus, setplus] = useState(0)
    function PlusIMG(e) {
        setplus(e)
    }

    return (
        <>
            <Navbar />

            <div className='relative flex justify-center w-full h-full pt-[4%]'>
                <div className='w-[90%] p-5 relative lg:flex grid-cols-2 gap-5'>
                    <div className='flex justify-center lg:w-[50%] mb-[10%]'>
                        <div className='w-[50%]'>
                            <div className='relative'>
                                <div className='transition hover:bg-gray-400 hover:opacity-[50%] opacity-0 delay-75 w-[100%] h-[100%] flex justify-center items-center font-bold text-[40px] absolute'>
                                    <i class="bi bi-fullscreen"></i>
                                </div>
                                <img src={data.IMG + location.v2image[plus]} className='object-cover' />
                            </div>

                            <div className='grid mt-2 gap-2 grid-cols-3 sm:grid-cols-5'>
                                {location.v2image.map((i, index) => (
                                    <img src={data.IMG + i} onClick={() => PlusIMG(index)} className='w-[100%] h-[10vh] object-cover' />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='pl-5 lg:w-[50%]'>
                        <p className='text-[32px] font-bold'>{location.v2Items}</p>
                        <hr className='py-2' />
                        {/* <p className='text-[20px] pb-2'>Lream auhsdiagiwgdiasdasd</p> */}
                        <p className='text-[22px]'>ລາຄາຂ່າຍ</p>
                        <p className='text-[32px] font-bold pb-2'>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'LAK' }).format(location.v2sprice)}</p>
                        <p className='text-[26px] pb-2'>Size: {location.v2size}</p>
                        <p className='text-[26px] pb-2'>Color: {location.v2color}</p>
                        <div className='flex w-full pb-5'>
                            <button className='border text-center font-bold w-[10%] bg-black text-white' onClick={Drop}>-</button>
                            <label className='text-center font-bold w-[20%] border'>{Number}</label>
                            <button className='border text-center font-bold w-[10%] bg-red-700 text-white' onClick={Plus}>+</button>
                        </div>
                        <div className='grid grid-cols-2 pb-2'>
                            <button className='border py-2 bg-blue-500 text-white' onClick={() => Buy(location)}>ຊື້ສິນຄ້າ</button>
                            <button className='border py-2 bg-black text-white'><i class="bi bi-cart-plus-fill"></i> Add to cart</button>
                        </div>
                        <p className={`${location.v2percent !== 0 ? 'text-[30px]' : 'text-[32px]'} pb-2`}>ເງີນລວມ: <label className={`text-blue ${location.v2percent !== 0 ? 'line-through' : 'font-bold'}`}>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'LAK' }).format(location.v2sprice * Number)}</label></p>
                        {
                            location.v2percent !== 0 ?
                                <p className='text-[32px] text-red-500 font-bold pb-2'>ເງີນລວມ: <label className='text-blue'>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'LAK' }).format((location.v2sprice - (((location.v2sprice - location.v2percent) * location.v2percent) / 100)) * Number)} <span className='ml-5 text-[22px]'>SALE {location.v2percent + '%'}</span></label></p>
                                : ''
                        }
                        <p className='text-[22px] font-bold pb-2'>ຕິດຕໍ່ໂດຍຕົງ: <a href='https://wa.me/+85602095188702' target='_blank'><i class="bi bi-whatsapp text-green-500"></i></a></p>
                    </div>
                </div>
            </div>
        </>
    )
}
