import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LOGO from './LOGO.jpg'
import Index_Currency from '../../Page/Admin/Currency/Index.Currency'

export default function Navbar_Admin() {

    const [show, setshow] = useState(false)
    function HandleOn() {
        if (show == false) {
            setshow(true)
        } else {
            setshow(false)
        }
    }

    const [oppen, setoppen] = useState(false)
    function open01() {
        if (oppen === false) {
            setoppen(true)
        } else {
            setoppen(false)
        }
    }

    return (
        <>

            <button onClick={HandleOn} type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span class="sr-only">Open sidebar</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>
            <div onClick={HandleOn} className={`fixed p-5 z-40 w-full h-full top-0 ${show == false ? '-translate-x-full' : '-translate-x-0'}`}></div>

            <aside id="logo-sidebar" class={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${show == false ? '-translate-x-full' : '-translate-x-0'} sm:translate-x-0`} aria-label="Sidebar">
                <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <a href="#" class="flex items-center pl-2.5 mb-5">
                        <img src={LOGO} class="h-6 mr-3 sm:h-7 rounded" alt="Flowbite Logo" />
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Admin-Furnisture</span>
                    </a>
                    <ul class="space-y-2 font-medium">
                        <li>
                            <Link to={'/Dashboard'} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                <span class="ml-3">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <a href='#' class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <i class="bi bi-currency-exchange"></i>
                                <Index_Currency />
                            </a>
                        </li>
                        <li>
                            <Link to={'/Product-type'} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                                <span class="flex-1 ml-3 whitespace-nowrap">ປະເພດສີນຄ້າ</span>
                                {/* <span class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
                            </Link>
                        </li>
                        <li>
                            <Link to={'/Product-Items'} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <i class="bi bi-list-ul px-1"></i>
                                <span class="flex-1 ml-3 whitespace-nowrap">ລາຍການສີນຄ້າ</span>
                                {/* <span class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
                            </Link>
                        </li>
                        <li>
                            <Link to={'/Index.Sale'} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <i class="bi bi-receipt"></i>
                                <span class="flex-1 ml-3 whitespace-nowrap">ລາຍການຂາຍອອກ</span>
                                {/* <span class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
                            </Link>
                        </li>
                        <li>
                            <Link to={'/Users'} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/Slide'} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
                                <span class="flex-1 ml-3 whitespace-nowrap">Slide</span>
                            </Link>
                        </li>
                        <li>
                            <Link class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" onClick={open01}>
                                <i class="bi bi-pencil-square"></i>
                                <span class="flex-1 ml-3 whitespace-nowrap">ຈັດການໜ້າບ້ານ</span>
                            </Link>
                            <div className={`dark:bg-gray-600 bg-gray-200 rounded-lg ${oppen !== true ? 'hidden' : ''}`}>
                                <Link to={'/Follow'} class="flex text-[14px] items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 pl-5">
                                    <i class="bi bi-1-circle-fill"></i>
                                    <span class="flex-1 ml-3 whitespace-nowrap">ຈັດການ ຊ່ອງທາງການຕີດຕາມ</span>
                                </Link>
                                <Link to={'/Edit.About'} class="flex text-[14px] items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 pl-5">
                                    <i class="bi bi-2-circle-fill"></i>
                                    <span class="flex-1 ml-3 whitespace-nowrap">ຈັດການ About</span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <Link to={'/Admin'} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                                <span class="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}
