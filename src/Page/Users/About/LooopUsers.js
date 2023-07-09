import React from 'react'
import useFUnctions from './useFUnctions'
import data from './data'

export default function LooopUsers() {
    let {
        APIA
    } = useFUnctions()
    return (
        APIA[0]?.users.map((item, index) => (
            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="flex flex-col items-center pb-10 pt-10">
                    <img class="w-[15vh] h-[15vh] mb-3 rounded-full shadow-lg object-cover" src={data.IMG + item.Image} alt="Bonnie image" />
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{item.fullname}</h5>
                    <span class="text-sm text-gray-500 dark:text-gray-400">{item.email}</span>
                    <div class="flex mt-4 space-x-3 md:mt-6">
                        <a href={'https://wa.me/+856' + item.Tel} target='_blank' class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">WhatApp</a>
                        <a href={'mailto:' + item.Email} target='_blank' class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Email</a>
                    </div>
                </div>
            </div>
        ))
    )
}
