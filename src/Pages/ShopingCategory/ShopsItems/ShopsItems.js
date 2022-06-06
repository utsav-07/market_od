import React , {useEffect} from 'react'
import ButtonContainer from '../../../Components/Buttons/ButtonContainer';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

import { Navigation } from "swiper";

export default function ShopsItems(props) {


    let location = useLocation()

    console.log(location.state.shopItem)


    const[ShopItems , setShopItems] = React.useState([]);

    useEffect(() => {
        setShopItems(location.state.shopItem)
    }, [])
    
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


      return (
        <div className='MainShopContainer d-flex justify-content-center align-content-center'>
            <div className='m-25 bg-white  row overflow-scroll' style={{ width: '80vw', height: '350px', padding: '25px' }}>
                <div style={{ height: '10px', width: '300px' }}>

                    <div class="input-group " >
                        <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
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
                            return (
                                <SwiperSlide key={index}>
                                    <span class="fa-stack" style={{ verticalAlign: 'top' }}>
                                        <i class="fa-regular fa-circle fa-stack-2x"></i>
                                        <i class="fa-solid fa-flag fa-stack-1x"></i>
                                    </span>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>




                {ShopItems.map((item, index) => {
                    return (



                        <div key={index} className="card m-3" style={{ width: '200px', height: '150px' }}>


                                <div className='d-flex flex-column mt-2 align-items-center'>

                                    <span>{item.itemName}</span>
                                    <span>{item.itemPrice}</span>
                            <Link to={{
                            
                            }}
                                style={{
                                    textDecoration: 'none'
                                }} >
                                    <div className="card-body">
                                        <ButtonContainer  className='btn btn-primary btn-block' text='Add To Cart' />
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
