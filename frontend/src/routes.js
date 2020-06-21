import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Products from './pages/Products'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Products} path="/" exact />
            {/* <Route component={CreatePoint} path="/create-point" /> */}
        </BrowserRouter>
    )
}

export default Routes