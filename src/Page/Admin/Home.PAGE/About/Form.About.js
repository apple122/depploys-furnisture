import React from 'react'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import useFunctions from './useFunctions';
import { useState } from 'react';

const animatedComponents = makeAnimated();

export default function Form_About() {

    let {
        APIUSERS,
        APIA,
        Submit,

        setData,

        setPreview,
        Preview,

        setlat,
        setlng,
        settext,

    } = useFunctions()

    return (
        <>
            <div class="p-4 sm:ml-64">
                <div class="border-2 border-gray-200 rounded-lg dark:border-gray-200">
                    <div class="p-2 grid grid-cols-2 gap-4">
                        <div class="rounded">
                            <p class="text-2xl">ຈັດການ ຂໍ້ມູນກ່ຽວກັບລະບົບ</p>
                        </div>
                        <div class="flex justify-end rounded">
                        </div>
                    </div>
                </div>

                <div class="grid md:grid-cols-1 gap-5 p-5 mt-2 border rounded">
                    <div className='mt-5'>
                        <button type='button' className='py-1 px-2 border text-white bg-blue-500 rounded' onClick={Submit}><i class="bi bi-download"></i> | Update</button>
                    </div>
                    <div>
                        <label>Select Users</label>
                        <Select
                            onChange={setData}
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            isMulti
                            options={
                                APIUSERS.map((i) => (
                                    { value: i._id, label: i.UserName }
                                ))
                            }
                        />
                    </div>

                    <div className='mt-5'>
                        <label>Contact About</label>
                        <div className='grid grid-cols-2 gap-5'>
                            <input type='file' id='image' onChange={(e) => setPreview(e.target.files[0])} className='hidden' />
                            <label for='image' className='rounded w-[100%] h-[50vh] bg-gray-500 overflow-hidden object-cover flex justify-center items-center'>
                                <img src={Preview !== undefined ? URL.createObjectURL(Preview) : ''} className='object-cover' alt='Select Image' />
                            </label>
                            <textarea className='w-full border rounded' onChange={(e) => settext(e.target.value)} placeholder='ລາຍລະອຽດ'></textarea>
                        </div>
                    </div>

                    <div className='mt-5'>
                        <label>Google MAP</label>
                        <div className='grid grid-cols-2 gap-5'>
                            <input type='number' className='w-full border rounded py-1 px-2' defaultValue={0} onChange={(e) => setlat(e.target.value)} placeholder='lat' />
                            <input type='number' className='w-full border rounded py-1 px-2' defaultValue={0} onChange={(e) => setlng(e.target.value)} placeholder='lng' />
                        </div>
                        <iframe className='w-full h-[50vh]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d948.7956080938699!2d102.61946913487958!3d17.970247445373285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3124687ed455e1df%3A0x24af4d39ae4445b0!2z4Lib4Lij4Liw4LiV4Li54LiK4Lix4Lii!5e0!3m2!1sth!2sla!4v1688644697506!5m2!1sth!2sla" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </div>
            </div>
        </>
    )
}
