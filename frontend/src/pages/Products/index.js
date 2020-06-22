import React, { useState, useEffect } from 'react';
import api from '../../services/api'

import Header from '../../components/Header'
import Cards from '../../components/Cards'

function Products() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        
    api.get('products').then(response => {
        setProducts(response.data)
    })
    }, [])

    return ( 
        <>
        <Header/>
        <Cards products={products} />
        </>
        );
}

export default Products;
