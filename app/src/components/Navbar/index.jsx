import React from 'react'
import './index.scss'
import Cookies from "js-cookie";
import { NavLink, useNavigate } from "react-router-dom"

export default function Navbar() {
    const cookie = Cookies.get("user_token");
    const navigate = useNavigate();

    function handleClick() {
        Cookies.remove("user_token");
        navigate("/");
    }

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

                    {cookie !== null && cookie == undefined ? (
                        <>
                            <li>
                                <NavLink to="/login" className={(nav) => (nav.isActive ? "nav-active" : "")} >Login</NavLink>
                            </li>
                            <li>
                                <NavLink to="/register" className={(nav) => (nav.isActive ? "nav-active" : "")} >Register</NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <NavLink to="/disconnect" onClick={handleClick}>Deconnexion</NavLink>
                        </>
                    )}
                </ul>
            </div>

        </nav>
    )
}