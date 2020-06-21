import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Products from './pages/Products'
import Wishlist from './pages/Wishlist'
const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Products} path="/" exact />
            <Route component={Wishlist} path="/wishlist" />
        </BrowserRouter>
    )
}

export default Routes