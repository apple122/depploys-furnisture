import React from 'react'
import useFunctions_Sale from '../useFunctions.Sale'
import data from '../data'
import { Link, useNavigate } from 'react-router-dom'

export default function Home_Sale() {

    let Naviagte = useNavigate()

    let {
        APIIT
    } = useFunctions_Sale()

    function Location(e) {
        Naviagte('/Category.01', { state: e })
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <div className='relative flex justify-center w-full h-full'>
            <div className='w-[80%] relative pb-[10%]'>
                <div className='w-full text-center'>
                    <p className='text-[42px] font-bold'>Featured Sale</p>
                    <div className='flex justify-center'>
                        <p className='bg-black w-[15vh] h-[3px]'></p>
                    </div>
                </div>
                <div className='grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-8 py-[5%] '>
                    {APIIT.filter((e) => e.is_active === 'true').slice(0, 10).map((item) => (
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
                    ))}
                </div>
                <div className='flex justify-center text-center'>
                    <Link to={'/Products'} className='px-7 py-3 border'>View All <i class="bi bi-arrow-right-short"></i></Link>
                </div>
            </div>
        </div>
    )
}
