import React from 'react'
import { Link, useLocation } from "react-router-dom";

  

const Navbar = () => {
    let location = useLocation(); // Accessing the current location
    return (
        // the structure of the Navbar
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                {/* Link to the homepage */}
                <Link className="navbar-brand" to="/">iNotebook</Link>
                {/* Button to toggle the navigation menu on small screens */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"> {/* The link to the home page*/}
                            <Link className={`nav-link ${location.pathname==="/"? "active": ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item"> {/* The link to the about page*/}
                            <Link className={`nav-link ${location.pathname==="/about"? "active": ""}`} to="/about">About</Link>
                        </li>

                    </ul>
                    <form className="d-flex"> 
                    {/* The link to the login page*/}
                    <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                    {/* The link to the sign up page*/}
                    <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
