import React from 'react'
import { useContext } from 'react'
import { Context_Products } from '.'
import { useState } from 'react'
import data from './data'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Products_01() {
    let Naviagte = useNavigate()

    let location = useLocation()

    const { API, APITEM, ChangeType } = useContext(Context_Products)

    const [Nrange, setNrange] = useState(2500000)
    function range(e) {
        setNrange((e.target.value))
    }

    const LoopQnumberDrw = [...new Set(APITEM.map(item => item.v2color))]

    const [Color, setColor] = useState('')

    function Location(e) {
        Naviagte('/Category.01', { state: e })
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    var price = 30;
    var sale = 150000;
    var korting = (sale - (((sale - price) * price) / 100));

    return (
        <>
            <div className='relative flex justify-center w-full h-full'>
                <div className='w-[80%] relative py-[3%] grid gap-5'>
                    <div className='w-full text-center'>
                        <strong className='font-bold text-[32px]'>Products Type</strong>
                    </div>
                    <div className='grid grid-cols-3 gap-4 border p-2 '>
                        <div>
                            <select className='w-full border py-1 px-2 rounded' onChange={(e) => ChangeType(e.target.value)}>
                                <option>ຄົ້ນຫາດ້ວຍປະເພດ</option>
                                {API.map((i) => (
                                    <option>{i.pro_type}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <select className='w-full border py-1 px-2 rounded' onChange={(e) => setColor(e.target.value)}>
                                <option value=''>Color</option>
                                {LoopQnumberDrw.map((i) => (
                                    <option value={i}>{i}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label>
                                ຈຳນວນເງີນ - ຈຳກັດ
                                <strong className='px-2 text-red-500'>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'LAK' }).format(Nrange)}</strong>
                            </label>
                            <input type='range' onChange={range} min="150000" max="9000000" defaultValue={2500000} className='w-full border py-1 px-2 rounded' />
                        </div>
                    </div>

                    <div className='grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-8 py-[5%] '>
                        {
                            Color !== '' ? APITEM.filter((e) => e.v2color === Color && e.v2sprice < Nrange && e.is_active === 'true').map((item) => (
                                <div onClick={() => Location(item)} className='relative border md:w-[260px] rounded overflow-hidden bg-white hover:shadow-lg hover:shadow-cyan-500/50 ease-in duration-200'>
                                    <div className='absolute top-[5%] w-full z-20'>
                                        <span className='bg-blue-500 text-white px-2 py-1 text-[12px] tracking-widest opacity-[0.6]'>NEW</span>
                                        <span className='float-right'><i class="bi bi-heart mr-3"></i></span>
                                    </div>
                                    <div className='md:w-[260px] md:h-[300px]'>
                                        <img src={data.IMG + item.v2image[0]} className='relative z-10 object-cover w-full h-full scale-100 hover:scale-110 ease-in duration-200' />
                                    </div>
                                    <div className='relative z-20 p-5 flex'>
                                        <div className='w-[80%]'>
                                            <p className='text-[18px] font-bold'>{item.v2Items} <br />{item.v1typeId?.pro_type}</p>
                                            <p className='text-[16px]'>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'LAK' }).format(item.v2sprice)}</p>
                                        </div>
                                        <div className='w-[10%]'>
                                            <button className='border p-2 rounded w-[40px]'><i class="bi bi-bag-heart-fill"></i></button>
                                        </div>
                                    </div>
                                </div>
                            ))
                                :
                                APITEM.filter((e) => e.v2sprice < Nrange && e.is_active === 'true').map((item) => (
                                    <div onClick={() => Location(item)} className='relative border md:w-[260px] rounded overflow-hidden bg-white hover:shadow-lg hover:shadow-cyan-500/50 ease-in duration-200'>
                                        <div className='absolute top-[5%] w-full z-20'>
                                            <span className={`${item.v2percent === 0 ? 'bg-blue-500' : 'bg-red-500'} text-white px-2 py-1 text-[12px] tracking-widest opacity-[0.8]`}>{item.v2percent === 0 ? "NEW" : ("SALE " + item.v2percent + "%")}</span>
                                            <span className='float-right'><i class="bi bi-heart mr-3"></i></span>
                                        </div>
                                        <div className='md:w-[260px] md:h-[300px]'>
                                            <img src={data.IMG + item.v2image[0]} className='relative z-10 object-cover w-full h-full scale-100 hover:scale-110 ease-in duration-200' />
                                        </div>
                                        <div className='relative z-20 p-5 flex'>
                                            <div className='w-[80%]'>
                                                <p className='text-[18px] font-bold'>{item.v2Items} <br /> {item.v1typeId?.pro_type}</p>
                                                <p className={`text-[16px] ${item.v2percent !== 0 ? 'line-through' : 'font-bold'}`}>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'LAK' }).format(item.v2sprice)}</p>
                                                {
                                                    item.v2percent !== 0 ?
                                                        <p className='text-[18px] text-red-500 font-bold'>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'LAK' }).format((item.v2sprice - (((item.v2sprice - item.v2percent) * item.v2percent) / 100)))}</p>
                                                        : ''
                                                }
                                            </div>
                                            <div className='w-[10%]'>
                                                <button className='border p-2 rounded w-[40px]'><i class="bi bi-bag-heart-fill"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
