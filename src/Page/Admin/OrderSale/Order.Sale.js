import React, { useContext } from 'react'
import { Context_OrderSale } from './Index'
import data from './data'
import moment from 'moment'
import { useState } from 'react'

export default function Order_Sale() {

    const { API, Currency } = useContext(Context_OrderSale)
    let x = 1

    const sellQty = API.map(item => item.sellQty).reduce((prev, curr) => prev + curr, 0);
    const sellAmount = API.map(item => item.sellAmount).reduce((prev, curr) => prev + curr, 0);

    const [value, setValue] = useState('')
    const [tableFiller, setTablefiller] = useState([])
    const fillterData = (e) => {
        const fillterTable = API.filter((o) => Object.keys(o).some(k =>
            String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
        ));
        setTablefiller([...fillterTable])
        setValue(e.target.value);
    }

    const [Indate, setIndate] = useState('')
    const [Outdate, setOutdate] = useState('')

    return (
        <div class="p-4 sm:ml-64">
            <div class="border-2 bg-gray-200 rounded-lg dark:bg-gray-900 dark:text-white">
                <div class="p-3 grid grid-cols-2 gap-4">
                    <div class="rounded">
                        <p class="text-2xl">ລາຍການຂາຍອອກ</p>
                    </div>

                </div>
            </div>

            <div class="relative overflow-x-auto shadow-md sm:rounded mt-2">
                <div className='w-[50%] py-2 flex'>
                    <input className='w-full border py-1 px-2 rounded' onChange={fillterData} placeholder='search:.......' />
                    <div className='flex gap-5 w-[70%] ml-5'>
                        <input type='date' className='border py-1 px-2 w-full rounded' onChange={(e) => setIndate(e.target.value)} />
                        -
                        <input type='date' className='border py-1 px-2 w-full rounded' onChange={(e) => setOutdate(e.target.value)} />
                    </div>
                </div>
                <div className='flex gap-5 bg-gray-200 p-2 mb-2'>
                    <label>ຍອດລວມ /</label>
                    <label>ລາຍການ: <span className='text-red-500 px-2'>{API.length}</span></label>
                    <label>ຈຳນວນລວມ: <span className='text-red-500 px-2'>{sellQty}</span></label>
                    <label>ຍອດເງີນລວມ LAK: <span className='text-red-500 px-2'>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'LAK' }).format(sellAmount * (Currency[0]?.Currency))}</span></label>
                    <label>ຍອດເງີນລວມ USD: <span className='text-red-500 px-2'>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format((sellAmount))}</span></label>
                </div>

                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-200">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                #
                            </th>
                            <th scope="col" class="px-6 py-3">
                                ຮູບພາຍ
                            </th>
                            <th scope="col" class="px-6 py-3">
                                ລາຍລະອຽດສີນຄ້າ
                            </th>
                            <th scope="col" class="px-6 py-3">
                                ຂໍ້ມູນການຈັດສົງ
                            </th>
                            <th scope="col" class="px-6 py-3">
                                ຈຳນວນ
                            </th>
                            <th scope="col" class="px-6 py-3">
                                ລາຂາຂ່າຍ
                            </th>
                            <th scope="col" class="px-6 py-3">
                                ເປິດໂປຣ
                            </th>
                            <th scope="col" class="px-6 py-3">
                                ເງີນສຳລະລວມ
                            </th>
                            <th scope="col" class="px-6 py-3">
                                ວ-ດ-ປ ເພີມຂໍ້ມູນ
                            </th>
                            {/* <th scope="col" class="px-6 py-3">
                                ຈັດການ
                            </th> */}

                        </tr>
                    </thead>
                    <tbody>

                        {
                            value.length > 0 ?
                                tableFiller.map((item) => (
                                    <tr class="border-b dark:border-gray-200 text-black hover:bg-gray-200">
                                        <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                                            {x++}
                                        </th>
                                        <td class="px-6 py-4">
                                            <img src={data.IMG + item.Image[0]} className='w-[100px] rounded' />
                                        </td>
                                        <td class="px-6 py-4">
                                            <p>ປະເພດສີນຄ້າ: {item.sellType}</p>
                                            <p>ສີນຄ້າ: {item.v2Items}</p>
                                            <p>Color: {item.sellColor}</p>
                                            <p>ຂະໜາດ: {item.sellSize}</p>
                                        </td>
                                        <td class="px-6 py-4">
                                            <p>ຊື່ ນາມສະກຸນ: {item.Location[0] + ' ' + item.Location[1]}</p>
                                            <p>{'ເມືອງ: ' + item.Location[2] + ', ບ້ານ: ' + item.Location[3]}</p>
                                            <p>ແຂວງ: {item.Location[4]}</p>
                                            <p>ຮ່ອມ: {item.Location[5]}</p>
                                            <p>ເບີໂທ: {item.Location[6]}</p>
                                        </td>
                                        <td class="px-6 py-4">
                                            {item.sellQty}
                                        </td>
                                        <td class="px-6 py-4">
                                            <p>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'LAK' }).format(item.sellbprice)}</p>
                                            <p>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(item.sellbprice / (Currency[0]?.Currency))}</p>
                                            <hr />
                                            <p className='text-red-500'>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format((((item.sellbprice - (((item.sellbprice - item.sellPercent) * item.sellPercent) / 100))) / (Currency[0]?.Currency)))}</p>
                                        </td>
                                        <td class="px-6 py-4 text-red-500">
                                            {item.sellPercent + '%'}
                                        </td>
                                        <td class="px-6 py-4">
                                            <p>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'LAK' }).format(item.sellbprice * item.sellQty)}</p>
                                            <p>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'LAK' }).format(item.sellAmount * (Currency[0]?.Currency))}</p>
                                            <hr />
                                            <p className='text-red-500'>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(item.sellAmount)}</p>
                                        </td>
                                        <td class="px-6 py-4">
                                            {moment(item.curdate).format('DD-MM-YYYY H:m')}
                                        </td>

                                    </tr>
                                ))
                                :
                                API.map((item) => (
                                    (Indate && Outdate).length > 0 ?
                                        moment(item.curdate).format("YYYY-MM-DD") > Indate ?
                                            moment(item.curdate).format("YYYY-MM-DD") < Outdate ?
                                                < tr class="border-b dark:border-gray-200 text-black hover:bg-gray-200" >
                                                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                                                        {x++}
                                                    </th>
                                                    <td class="px-6 py-4">
                                                        <img src={data.IMG + item.Image[0]} className='w-[100px] rounded' />
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        <p>ປະເພດສີນຄ້າ: {item.sellType}</p>
                                                        <p>ສີນຄ້າ: {item.v2Items}</p>
                                                        <p>Color: {item.sellColor}</p>
                                                        <p>ຂະໜາດ: {item.sellSize}</p>
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        <p>ຊື່ ນາມສະກຸນ: {item.Location[0] + ' ' + item.Location[1]}</p>
                                                        <p>{'ເມືອງ: ' + item.Location[2] + ', ບ້ານ: ' + item.Location[3]}</p>
                                                        <p>ແຂວງ: {item.Location[4]}</p>
                                                        <p>ຮ່ອມ: {item.Location[5]}</p>
                                                        <p>ເບີໂທ: {item.Location[6]}</p>
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        {item.sellQty}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        <p>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'LAK' }).format(item.sellbprice)}</p>
                                                        <p>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(item.sellbprice / (Currency[0]?.Currency))}</p>
                                                        <hr />
                                                        <p className='text-red-500'>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format((((item.sellbprice - (((item.sellbprice - item.sellPercent) * item.sellPercent) / 100))) / (Currency[0]?.Currency)))}</p>
                                                    </td>
                                                    <td class="px-6 py-4 text-red-500">
                                                        {item.sellPercent + '%'}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        <p>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'LAK' }).format(item.sellbprice * item.sellQty)}</p>
                                                        <p>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'LAK' }).format(item.sellAmount * (Currency[0]?.Currency))}</p>
                                                        <hr />
                                                        <p className='text-red-500'>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(item.sellAmount)}</p>
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        {moment(item.curdate).format('DD-MM-YYYY H:m')}
                                                    </td>
                                                </tr>
                                                : ''
                                            : ''
                                        :
                                        < tr class="border-b dark:border-gray-200 text-black hover:bg-gray-200" >
                                            <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                                                {x++}
                                            </th>
                                            <td class="px-6 py-4">
                                                <img src={data.IMG + item.Image[0]} className='w-[100px] rounded' />
                                            </td>
                                            <td class="px-6 py-4">
                                                <p>ປະເພດສີນຄ້າ: {item.sellType}</p>
                                                <p>ສີນຄ້າ: {item.v2Items}</p>
                                                <p>Color: {item.sellColor}</p>
                                                <p>ຂະໜາດ: {item.sellSize}</p>
                                            </td>
                                            <td class="px-6 py-4">
                                                <p>ຊື່ ນາມສະກຸນ: {item.Location[0] + ' ' + item.Location[1]}</p>
                                                <p>{'ເມືອງ: ' + item.Location[2] + ', ບ້ານ: ' + item.Location[3]}</p>
                                                <p>ແຂວງ: {item.Location[4]}</p>
                                                <p>ຮ່ອມ: {item.Location[5]}</p>
                                                <p>ເບີໂທ: {item.Location[6]}</p>
                                            </td>
                                            <td class="px-6 py-4">
                                                {item.sellQty}
                                            </td>
                                            <td class="px-6 py-4">
                                                <p>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'LAK' }).format(item.sellbprice)}</p>
                                                <p>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(item.sellbprice / (Currency[0]?.Currency))}</p>
                                                <hr />
                                                <p className='text-red-500'>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format((((item.sellbprice - (((item.sellbprice - item.sellPercent) * item.sellPercent) / 100))) / (Currency[0]?.Currency)))}</p>
                                            </td>
                                            <td class="px-6 py-4 text-red-500">
                                                {item.sellPercent + '%'}
                                            </td>
                                            <td class="px-6 py-4">
                                                <p>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'LAK' }).format(item.sellbprice * item.sellQty)}</p>
                                                <p>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'LAK' }).format(item.sellAmount * (Currency[0]?.Currency))}</p>
                                                <hr />
                                                <p className='text-red-500'>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(item.sellAmount)}</p>
                                            </td>
                                            <td class="px-6 py-4">
                                                {moment(item.curdate).format('DD-MM-YYYY H:m')}
                                            </td>
                                        </tr>
                                ))
                        }
                    </tbody>
                </table>
            </div>

        </div >
    )
}
