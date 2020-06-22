import React, { useState, useEffect } from 'react'
import api from '../services/api'
import { FaShoppingCart } from 'react-icons/fa'

const Cards = ({ products, dontShow })  => {


    async function handleAddWishlist(id) {
        await api.post('wishlist', {
            id
        }) 
    }

    async function handleRemoveWishlist(id) {
        // const newProducts = products.filter(product => product.rank !== id)
        await api.delete(`wishlist/${id}`)
        // setProducts(newProducts)
    }

    return (
    <div className="container">
        <div className="row card-deck">
            {products.map(product => (
                <div className="col-lg-3 col-md-6 mt-5" key={product.rank}>
                    <div className="card card3 mb-3 bg-light  shadow-sm" style={{width: '100%'}}>
                        <img className="card-img-top" src={product.image} style={{height: 200, width: '80%,'}}alt="Imagem de capa do card"/>
                        <div className="card-body">
                            <h5 className="card-title mb-3">{product.title}</h5>
                            <p className="card-text">{product.price_upper.raw}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <a href={product.link} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary"><FaShoppingCart/></a>
            {!dontShow && <button className="btn btn-sm btn-outline-secondary" onClick={() => handleAddWishlist(product.rank)}>Adicionar na wishlist</button> }
            {dontShow && <button className="btn btn-sm btn-outline-secondary" onClick={() => handleRemoveWishlist(product.rank)}>Remover da wishlist</button> }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}

export default Cards