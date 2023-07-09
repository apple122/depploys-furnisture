import React, { createContext, useState } from 'react'
import Table_Users from './Table.Users'
import Navbar_Admin from '../../../Component/Navbar/Navbar.Admin'
import useFunctions from './useFunctions'
import Footer_Admin from '../../../Component/Footer/Footer.Admin'

export const Context_Users = createContext(null)

export default function Users() {

    let {
        open, 
        handleOpen, 
        handleClose,

        Submit,
        API,
        DelData
    } = useFunctions()

    return (
        <Context_Users.Provider value={{ API, Submit, open, handleOpen, handleClose, DelData }}>
            <Navbar_Admin />
            <Table_Users />
            <Footer_Admin />
        </Context_Users.Provider>
    )
}
