import React from 'react'
import useFunctrions_Follow from '../useFunctrions.Follow'
import data from '../data'

export default function Home_Follow() {

    let {
        API
    } = useFunctrions_Follow()

    return (
        <div className='relative flex justify-center w-full h-full'>
            <div className='w-[80%] relative pb-[5%]'>
                <div className='text-center w-full'>
                    <p className='font-bold lg:text-[42px] text-[22px]'>Follow {API[0]?.Staus}</p>
                    <p className='text-[18px]'>@{API[0]?.Name}</p>
                </div>
                <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 py-10'>
                    <div>
                        <a href={API[0]?.is_Link} target='_blank' className='w-[50vh] h-[50vh]'>
                            <img src={data.IMG + (API[0]?.Image[0])} className='object-cover' />
                        </a>
                    </div>
                    <div>
                        <a href={API[0]?.is_Link} target='_blank' className='w-[50vh] h-[50vh]'>
                            <img src={data.IMG + (API[0]?.Image[1])} className='object-cover' />
                        </a>
                    </div>
                    <div>
                        <a href={API[0]?.is_Link} target='_blank' className='w-[50vh] h-[50vh]'>
                            <img src={data.IMG + (API[0]?.Image[2])} className='object-cover' />
                        </a>
                    </div>
                    <div>
                        <a href={API[0]?.is_Link} target='_blank' className='w-[50vh] h-[50vh]'>
                            <img src={data.IMG + (API[0]?.Image[3])} className='object-cover' />
                        </a>
                    </div>
                    <div>
                        <a href={API[0]?.is_Link} target='_blank' className='w-[50vh] h-[50vh]'>
                            <img src={data.IMG + (API[0]?.Image[4])} className='object-cover' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
