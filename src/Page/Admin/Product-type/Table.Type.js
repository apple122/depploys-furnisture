import React, { useContext, useState } from 'react'
import Form_Type from './Form.Type'
import { Context_Type } from './Product.type'
import Edit_Type from './Edit.type'
import moment from 'moment'

export default function Table_Type() {

    const { API, Delete, is_active } = useContext(Context_Type)

    let x = 1

    const [value, setValue] = useState('')
    const [tableFiller, setTablefiller] = useState([])
    const fillterData = (e) => {
        const fillterTable = API.filter((o) => Object.keys(o).some(k =>
            String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
        ));
        setTablefiller([...fillterTable])
        setValue(e.target.value);
    }

    return (
        <>
            <div class="p-4 sm:ml-64">
                <div class="border-2 bg-gray-200 rounded-lg dark:bg-gray-900 dark:text-white">
                    <div class="p-3 grid grid-cols-2 gap-4">
                        <div class="rounded">
                            <p class="text-2xl">ປະເພດສີນຄ້າ</p>
                        </div>
                        <div class="flex justify-end rounded">
                            <Form_Type />
                        </div>
                    </div>
                </div>

                <div className='w-[50%] py-2'>
                    <input className='w-full border py-1 px-2' onChange={fillterData} placeholder='search:.......' />
                </div>

                <div class="relative overflow-x-auto shadow-md sm:rounded mt-2">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 dark:text-white uppercase bg-gray-200 dark:bg-gray-900">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    #
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    ປະເພດສີນຄ້າ
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    ວັນທີ່ບັນທືກ
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    ສະຖານະ
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    ຈັດການ
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {value.length > 0 ? tableFiller.map((item) => (
                                <tr class="border-b dark:border-gray-200 text-black hover:bg-gray-200">
                                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                                        {x++}
                                    </th>
                                    <td class="px-6 py-4">
                                        {item.pro_type}
                                    </td>
                                    <td class="px-6 py-4">
                                        {moment(item.pro_curdate).format('DD-MM-YYYY H:m')}
                                    </td>
                                    <td class="px-2 py-4">
                                        {
                                            item.pro_status == 'true' ?
                                                <button className='py-1 px-2 rounded bg-green-500 text-white mr-2' onClick={() => is_active(item)}><i class="bi bi-toggle-on"></i> | ສະແດງປະເພດ</button>
                                                :
                                                <button className='py-1 px-2 rounded bg-gray-500 text-white mr-2' onClick={() => is_active(item)}><i class="bi bi-toggle-off"></i> | ປິດສະແດງປະເພດ</button>
                                        }
                                    </td>
                                    <td class="px-2 py-4">
                                        <button className='py-1 px-2 rounded bg-red-500 text-white mr-2' onClick={() => Delete(item)}><i class="bi bi-trash3-fill"></i> | Delete</button>
                                        <Edit_Type Items={item} />
                                    </td>

                                </tr>
                            )) : API.map((item) => (
                                <tr class="border-b dark:border-gray-200 text-black hover:bg-gray-200">
                                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                                        {x++}
                                    </th>
                                    <td class="px-6 py-4">
                                        {item.pro_type}
                                    </td>
                                    <td class="px-6 py-4">
                                        {moment(item.pro_curdate).format('DD-MM-YYYY H:m')}
                                    </td>
                                    <td class="px-2 py-4">
                                        {
                                            item.pro_status == 'true' ?
                                                <button className='py-1 px-2 rounded bg-green-500 text-white mr-2' onClick={() => is_active(item)}><i class="bi bi-toggle-on"></i> | ສະແດງປະເພດ</button>
                                                :
                                                <button className='py-1 px-2 rounded bg-gray-500 text-white mr-2' onClick={() => is_active(item)}><i class="bi bi-toggle-off"></i> | ປິດສະແດງປະເພດ</button>
                                        }
                                    </td>
                                    <td class="px-2 py-4">
                                        <button className='py-1 px-2 rounded bg-red-500 text-white mr-2' onClick={() => Delete(item)}><i class="bi bi-trash3-fill"></i> | Delete</button>
                                        <Edit_Type Items={item} />
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


            </div>
        </>
    )
}
