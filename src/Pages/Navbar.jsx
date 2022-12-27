import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="Nav">

            <NavLink className="Nav1" to="/">Home</NavLink>
            <NavLink className="Nav1" to="/Students">Students</NavLink>
            <NavLink className="Nav1" to="/ContactUs">Contact Us</NavLink>

        </div>
    );
}

export default Navbar;