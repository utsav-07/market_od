import React, { useState, useEffect, useContext } from 'react'

import { Link } from 'react-router-dom'

import ButtonContainer from '../Buttons/ButtonContainer'
import { motion } from "framer-motion"

import './Navigation.css';
import { TextField } from '@mui/material';
import { locationtContext } from '../Router/Routing';


export const Navigation = () => {


    const [isVisible, setIsVisible] = useState(true);

    const { location, SetAddress } = useContext(locationtContext);

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () =>
            window.removeEventListener("scroll", listenToScroll);
    }, [])

    const listenToScroll = () => {
        let heightToHideFrom = 80;
        const winScroll = document.body.scrollTop ||
            document.documentElement.scrollTop;

        if (winScroll > heightToHideFrom) {
            isVisible &&
                setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    return (
        <>


            <nav className="shadow navbar navbar-light fixed-top navbackGround">
                <div className="container-fluid">
                    <div className='d-flex justify-content-between  my-2'>

                        <button className="navbar-toggler btn-sm" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span className="navbar-toggler-icon" ></span>
                        </button>
                        <a class="navbar-brand mx-auto" href="/">
                            <div class="navbar-brand-img">
                                <img src="img/logo/full.png" class="animate" alt="" />
                            </div>
                        </a>
{/* 
                        <Link className="nav-link" aria-current="page" to="/market_od">



                            {
                                isVisible &&

                                <motion.div style={{ color: '#097054', fontWeight: 'bold' }} id="hide" animate={{ x: 10 }} initial={false}>

                                    Market<span className='fw-bold'>OD</span>
                                </motion.div>
                            }

                        </Link> */}
                    </div>
                    <div className='d-flex'>
                        <div className='mx-4'>

                            {location ? <motion.div animate={{ y: 2 }}
                                transition={{ ease: "easeOut", duration: 2 }}>

                                <input
                                    style={{width : '120px'}}
                                    class="form-control"
                                    id="formControlDisabled"
                                    type="text"
                                    value = {location}
                                    placeholder="Disabled input"
                                    aria-label="disabled input example"
                                    disabled
                                />

                                {/* <TextField value={location} id="standard-basic" variant="standard" />  */}
                                </motion.div> : <></>}
                        </div>

                        <div className='me-3'>
                            <Link to='/login'>
                                {/* <i class="fa-solid fa-user"></i> */}
                                {/* <ButtonContainer class='btn btn-outline-primary btn-sm' text='Log In'></ButtonContainer> */}
                                <button type="button" class="btn btn-success btn-rounded">Log In</button>
                            </Link>
                        </div>
                        {/* <ButtonContainer class='btn btn-outline-primary btn-sm' text='Be A Partner'></ButtonContainer> */}
                    </div>

                    <div className="offcanvas offcanvas-start navSize" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="d-flex justify-content-end align-items-center offcanvas-header">

                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="d-flex navbar-nav justify-content-end align-items-center flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link className="nav-link active" data-bs-dismiss="offcanvas" aria-current="page" to="/market_od">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" data-bs-dismiss="offcanvas" to="/shop">Shop</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" data-bs-dismiss="offcanvas" to="/cart">Your Cart</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" data-bs-dismiss="offcanvas" to="/services">Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" data-bs-dismiss="offcanvas" to="/booking">Booking</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" data-bs-dismiss="offcanvas" to="/shopByProd">Appointment</Link>
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
