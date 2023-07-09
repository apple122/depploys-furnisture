import React, { useState } from 'react'
import useFunctions_Type from '../useFunctions.Type'
import data from '../data'

export default function Home_Type() {

    let {
        APITP,
        APITT
    } = useFunctions_Type()

    return (
        <>
            <div className='relative flex justify-center w-full h-full'>
                <div className='w-[80%] relative py-[10%] md:flex gap-6 flex justify-center'>
                    {APITP.filter((e) => e.pro_status == "true").slice(0, 3).map((item, index) => (
                        index == 1 ?
                            APITT.filter((e) => e.v1typeId?.pro_type == item.pro_type).slice(0, 1).map((img) => (
                                <div className='relative lg:w-[50vh] md:w-[30vh] lg:min-h-[55vh] md:min-h-[35vh] overflow-hidden rounded'>
                                    <img src={data.IMG + img.v2image[0]} className='relative z-10 object-cover w-full h-full scale-100 hover:scale-110 ease-in duration-200' />
                                    <p className='absolute z-20 left-0 bottom-[5%] p-2 bg-white'><span className='lg:text-[22px]'>- {item.pro_type}</span> - {APITT.filter((e) => e.v1typeId?.pro_type == item.pro_type).length} Products</p>
                                </div>
                            ))
                            :
                            APITT.filter((e) => e.v1typeId?.pro_type == item.pro_type).slice(0, 1).map((img) => (
                                <div className='relative lg:w-[50vh] lg:h-[50vh] md:w-[30vh] md:h-[30vh] lg:mt-[2vh] overflow-hidden'>
                                    <img src={data.IMG + img.v2image[0]} className='relative z-10 object-cover w-full h-full scale-100 hover:scale-110 ease-in duration-200' />
                                    <p className='absolute z-20 left-0 bottom-[5%] p-2 bg-white'><span className='lg:text-[22px]'>- {item.pro_type}</span> - {APITT.filter((e) => e.v1typeId?.pro_type == item.pro_type).length} Products</p>
                                </div>
                            ))

                    ))}
                </div>
            </div>
        </>
    )
}
