import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Shop.css'
import { ShopContentData } from './ShopContent';

export default function Shop() {


    const [shopContent, setShopContent] = React.useState([]);


    useEffect(() => {
        setShopContent(ShopContentData)
    }, [])


    return (
        <div className='MainShopContainer d-flex justify-content-center align-content-center'>
            <div className='d-flex bg-white  row overflow-scroll' style={{ width: '80vw', height: '300px', padding: '25px' }}>
                
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



                {shopContent.map((item, index) => {
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
                )}













            </div>
        </div>
    )
}
