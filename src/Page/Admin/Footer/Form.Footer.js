import React from 'react'

export default function Form_Footer() {
    return (
        <>
            <div class="p-4 sm:ml-64">
                <div class="border-2 border-gray-200 rounded-lg dark:border-gray-200">
                    <div class="p-2 grid grid-cols-2 gap-4">
                        <div class="rounded">
                            <p class="text-2xl">ຂໍ້ມູນສີນຄ້າ</p>
                        </div>
                        <div class="flex justify-end rounded">
                        </div>
                    </div>
                </div>

                <div class="relative overflow-x-auto shadow-md sm:rounded mt-2">
                    <div className='w-[50%] py-2'>
                        <input className='w-full border py-1 px-2' placeholder='search:.......' />
                    </div>
                   
                </div>


            </div>
        </>
    )
}
