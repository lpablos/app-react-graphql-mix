import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">REACTJS-GRAPHQL</Link>
                
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Listado</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/new-message">Nuevo</Link>
                            </li>
                        </ul>                
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar


