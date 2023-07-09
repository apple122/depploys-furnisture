import React, { useContext } from 'react'
import Form_slide from './Form.slide'
import { Context_Slide } from './Slide'
import data from './data'
import Edit_Slide from './Edit.Slide'

export default function Table_slide() {

    const { API, Del } = useContext(Context_Slide)

    return (
        <>
            <div class="p-4 sm:ml-64">
                <div class="border-2 border-gray-200 rounded-lg dark:border-gray-200">
                    <div class="p-2 grid grid-cols-2 gap-4">
                        <div class="rounded">
                            <p class="text-2xl">ສະໄລສ໌</p>
                        </div>
                        <div class="flex justify-end rounded">
                            <Form_slide />
                        </div>
                    </div>
                </div>

                <div className='grid gap-5'>
                    {API.map((item) => (
                        <div class="relative overflow-x-auto shadow-md sm:rounded mt-2">
                            <div className='flex gap-2 pb-1'>
                                <p className='px-5'>{item.Title}</p>
                                <button className='rounded bg-red-500 py-1 px-2 text-white' onClick={() => Del(item._id)}><i class="bi bi-trash3"></i> ລົບຂໍ້ມູນ</button>
                                <Edit_Slide Item={item}/>
                            </div>
                            <div className='w-full overflow-hidden rounded'>
                                <img src={data.IMG + item.Image} className='w-full max-h-80 object-cover' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
