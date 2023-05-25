import React from 'react';

function Navbar(props) {
    return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:"#e3f2fd"}}>
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>            
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                <a className="nav-link" href="#">Features</a>
                <a className="nav-link" href="#">Pricing</a>
                
            </div>
            </div>
        </div>
</nav>
    );
}

export default Navbar;