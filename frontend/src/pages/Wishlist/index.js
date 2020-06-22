import React, { useState, useEffect } from 'react'
import api from '../../services/api'

import Header from '../../components/Header'
import Cards from '../../components/Cards'


const Wishlist = () => {
    const [productsWished, setProductsWished] = useState([])
    
    useEffect(() => {
    api.get('wishlist').then(response => {
        setProductsWished(response.data)
    })
    }, [])

    return (
        <>
        <Header/>
        <Cards products={productsWished} dontShow={true}/>
        </>
    )
}

export default Wishlist