import React from 'react'
import './index.scss'
import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="container-navbar">

            <NavLink to="/" >
                <div className="logo-website">
                    <h1>Blog</h1>
                </div>
            </NavLink>
            <div className="link-website">
                <ul>
                    <li>
                        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" className={(nav) => (nav.isActive ? "nav-active" : "")} >Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/register" className={(nav) => (nav.isActive ? "nav-active" : "")} >Register</NavLink>
                    </li>
                </ul>
            </div>

        </nav>
    )
}