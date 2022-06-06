import React from 'react'
import { Link } from 'react-router-dom'

import ButtonContainer from  '../Buttons/ButtonContainer'


export const Navigation = () => {
    return (
        <>


            <nav className="shadow navbar navbar-light bg-light fixed-top">
                <div className="container-fluid">
                    <div className='d-flex justify-content-between  my-2'>

                        <button className="navbar-toggler btn-sm" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <Link className="nav-link" aria-current="page" to="/"><span className='text-danger'>Market<span className='fw-bold'>OD</span></span></Link>
                    </div>
                    <div className='d-flex'>
                        <div className='me-3'>
                            <a href='/Login'>
                                <ButtonContainer class='btn btn-outline-primary btn-sm' text = 'Log In'></ButtonContainer>
                            </a>
                        </div>
                        <ButtonContainer class='btn btn-outline-primary btn-sm' text = 'Be A Partner'></ButtonContainer>
                    </div>

                    <div className="offcanvas offcanvas-start w-25" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="d-flex justify-content-end align-items-center offcanvas-header">

                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="d-flex navbar-nav justify-content-end align-items-center flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/shop">Shop</Link>
                                </li>
                   
                                <li className="nav-item">
                                    <Link className="nav-link" to="/services">Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/booking">Booking</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/shopByProd">Appointment</Link>
                                </li>
                                

                                {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="https://www.google.com" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                                        <li><a className="dropdown-item" href="https://www.google.com">Action</a></li>
                                        <li><a className="dropdown-item" href="https://www.google.com">Another action</a></li>

                                    </ul>
                                </li> */}
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
