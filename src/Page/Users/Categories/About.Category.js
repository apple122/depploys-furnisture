import React, { useContext } from 'react'
import ConCategory from './ConCategory'
import { useLocation } from 'react-router-dom'
import data from '../Home/data'

export default function About_Category() {
    let item = useLocation().state
    return (
        <div className='relative flex justify-center w-full h-full pb-[10%]'>
            <div className='lg:w-[70%] w-[83%] p-5 relative'>
                <div className='p-5 bg-gray-200'>
                    <label className='text-[24px] font-bold'>ຂໍ້ມູນສິນຄ້າ</label>
                </div>
                <div className='px-[5%] py-5 bg-gray-100'>
                    <label className='text-[20px]'>{item.v2remark}</label>
                </div>

                <div className='p-5 bg-gray-200 mt-2'>
                    <label className='text-[24px] font-bold'>ຄູນສົມບັດ</label>
                </div>
                <div className='px-[5%] py-5 bg-gray-100 flex'>
                    <div className='w-[20vh]'>
                        <p className='w-full py-1'><label className='text-[22px] font-bold pr-[5%]'>ສີນຄ້າ</label></p>
                        <p className='w-full py-1'><label className='text-[22px] font-bold pr-[5%]'>ປະເພດ</label></p>
                        <p className='w-full py-1'><label className='text-[22px] font-bold pr-[5%]'>ສີ</label></p>
                        <p className='w-full py-1'><label className='text-[22px] font-bold pr-[5%]'>ຂະໜາດ</label></p>
                    </div>
                    <div className='text-start w-[80%]'>
                        <p className='w-full py-1'><label className='text-[22px]'>{item.v2Items}</label></p>
                        <p className='w-full py-1'><label className='text-[22px]'>{item.v1typeId?.pro_type}</label></p>
                        <p className='w-full py-1'><label className='text-[22px]'>{item.v2color}</label></p>
                        <p className='w-full py-1'><label className='text-[22px]'>{item.v2size}</label></p>
                    </div>
                </div>

                <div className='py-5 mt-5'>
                    <label className='text-[24px] font-bold'>ລາຍລະອຽດສີນຄ້າ</label>
                    <div className='w-full px-[5%] py-5 text-[22px]'>
                        {item.v2Items + ' '}
                        {item.v1typeId?.pro_type + ' '}
                        {item.v2size + ' '}
                        {item.v2color + ' '}
                    </div>
                    <div className='w-full px-[5%] py-5 text-[20px]'>
                        {item.v2remark}
                    </div>
                    <div className='px-[5%] py-5'>
                        <img src={data.IMG + item.v2image[0]} className='object-cover' />
                    </div>
                </div>
            </div>
        </div>
    )
}
