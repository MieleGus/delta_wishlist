import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {

    return (
        <>
        <nav className="navbar navbar-dark bg-dark">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/"><p className="navbar-brand" href="#">Produtos</p></Link>
                    <Link to="/wishlist"><p className="navbar-brand" href="#">Lista de desejos</p></Link>
                </li>
            </ul>
        </nav>
         </>
    )
}

export default Header
