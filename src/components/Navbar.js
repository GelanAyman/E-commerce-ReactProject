import {Routes, Route, Link}  from 'react-router-dom'
import logo from '../images/logo.png'
import './Style.css'



function Navbar() {

        return (<>
                


                <nav className="navbar navbar-expand-lg bg-dark fixed-top">
                        <div className="container-fluid">
                                <Link className="navbar-brand" to="/"> 
                                                <img className='logoImg' src={logo} /> 
                                </Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                </button>
                                
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                                <li className="nav-item">
                                                        <Link className="nav-link active" aria-current="page" to="/">
                                                                Home
                                                        </Link>
                                                </li>
                                
                                                <li className="nav-item">
                                                        <Link className="nav-link" to="/contactUs">
                                                                Contact Us
                                                        </Link>
                                                </li>
                
                                        </ul>

                                        {/* <div class="d-none d-md-block">
                                                <i class="cart-icon text-light fa-solid fa-cart-shopping mx-2 my-sm-4 my-md-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                        <span class="position-absolute top-10 start-70 translate-middle badge rounded-pill bg-danger" id="Cart">
                                                                0
                                                                <span class="visually-hidden">unread messages</span>
                                                        </span>
                                                </i>
                                                </div> */}


                                </div>
                        </div>
                </nav>
        </>);
}

export default Navbar;