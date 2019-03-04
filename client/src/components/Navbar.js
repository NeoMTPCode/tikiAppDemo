// Navbar.js

import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin">Admin</Link>
                        </li>
                    </ul>
                    {/* <Route exact path="/" component={Home} /> */}
                </div>
            </nav>
        )
    }
}
export default Navbar;