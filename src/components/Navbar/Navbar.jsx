import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:"#e3f2fd"}}>
        <div className="container-fluid">
            <h1>R</h1>            
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/" className='nav-link'>Home</Link>
                    <Link to="/add" className='nav-link'>Add</Link>
                    <Link to="/cards" className='nav-link'>Cards</Link>                
                </div>
            </div>
        </div>
</nav>
    );
}

export default Navbar;