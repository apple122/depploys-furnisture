import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Footer from '../../../Component/Footer/Footer'
import Omise_open from './Omise.open'
import axios from 'axios'
import data from './data'

export default function Buy() {

    const [APICUR, setAPICUR] = useState('')
    useEffect(() => {
        axios.get(data.Mainurl + data.Currency).then((res) => {
            setAPICUR(res.data)
        })
    }, [])

    let location = useLocation()
    const [item] = useState(location.state.item)
    const [number] = useState(location.state.Number)

    const [Fname, setFname] = useState('')
    const [Lname, setLname] = useState('')
    const [H, setH] = useState('')
    const [M, setM] = useState('')
    const [C, setC] = useState('')
    const [T, setT] = useState('')
    const [TT, setTT] = useState('')

    let arrimg = []
    item.v2image.map((i) => {
        arrimg.push(i)
    })

    let arrlocations = []
    arrlocations.push(Fname)
    arrlocations.push(Lname)
    arrlocations.push(H)
    arrlocations.push(M)
    arrlocations.push(C)
    arrlocations.push(T)
    arrlocations.push(TT)

    function handleERROR() {
        alert('ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບຖ້ວນ!')
    }

    return (
        <>
            {/* <div className='fixed flex justify-center z-50 items-center w-full h-screen'>
                <div class="loader"></div>
            </div> */}
            <div className='w-full h-full flex justify-center pb-[5%]'>
                <div className='w-[80%] p-5'>
                    <p className='text-[32px] font-bold pb-5'>Furniture</p>
                    <p className='text-[32px] pb-5'>
                        <strong>Checkout</strong>
                        <p className='text-[24px]'>
                            Please enter your details below to complete your purchase
                        </p>
                    </p>
                    <div className='grid grid-cols-2 py-[5%]'>
                        <span className='w-[100%] border h-[0.5vh] rounded bg-green-600 relative'>
                            <p className='absolute -top-[8px] bg-green-800 w-[2vh] h-[2vh] rounded-full'></p>
                            <p className='absolute -top-[8px] -right-[9.5px] bg-green-800 w-[2vh] h-[2vh] rounded-full'></p>
                        </span>
                        <span className='w-[100%] text-end border h-[0.5vh] rounded bg-black relative'>
                            <p className='absolute -top-[8px] -left-[11px] bg-green-800 w-[2vh] h-[2vh] rounded-full'></p>
                            <p className='absolute -top-[8px] -right-[0] bg-black w-[2vh] h-[2vh] rounded-full'></p>
                        </span>
                    </div>

                    <div className='lg:flex gap-5 mt-5'>
                        <div className='w-[100%] mb-5 border p-5 hover:shadow-2xl transition delay-75'>
                            <p className='pb-3 text-[24px] font-bold'>ທີ່ຢູ່ຈັດສົ່ງ</p>
                            <hr className='pb-5' />
                            <div className='py-3'>
                                <label for="Fname">ຊື່:</label><br />
                                <input className='w-full px-2 py-1 mt-2 border rounded' id='Fname' onChange={(e) => setFname(e.target.value)} placeholder=':.................' />
                            </div>
                            <div className='py-3'>
                                <label for="Lname">ນາມສະກຸນ:</label><br />
                                <input className='w-full px-2 py-1 mt-2 border rounded' id='Lname' onChange={(e) => setLname(e.target.value)} placeholder=':.................' />
                            </div>

                            <div className='py-2'>
                                <label for="H">ບ້ານ:</label><br />
                                <input className='w-full px-2 py-1 mt-2 border rounded' id='H' onChange={(e) => setH(e.target.value)} placeholder=':.................' />
                            </div>
                            <div className='py-2'>
                                <label for="M">ເມື່ອງ:</label><br />
                                <input className='w-full px-2 py-1 mt-2 border rounded' id='M' onChange={(e) => setM(e.target.value)} placeholder=':.................' />
                            </div>
                            <div className='py-2'>
                                <label for="C">ແຂວງ:</label><br />
                                <input className='w-full px-2 py-1 mt-2 border rounded' id='C' onChange={(e) => setC(e.target.value)} placeholder=':.................' />
                            </div>
                            <div className='py-2'>
                                <label for="T">ຮ່ອມ:</label><br />
                                <input className='w-full px-2 py-1 mt-2 border rounded' id='T' onChange={(e) => setT(e.target.value)} placeholder=':.................' />
                            </div>
                            <div className='py-2'>
                                <label for="TT">ເບີໂທຕິດຕໍ່:</label><br />
                                <input className='w-full px-2 py-1 mt-2 border rounded' id='TT' onChange={(e) => setTT(e.target.value)} placeholder=':.................' />
                            </div>
                        </div>

                        <div className='w-[100%] h-[100%] border p-5 hover:shadow-2xl transition delay-75'>
                            <p className='pb-3 text-[24px] font-bold'>ສະຫຼຸບການສັ່ງຊື້</p>
                            <hr className='pb-5' />
                            <div className='py-2'>
                                <label>1 ລາຍການ:</label>
                                <hr className='py-1' />
                                <div className='sm:flex'>
                                    <div className='relative py-2 sm:w-[25%] w-100 h-[13vh]'>
                                        <img src={data.IMG + item.v2image[2]} className='w-[10vh] h-[10vh] border-2 border-white rounded ml-4 absolute' />
                                        <img src={data.IMG + item.v2image[1]} className='w-[10vh] h-[10vh] border-2 border-white rounded ml-2 absolute' />
                                        <img src={data.IMG + item.v2image[0]} className='w-[10vh] h-[10vh] border-2 border-white rounded absolute' />
                                    </div>
                                    <div className='sm:px-5'>
                                        <p className='font-bold'>{item.v2Items}</p>
                                        <p>Color: {item.v2color}</p>
                                        <p>ຈຳນວນ: {number}</p>
                                        <p className='text-red-500 font-bold'>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'LAK' }).format(item.v2sprice)}</p>
                                    </div>
                                </div>
                                <hr className='py-1' />
                                <div className='w-full relative grid md:grid-cols-2 py-1'>
                                    <label>ຍອດສັງຊື້ (ມູນຄ່າລວມ):</label>
                                    <label className='md:text-end font-bold'>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'LAK' }).format(item.v2sprice * number)}</label>
                                </div>
                                <div className='w-full relative grid md:grid-cols-2 py-1'>
                                    <label>ຄ່າຈັດສົ່ງ:</label>
                                    <label className='md:text-end font-bold'>0 LAK</label>
                                </div>
                                <div className='w-full relative grid md:grid-cols-2 py-1'>
                                    <label>ໂປຣໂມຊັ່ນ:</label>
                                    <label className='md:text-end text-red-500 font-bold'>{item.v2percent + '%'}</label>
                                </div>

                                <hr className='py-1' />
                                <div className='w-full relative grid md:grid-cols-2 py-1'>
                                    <label>ຊື່ ນາມສະກຸນ:</label>
                                    <label className='md:text-end font-bold'>{Fname + ' ' + Lname}</label>
                                </div>
                                <div className='w-full relative grid md:grid-cols-2 py-1'>
                                    <label>ສະຖານທີ່ຈັດສົ່ງ:</label>
                                    <label className='md:text-end font-bold'>{H + ' ' + M + ' ' + C + ' ' + (T == '' ? '' : 'ຮ່ອມ:' + T)}</label>
                                </div>
                                <div className='w-full relative grid md:grid-cols-2 py-1'>
                                    <label>ເບີໂທຕິດຕໍ່:</label>
                                    <label className='md:text-end font-bold'>{TT}</label>
                                </div>

                                <hr className='py-1' />
                                <div className='w-full relative grid md:grid-cols-2 py-1 text-[28px] font-bold'>
                                    <label>ຍອດເງີນກີບ:</label>
                                    <label className='md:text-end font-bold'>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'LAK' }).format((item.v2sprice - (((item.v2sprice - item.v2percent) * item.v2percent) / 100)) * number)}</label>
                                </div>
                                <div className='w-full relative grid md:grid-cols-2 py-1 text-[28px] font-bold'>
                                    <label>ຍອດເງີນ USD:</label>
                                    <label className='md:text-end font-bold'>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(((item.v2sprice - (((item.v2sprice - item.v2percent) * item.v2percent) / 100)) * number) / (APICUR[0]?.Currency))}</label>
                                </div>
                                <div className='w-full relative grid md:grid-cols-2 py-1 text-[28px] font-bold'>
                                    <label>ຍອດເງີນທີ່ຕ້ອງສຳລະ:</label>
                                    <label className='md:text-end font-bold'>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(((item.v2sprice - (((item.v2sprice - item.v2percent) * item.v2percent) / 100)) * number) / (APICUR[0]?.Currency))}</label>
                                </div>
                                <div className='mt-[5%]'>
                                    <form>
                                        {
                                            (Fname && Lname && H && M && C && T && TT).length > 0 ?
                                                <Omise_open arrlocations={arrlocations} arrimg={arrimg} />
                                                :
                                                <button type='button' onClick={handleERROR} className='border text-[24px] px-3 py-1 bg-gray-500 text-white'>ຍືນຍັນການສັ່ງຊື້</button>
                                        }

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
