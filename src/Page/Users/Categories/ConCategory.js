import React, { createContext, useState } from 'react'
import Category_01 from './Category.01'
import Footer from '../../../Component/Footer/Footer'
import About_Category from './About.Category'
import Home_Sale from '../Home/Component/Home.Sale'

export const ContextCate = createContext(null)

export default function ConCategory() {

    return (
        <ContextCate.Provider>
            <Category_01 />
            <About_Category />
            <Home_Sale />
            <Footer />
        </ContextCate.Provider>
    )
}
