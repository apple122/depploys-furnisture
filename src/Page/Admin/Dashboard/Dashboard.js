import React from 'react'
import Navbar_Admin from '../../../Component/Navbar/Navbar.Admin'
import useFunctions from './useFunctions'
import { useState } from 'react'
import moment from 'moment'

export default function Dashboard() {

    let {
        APICURRENCY,

        APITYPE,
        APIUsers,
        APIITEMS,
        APISALE
    } = useFunctions()

    const [Indate, setIndate] = useState('')
    const [Outdate, setOutdate] = useState('')

    // API SALE
    const sellAmount = APISALE.map((item) => (
        (Indate && Outdate).length > 0 ?
            moment(item.curdate).format("YYYY-MM-DD") > Indate ?
                moment(item.curdate).format("YYYY-MM-DD") < Outdate ?
                    item.sellAmount
                    : ''
                : ''
            : item.sellAmount
    )).reduce((prev, curr) => prev + curr, 0);

    return (
        <>
            <Navbar_Admin />
            <div class="p-4 sm:ml-64">
                <div class="border-gray-200 rounded-lg dark:border-gray-700">
                    <div class="grid gap-4 mb-4">
                        <div class="flex items-center h-[70px] px-5 rounded border-rounded bg-gray-800 text-white">
                            <p class="text-2xl">Dashboard</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-4 gap-4 mb-4">
                        <div class="items-center p-5 rounded bg-gray-50 h-auto dark:bg-gray-800">
                            <p class="text-3xl dark:text-white">{APITYPE.length}</p>
                            <p class="text-xl pb-2 text-gray-400">ປະເພດສີນຄ້າ ທັ້ງໝົດ</p>
                            <p class="text-xl text-gray-400 dark:text-gray-500">+</p>
                        </div>
                        <div class="items-center p-5 rounded bg-gray-50 h-auto dark:bg-gray-800">
                            <p class="text-3xl dark:text-white">{APIITEMS.length}</p>
                            <p class="text-xl pb-2 text-gray-400">ລາຍການສີນຄ້າ ທັ້ງໝົດ</p>
                            <p class="text-xl text-gray-400 dark:text-gray-500">+</p>
                        </div>
                        <div class="items-center p-5 rounded bg-gray-50 h-auto dark:bg-gray-800">
                            <p class="text-3xl dark:text-white">{APISALE.length}</p>
                            <p class="text-xl pb-2 text-gray-400">ລາຍການຂ່າຍ ທັ້ງໝົດ</p>
                            <p class="text-xl text-gray-400 dark:text-gray-500">+</p>
                        </div>
                        <div class="items-center p-5 rounded bg-gray-50 h-auto dark:bg-gray-800">
                            <p class="text-3xl dark:text-white">{APIUsers.length}</p>
                            <p class="text-xl pb-2 text-gray-400">All Users</p>
                            <p class="text-xl text-gray-400 dark:text-gray-500">+</p>
                        </div>
                    </div>
                    <hr />
                    <div class="grid gap-4 mb-4 mt-2">
                        <div class="flex items-center h-[70px] px-5 rounded border-rounded bg-gray-800 text-white">
                            <p class="text-2xl">ສະຫຼຸບລາຍຮັບທັັງໝົດ</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="items-center p-5 rounded bg-gray-50 h-auto dark:bg-gray-800">
                            <div className='flex gap-5 pb-5 w-[70%]'>
                                <p class="text-3xl dark:text-white py-1">ຄົ້ນຫາ</p>
                                <input type='date' className='border py-1 px-2 w-full rounded' onChange={(e) => setIndate(e.target.value)} />
                                -
                                <input type='date' className='border py-1 px-2 w-full rounded' onChange={(e) => setOutdate(e.target.value)} />
                            </div>
                            <hr />
                            <p class="text-xl pb-2 text-gray-400 mt-2">ລາຍການຂ່າຍ ຍອດເງີນລວມ</p>
                            <p class="text-3xl dark:text-white py-1">+ {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'LAK' }).format(sellAmount * (APICURRENCY[0]?.Currency))}</p>
                            <p class="text-3xl dark:text-white py-1 mb-2">+ {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(sellAmount)}</p>
                            <hr />
                            <p class="text-xl pb-2 text-gray-400 py-1">ຍອດຮັບແທ້ ລວມ</p>
                            <p class="text-3xl dark:text-white">+ {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'LAK' }).format(sellAmount * (APICURRENCY[0]?.Currency))}</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
