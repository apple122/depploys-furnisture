import React, { createContext } from 'react'
import Navbar_Admin from '../../../../Component/Navbar/Navbar.Admin'
import Form_About from './Form.About'

export const Context_About = createContext(null)

export default function Index_About() {
    
    return (
        <Context_About.Provider>
            <Navbar_Admin />
            <Form_About />
        </Context_About.Provider>
    )
}
