import React from 'react';
import './Navbar.css';

const NavbarBootstrap = () => (
    <nav className="navbar navbar-expand-lg  sticky-top ">
        <a className="navbar-brand" href="" style={{marginLeft : '40px', color:'white'}}>
            <img src="./logo.svg" width="35" height="35"
                 className="d-inline-block align-top" alt="" style={{marginRight : '10px'}}/>
                Todos List
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

        </div>
    </nav>
);

export default NavbarBootstrap;
