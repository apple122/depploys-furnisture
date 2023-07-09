import React, { createContext, useState } from 'react'
import Navbar_Admin from '../../../Component/Navbar/Navbar.Admin'
import Table_Type from './Table.Type'
import useFunctions from './useFunctions'
import Footer_Admin from '../../../Component/Footer/Footer.Admin'

export const Context_Type = createContext(null)

export default function Product_type() {

    let {
        Submit,
        open, 
        handleOpen, 
        handleClose,
        API,
        Reload,
        Delete,

        is_active
    } = useFunctions()

    return (
        <Context_Type.Provider value={{ Submit, open, handleOpen, handleClose , API, Reload, Delete, is_active }}>
            <Navbar_Admin />
            <Table_Type />
            <Footer_Admin />
        </Context_Type.Provider>
    )
}
