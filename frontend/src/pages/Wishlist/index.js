import React, { useState, useEffect } from 'react'
import api from '../../services/api'

import Header from '../../components/Header'
import Cards from '../../components/Cards'


const Wishlist = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
    api.get('wishlist').then(response => {
        setProducts(response.data)
    })
    }, [])
    
    return (
        <>
        <Header/>
        <Cards products={products} />
        </>
    )
}

export default Wishlist