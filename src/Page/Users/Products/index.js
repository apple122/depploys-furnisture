import React from 'react'
import { createContext } from 'react'
import Navbar from '../../../Component/Navbar/Navbar'
import Products_01 from './Products.01'
import useFunctions from './useFunctions'
import Footer from '../../../Component/Footer/Footer'

export const Context_Products = createContext(null)

export default function Products() {

  let {
    API,
    APITEM,
    ChangeType
  } = useFunctions()

  return (
    <Context_Products.Provider value={{ API, APITEM, ChangeType }}>
      <Navbar />
      <Products_01 />
      <Footer />
    </Context_Products.Provider>
  )
}
