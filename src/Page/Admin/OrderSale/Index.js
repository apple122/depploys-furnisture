import React, { createContext } from 'react'
import Order_Sale from './Order.Sale'
import Navbar_Admin from '../../../Component/Navbar/Navbar.Admin'
import useFunctions from './useFunctions'
import Footer_Admin from '../../../Component/Footer/Footer.Admin'

export const Context_OrderSale = createContext(null)

export default function Index_Sale() {

    let {
        API,
        Currency
    } = useFunctions()

    return (
        <Context_OrderSale.Provider value={{ API, Currency }}>
            <Navbar_Admin />
            <Order_Sale />
            <Footer_Admin />
        </Context_OrderSale.Provider>
    )
}
