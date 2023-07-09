import React, { useContext } from 'react'
import { Context_Items } from './Product.Items'
import data from './data'
import Form_Items from './Form.Items'
import Edit_Items from './Edit.Items'
import Moment from 'moment'
import moment from 'moment'
import { useState } from 'react'


export default function Table_Items() {

  const { API, Delete, is_active, Percent } = useContext(Context_Items)

  let x = 1

  const income = API.map(item => item.v2sprice).reduce((prev, curr) => prev + curr, 0);
  const qty = API.map(item => item.v2qty).reduce((prev, curr) => prev + curr, 0);

  let y = 20
  let h = 150

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
              <p class="text-2xl">ຂໍ້ມູນສີນຄ້າ</p>
            </div>
            <div class="flex justify-end rounded">
              <Form_Items />
            </div>
          </div>
        </div>

        <div class="relative overflow-x-auto shadow-md sm:rounded mt-2">
          <div className='w-[50%] py-2'>
            <input className='w-full border py-1 px-2' onChange={fillterData} placeholder='search:.......' />
          </div>
          <div className='flex gap-5 bg-gray-200 p-2 mb-2'>
            <label>ຍອດລວມ /</label>
            <label>ຈຳນວນ: <span className='text-red-500 px-2'>{API.length}</span></label>
            <label>ເປິດຂ່າຍ: <span className='text-red-500 px-2'>{API.filter((e) => e.is_active == "true").length}</span></label>
            <label>ປິດຂ່າຍ: <span className='text-red-500 px-2'>{API.filter((e) => e.is_active == "false").length}</span></label>
            <label>ຍອດເງີນຂ່າຍ: <span className='text-red-500 px-2'>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'LAK' }).format(income)}</span></label>
            <label>ຍອດເງີນລວມ: <span className='text-red-500 px-2'>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'LAK' }).format(income * qty)}</span></label>
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
                  ປະເພດສີນຄ້າ
                </th>
                <th scope="col" class="px-6 py-3">
                  ສີນຄ້າ
                </th>
                <th scope="col" class="px-6 py-3">
                  ຂະໜາດ
                </th>
                <th scope="col" class="px-6 py-3">
                  ຈຳນວນ
                </th>
                <th scope="col" class="px-6 py-3">
                  Color
                </th>
                <th scope="col" class="px-6 py-3">
                  ລາຂາຂ່າຍ
                </th>
                <th scope="col" class="px-6 py-3">
                  ເງີນລວມ
                </th>
                <th scope="col" class="px-6 py-3">
                  ວ-ດ-ປ ເພີມຂໍ້ມູນ
                </th>
                <th scope="col" class="px-6 py-3">
                  ເປິດໂປຣ
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
                    <img src={data.IMG + item.v2image[0]} className='w-[100px] rounded' />
                  </td>
                  <td class="px-6 py-4">
                    {item.v1typeId?.pro_type}
                  </td>
                  <td class="px-6 py-4">
                    {item.v2Items}
                  </td>
                  <td class="px-6 py-4">
                    {item.v2size}
                  </td>
                  <td class="px-6 py-4">
                    {item.v2qty}
                  </td>
                  <td class="px-6 py-4">
                    {item.v2color}
                  </td>
                  <td class="px-6 py-4">
                    {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'LAK' }).format(item.v2sprice)}
                  </td>
                  <td class="px-6 py-4">
                    {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'LAK' }).format(item.v2sprice * item.v2qty)}
                  </td>
                  <td class="px-6 py-4">
                    {moment(item.curendate).format('DD-MM-YYYY H:m')}
                  </td>
                  <td class="px-6 py-4">
                    <button className={`py-1 px-2 rounded ${item.v2percent === 0 ? 'bg-gray-500' : 'bg-green-500'} text-white mr-2`} onClick={() => Percent(item)}><i class="bi bi-percent"></i> | {item.v2percent}%</button>
                  </td>

                  <td class="px-2 py-4">
                    <Edit_Items Items={item} />
                    <button className='py-1 px-2 rounded bg-red-500 text-white mr-2' onClick={() => Delete(item)}><i class="bi bi-trash3-fill"></i> | ລົບຂໍ້ມູນ</button>
                    {
                      item.is_active !== 'true' ?
                        <button className='py-1 px-2 rounded bg-gray-500 text-white mr-2' onClick={() => is_active(item)}><i class="bi bi-toggle-off"></i> | ປິດຂ່າຍ</button>
                        :
                        <button className='py-1 px-2 rounded bg-green-500 text-white mr-2' onClick={() => is_active(item)}><i class="bi bi-toggle-on"></i> | ເປິດຂ່າຍ</button>
                    }
                  </td>

                </tr>
              )) :
                API.map((item) => (
                  <tr class="border-b dark:border-gray-200 text-black hover:bg-gray-200">
                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                      {x++}
                    </th>
                    <td class="px-6 py-4">
                      <img src={data.IMG + item.v2image[0]} className='w-[100px] rounded' />
                    </td>
                    <td class="px-6 py-4">
                      {item.v1typeId?.pro_type}
                    </td>
                    <td class="px-6 py-4">
                      {item.v2Items}
                    </td>
                    <td class="px-6 py-4">
                      {item.v2size}
                    </td>
                    <td class="px-6 py-4">
                      {item.v2qty}
                    </td>
                    <td class="px-6 py-4">
                      {item.v2color}
                    </td>
                    <td class="px-6 py-4">
                      {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'LAK' }).format(item.v2sprice)}
                    </td>
                    <td class="px-6 py-4">
                      {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'LAK' }).format(item.v2sprice * item.v2qty)}
                    </td>
                    <td class="px-6 py-4">
                      {moment(item.curendate).format('DD-MM-YYYY H:m')}
                    </td>
                    <td class="px-6 py-4">
                      <button className={`py-1 px-2 rounded ${item.v2percent === 0 ? 'bg-gray-500' : 'bg-green-500'} text-white mr-2`} onClick={() => Percent(item)}><i class="bi bi-percent"></i> | {item.v2percent}%</button>
                    </td>

                    <td class="px-2 py-4">
                      <Edit_Items Items={item} />
                      <button className='py-1 px-2 rounded bg-red-500 text-white mr-2' onClick={() => Delete(item)}><i class="bi bi-trash3-fill"></i> | ລົບຂໍ້ມູນ</button>
                      {
                        item.is_active !== 'true' ?
                          <button className='py-1 px-2 rounded bg-gray-500 text-white mr-2' onClick={() => is_active(item)}><i class="bi bi-toggle-off"></i> | ປິດຂ່າຍ</button>
                          :
                          <button className='py-1 px-2 rounded bg-green-500 text-white mr-2' onClick={() => is_active(item)}><i class="bi bi-toggle-on"></i> | ເປິດຂ່າຍ</button>
                      }
                    </td>

                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>


      </div>
    </>
  )
}
