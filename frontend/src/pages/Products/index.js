import React, { useState, useEffect } from 'react';
// import './App.css';
import api from '../../services/api'

import Header from '../../components/Header'

function Products() {
const [products, setProducts] = useState([])

useEffect(() => {
  api.get('products').then(response => {
    setProducts(response.data)
  })

}, [])
console.log(products)

  return ( 
    <>
    <Header/>
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
                            <div className="btn-group go-corner">
                                <button className="btn btn-sm btn-outline-secondary">Comprar</button>
                                <button className="btn btn-sm btn-outline-secondary">Adicionar</button>
                                <button className="btn btn-sm btn-outline-secondary">Remover</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        </div>
    </div>
      
    </>
  );
}

export default Products;
