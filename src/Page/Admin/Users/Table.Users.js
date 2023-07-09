import React, { useContext, useState } from 'react'
import { Context_Users } from './Users'
import Form_add from './Form.add'
import Form_Profile from './Form.Profile'
import data from './data'

export default function Table_Users() {

    const { API, DelData } = useContext(Context_Users)
    let x = 1
    
    const [oppen, setoppen] = useState(false)
    function dropdownButton(e) {
        if(oppen == false){
            setoppen(e)
        }else{
            setoppen(false)
        }
    }

    return (
        <>
            <div class="p-4 sm:ml-64">
                <div class="border-2 bg-gray-200 rounded-lg dark:bg-gray-900 dark:text-white">
                    <div class="p-3 grid grid-cols-2 gap-4">
                        <div class="rounded">
                            <p class="text-2xl">Users Profile</p>
                        </div>
                        <div class="flex justify-end rounded">
                            <Form_add />
                        </div>
                    </div>
                </div>


                <div class="relative overflow-x-auto shadow-md sm:rounded mt-2 p-5 grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5">
                    {API.map((item, index) => (
                        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div class="relative flex justify-end px-4 pt-4">
                                <button id="dropdownButton" onClick={() => dropdownButton(index+1)} class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                    <span class="sr-only">Open dropdown</span>
                                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                    </svg>
                                </button>
                                <div id="dropdown" class={`absolute mt-[12%] z-10 ${oppen !== index+1 ? 'hidden' : ''}  text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                                    <ul class="py-2" aria-labelledby="dropdownButton">
                                        <li>
                                            <Form_Profile data={item}/>
                                        </li>
                                        <li>
                                            <a href="#" onClick={(e) => DelData(item._id)} class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><i class="bi bi-trash3"></i> | Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="flex flex-col items-center pb-10">
                                <img class="w-[15vh] h-[15vh] mb-3 rounded-full shadow-lg object-cover" src={data.IMG + item.Image} alt="Bonnie image" />
                                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{item.fullname}</h5>
                                <span class="text-sm text-gray-500 dark:text-gray-400">{item.email}</span>
                                <div class="flex mt-4 space-x-3 md:mt-6">
                                    <a href={'https://wa.me/+856'+item.Tel} target='_blank' class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">WhatApp</a>
                                    <a href={'mailto:'+item.Email} target='_blank' class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Email</a>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>


            </div>
        </>
    )
}
