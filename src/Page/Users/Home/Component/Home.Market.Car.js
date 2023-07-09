import React from 'react'

export default function Home_Market_Car() {
    return (
        <div className='relative flex justify-center w-full h-full'>
            <div className='2xl:w-[70%] xl:w-[80%] w-[90%] relative pb-[5%] flex gap-6'>
                <div className='relative 2xl:w-[400px] 2xl:h-[600px] xl:w-[350px] xl:h-[500px] lg:w-[300px] lg:h-[400px] overflow-hidden'>
                    <img src='https://freebw.com/templates/novas/images/hp-1-banner-1.jpg' className='relative z-10 object-cover w-full h-full ease-in duration-200' />
                    <div className='absolute z-20 bottom-[20%] flex justify-center text-center w-full'>
                        <div className='grid gap-2 border p-6'>
                            <p className='bg-white text-black py-1 px-3 md:text-[22px] text-[12px] font-bold'>SALE UP TO</p>
                            <p className='lg:text-[42px] md:text-[22px] text-[12px] font-bold text-white'>50% OFF</p>
                            <button className='text-white md:text-[22px] text-[12px]'>Shop Now <i class="bi bi-arrow-right-short"></i></button>
                        </div>
                    </div>
                </div>
                <div className='relative 2xl:w-[900px] 2xl:h-[600px] xl:w-[750px] xl:h-[500px] lg:w-[650px] lg:h-[400px] overflow-hidden'>
                    <img src='https://freebw.com/templates/novas/images/hp-1-banner-2.jpg' className='relative z-10 object-cover w-full h-full ease-in duration-200' />
                    <div className='absolute z-20 top-[10%] flex justify-center text-center w-full'>
                        <div className='grid gap-2 border p-6'>
                            <p className='text-white'><span className='text-[22px] font-bold'>GET</span> <strong className='text-[42px] font-bold'>50%</strong> <span className='text-[22px] font-bold'>OFF</span></p>
                            <p className='text-[22px] text-white font-bold'>on Elisa Armchair collection</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
