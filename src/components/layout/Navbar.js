import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <Link to='/' className="brand-logo"> DessertKuAja</Link>
            </div>
        </nav>
    )
}