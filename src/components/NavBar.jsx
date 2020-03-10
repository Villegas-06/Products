    import React from 'react'

    const NavBar = ({
        total
    }) => (
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <h1 className="title">My store</h1>
                    </a>
        
            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        
        <div id="navbarBasicExample" className="navbar-menu">
            
        
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                    <a className="button is-primary">
                        <span className="icon">
                        <i className="fas fa-shopping-cart"></i>
                        </span>
                        <span className="tag is-dark">
                            ${total}
                        </span>
                    </a>
                
                    </div>
                </div>
            </div>
        </div>
        </div>
        </nav>
       
    );
    

    export default NavBar;