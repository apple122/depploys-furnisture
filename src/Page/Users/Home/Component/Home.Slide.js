import React, { useState } from 'react'
import useFunctions_Slide from '../useFunctions.Slide'
import data from '../data'
import { useEffect } from 'react'

export default function Home_Slide() {

    let {
        APISL
    } = useFunctions_Slide()

    const [Time, setTIME] = useState(false)
    if(Time !== true){
        setTimeout(() => {
            scrollright()
        }, 3500)
    }else{
        setTimeout(() => {
            setTIME(false)
        }, 8500)
    }

    const [Page, nextPage] = useState(0)
    function scrollleft() {
        const isFirstSlide = Page === 0
        const newIndex = isFirstSlide ? APISL.length - 1 : Page - 1
        nextPage(newIndex)
        setTIME(true)
    }

    function scrollright() {
        const islanSlide = Page === APISL.length - 1
        const newIndex = islanSlide ? 0 : Page + 1
        nextPage(newIndex)
        setTIME(true)
    }

    return (
        APISL.length !== 0 ?
            <>
                <div className='relative flex justify-center w-full h-full'>
                    <div className='w-[90%] h-[90vh] overflow-hidden relative'>
                        <div className='relative z-10 object-cover'>
                            {APISL.map((item, index) => (
                                index == Page ? <img data-aos="fade-left" className='object-cover' src={data.IMG + item.Image} /> : ''
                            ))}
                        </div>
                        <div className='w-full p-2 absolute top-[20%] z-20 text-center text-white'>
                            <p className='lg:text-[22px] font-bold'>BEST SELLERS</p>
                            {APISL.map((item, index) => (
                                index == Page ? <p className='lg:text-[62px] md:text-[42px]'><span className='font-bold'>{item.Title}</span></p> : ''
                            ))}

                        </div>
                        <div className='p-2 md:absolute right-[2%] lg:bottom-[5%] bottom-[2%] z-20 text-center'>
                            <button className='border lg:p-2 mr-5' onClick={scrollleft}><i class="bi bi-chevron-compact-left"></i></button>
                            <span className='font-bold lg:text-[52px] text-[28px]'>{Page + 1}</span>
                            <span className='font-bold text-[22px]'>/ {APISL.length}</span>
                            <button className='border lg:p-2 ml-5' onClick={scrollright}><i class="bi bi-chevron-right"></i></button>
                        </div>

                    </div>
                </div>
            </>
            : ''
    )
}
