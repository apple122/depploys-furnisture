import React, { createContext } from 'react'
import Navbar_Admin from '../../../Component/Navbar/Navbar.Admin'

export const Context_Footer = createContext(null)

export default function A_Footer() {
  return (
    <Context_Footer.Provider>
        <Navbar_Admin />
    </Context_Footer.Provider>
  )
}
