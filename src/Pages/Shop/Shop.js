import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Shop.css'
import { ShopContentData } from './ShopContent';
import { motion } from "framer-motion"

export default function Shop() {


    const [shopContent, setShopContent] = React.useState([]);


    useEffect(() => {
        setShopContent(ShopContentData)
    }, [])


    return (
        <div className='MainShopContainer'>



            <section >
                <div class="text-center container py-5">
                    <h4 class="mt-4 mb-5  firstText" style={{ fontSize: '40px' }}><strong>Search In Your Store</strong></h4>

                    <div class="row">

                        {shopContent.map((item, index) => {
                            return (

                                <div class="col-lg-3 col-md-12 mb-4">
                                    <Link to={{
                                        pathname: '/shopinCategory/' + item.shops,
                                    }}
                                        style={{
                                            textDecoration: 'none'
                                        }} >
                                         <motion.div whileHover={{
                                                scale: 0.7,
                                                transition: { duration: 0.5, ease: "easeOut" },
                                            }} whileTap={{ scale: 0.9 }} >

                                        <div class="card">
                                           
                                                <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                                                    data-mdb-ripple-color="light">
                                                    <img src="https://media.istockphoto.com/photos/grocery-store-shop-in-vintage-style-with-fruit-and-vegetables-crates-picture-id1314210006?b=1&k=20&m=1314210006&s=170667a&w=0&h=DyAxk9wLQMxYIzMlqrieFtx2LeIi_dmWRZG-agnAhng="
                                                        class="w-100" />
                                                    <a href="#!">
                                                        <div class="mask">

                                                        </div>
                                                        <div class="hover-overlay">
                                                            <div class="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="card-body">

                                                    <h5 class="card-title mb-3" style={{ color: 'black', color: '#097054' }}>{item.shops}</h5>


                                                </div>
                                        </div>
                                            </motion.div>
                                    </Link>
                                </div>

                            )
                        }
                        )}




                        {/* {shopContent.map((item, index) => {
                    return (



                        <div key={index} className="card m-3" style={{ width: '200px', height: '150px' }}>


                            <Link  to={{
                                pathname: '/shopinCategory/' + item.shops,
                            }} 
                                style={{
                                    textDecoration: 'none'
                                }} >
                                <div className='d-flex flex-column mt-2 align-items-center'>

                                    <span className="fa-stack fa-2x">
                                        <i className="fa-solid fa-circle fa-stack-2x"></i>
                                        <i className={item.iconName}></i>
                                    </span>
                                    <div className="card-body">
                                        <h6 className="card-title text-black-50">{item.shops}</h6>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                }
                )} */}















                    </div>
                </div>
            </section>


























            {/* <div className='xoverFlow shadow d-flex bg-white  row overflow-scroll' style={{ width: '80vw', height: '300px', padding: '25px'  }}> */}

            {/* <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="..." alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                </div> */}
            {/* <div className='mx-4'>
                    <div className='d-flex'>
                        <div className='d-flex '>

                            <i class="fas fa-search" aria-hidden="true"></i>
                            <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                                aria-label="Search" />
                            <ButtonContainer class='btn btn-primary btn-block' text='Search' />
                        </div>

                    </div>

                    <div>

                    </div>
                </div> */}



            {/* {shopContent.map((item, index) => {
                    return (



                        <div key={index} className="card m-3" style={{ width: '200px', height: '150px' }}>


                            <Link  to={{
                                pathname: '/shopinCategory/' + item.shops,
                            }} 
                                style={{
                                    textDecoration: 'none'
                                }} >
                                <div className='d-flex flex-column mt-2 align-items-center'>

                                    <span className="fa-stack fa-2x">
                                        <i className="fa-solid fa-circle fa-stack-2x"></i>
                                        <i className={item.iconName}></i>
                                    </span>
                                    <div className="card-body">
                                        <h6 className="card-title text-black-50">{item.shops}</h6>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                }
                )} */}













            {/* </div> */}
        </div>
    )
}
