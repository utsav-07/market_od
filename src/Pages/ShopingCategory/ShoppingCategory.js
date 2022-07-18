import React, { useEffect } from 'react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper";

import './ShoppingCategory.css'
import { Link } from 'react-router-dom';
import { ShoppingCategoryContent } from './ShoppingCategoryContent';
import ButtonContainer from '../../Components/Buttons/ButtonContainer';


export default function ShoppingCategory() {


    const [search, setSearch] = React.useState("");

    const [count, setCount] = React.useState([
        {
            sl_no: 1,
        },
        {
            sl_no: 2,
        },
        {
            sl_no: 3,
        },
        {
            sl_no: 4,
        },
        {
            sl_no: 5,
        }
    ]);


    const handleSearch = (e) => {

        console.log(e.target.value)
        setSearch(e.target.value)
    }


    const [shops, setShops] = React.useState([]);


    useEffect(() => {
        setShops(ShoppingCategoryContent)
    }, [])

   // console.log(window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1))
    return (
        <div className='MainShopContainer d-flex justify-content-center align-content-center'>
            <div className='xoverFlow shadow m-25 bg-white  row overflow-scroll' style={{ width: '80vw', height: '350px', padding: '25px' , overflowX : 'hidden !important'}}>
                <div style={{ height: '10px', width: '300px' }}>

                    <div class="input-group " >
                        <input type="search" onChange={handleSearch} class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                        <button type="button" class="btn btn-outline-primary">search</button>
                    </div>
                </div>

                <div className='' style={{ margin: '70px 0px' }}>
                    <Swiper
                        slidesPerView={1}
                        breakpoints={{
                            550: {
                                slidesPerView: 3,
                                slidesPerGroup: 3
                            }
                        }}
                        spaceBetween={10}
                        slidesPerGroup={1}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >



                        {count.map((item, index) => {
                           // console.log(item.sl_no)
                            return (
                                <SwiperSlide>
                                    <span class="fa-stack" style={{ verticalAlign: 'top' }}>
                                        <i class="fa-regular fa-circle fa-stack-2x"></i>
                                        <i class="fa-solid fa-flag fa-stack-1x"></i>
                                    </span>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>




                {shops.filter((data) => {
                    if (window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1) === data.shops) {
                        return data
                    }
                }).filter((data) => {

                    if (search === '') {
                        return data
                    } else {
                        if (data.shopName.toLowerCase().includes(search.toLowerCase())) {
                            return data
                        }
                    } 

                }).map((item, index) => {

                    console.log(item.items)
                    return (



                        <div key={index} className="card m-3" style={{ width: '200px', height: '150px' }}>


                                <div className='d-flex flex-column mt-2 align-items-center'>

                                    <span>{item.shopName}</span>
                            <Link to=
                                { '/shopinCategory/' + item.shops + '/' + item.shopName}
                                 state = {{
                                    shopItem : item.items   
                                }}
                                    
                        

                
                                style={{
                                    textDecoration: 'none'
                                }} >
                                    <div className="card-body">
                                        <ButtonContainer  className='btn btn-primary btn-block' text='Shop' />
                                    </div>
                            </Link>
                                </div>
                        </div>
                    )
                }
                )}


            </div>

        </div>
    )
}
