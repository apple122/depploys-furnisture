import React, { createContext } from 'react'
import Navbar_Admin from '../../../Component/Navbar/Navbar.Admin'
import Table_slide from './Table.slide'
import useFunctions from './useFunctions'
import Footer_Admin from '../../../Component/Footer/Footer.Admin'

export const Context_Slide = createContext(null)

export default function Slide() {

    let {
        API,
        Submit,
        open,
        handleOpen,
        handleClose,
        Preview, 
        FileIMG,

        Del,
        FuncReducer
    } = useFunctions()

    return (
        <Context_Slide.Provider value={{ API, Del, Submit, open, handleOpen, handleClose, Preview, FileIMG, FuncReducer }}>
            <Navbar_Admin />
            <Table_slide />
            <Footer_Admin />
        </Context_Slide.Provider>
    )
}
