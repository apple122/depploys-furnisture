import React, { createContext } from 'react'
import Navbar from '../../../Component/Navbar/Navbar'
import Footer from '../../../Component/Footer/Footer'
import About from './About'
import useFUnctions from './useFUnctions'

export const Context_AboutH = createContext(null)

export default function Home_About() {

    let {
        API,
        APIA
    } = useFUnctions()

    return (
        <Context_AboutH.Provider value={{ API, APIA }}>
            <Navbar />
            <About />
            <Footer />
        </Context_AboutH.Provider>
    )
}
