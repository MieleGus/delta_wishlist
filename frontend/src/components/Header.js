import React from 'react'

const Header = () => {

    return (
        <>
        <nav className="navbar navbar-dark bg-dark">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="navbar-brand" href="/">Produtos</a>
                    <a className="navbar-brand" href="/wishlist">Lista de desejos</a>
                </li>
            </ul>
            
        </nav>
         </>
    )
}

export default Header
