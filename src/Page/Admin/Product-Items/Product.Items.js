import React, { createContext, useState } from 'react'
import Table_Items from './Table.Items'
import Navbar_Admin from '../../../Component/Navbar/Navbar.Admin'
import useFunctions from './useFunctions'
import Footer_Admin from '../../../Component/Footer/Footer.Admin'

export const Context_Items = createContext(null)

export default function Product_Items() {

    let {
        API,
        APITYPE,
        Delete,

        Submit, 
        open, 
        handleOpen, 
        handleClose,
        setIMG,

        OpenS,
        show, 
        Close,
        resetData,

        is_active,
        Percent
    } = useFunctions()

    return (
        <Context_Items.Provider value={{ API, Delete, Submit, open, handleOpen, handleClose, APITYPE, setIMG, OpenS, show, Close, resetData, is_active, Percent }}>
            <Navbar_Admin />
            <Table_Items />
            <Footer_Admin />
        </Context_Items.Provider>
    )
}
