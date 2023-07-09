import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Page/Users/Home/Index'
import Admin from '../Page/Admin/Index'
import Dashboard from '../Page/Admin/Dashboard/Dashboard'
import Product_type from '../Page/Admin/Product-type/Product.type'
import Product_Items from '../Page/Admin/Product-Items/Product.Items'
import Users from '../Page/Admin/Users/Users'
import Slide from '../Page/Admin/Slide/Slide'
import Category_01 from '../Page/Users/Categories/Category.01'
import Buy from '../Page/Users/Categories/Buy'
import ConCategory from '../Page/Users/Categories/ConCategory'
import POST from '../Page/Users/Categories/POST'
import Products from '../Page/Users/Products'
import A_Footer from '../Page/Admin/Footer/Index'
import Index_Sale from '../Page/Admin/OrderSale/Index'
import Index_Follow from '../Page/Admin/Home.PAGE/Follow/Index'
import Index_About from '../Page/Admin/Home.PAGE/About/Index'
import Home_About from '../Page/Users/About/Index'

const Routers = () => {
  return (
    <div>
      <Routes>

        <Route path='/*' element={<Home />} />

        <Route path='/Admin' element={<Admin />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Product-type' element={<Product_type />} />
        {/* Produuct items */}
        <Route path='/Product-Items' element={<Product_Items />} />

        {/* Users  */}
        <Route path='/Users' element={<Users />} />

        {/* Slide  */}
        <Route path='/Slide' element={<Slide />} />

        <Route path='/Home' element={<Home />} />
        <Route path='/Category.01' element={<ConCategory />} />
        <Route path='/Buy' element={<Buy />} />
        <Route path='/POST' element={<POST />} />

        {/* Products  */}
        <Route path='/Products' element={<Products />} />

        {/* Edit.Footer  */}
        <Route path='/Edit.Footer' element={<A_Footer />} />

        {/* Edit.About  */}
        <Route path='/Edit.About' element={<Index_About />} />
        {/* Edit.About  */}
        <Route path='/About' element={<Home_About />} />

        {/* Sale  */}
        <Route path='/Index.Sale' element={<Index_Sale />} />

        {/* Home PGAE  */}
        <Route path='/Follow' element={<Index_Follow />} />

      </Routes>
    </div>
  )
}

export default Routers