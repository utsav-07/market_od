import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

export default function ProductDetail() {


    let location = useLocation();

    // console.log(location.state.shopItem)


    const [ShopItems, setShopItems] = React.useState([]);

    useEffect(() => {
        setShopItems(location.state.shopItem)
    }, [])

    console.log(ShopItems);

    return (
        <div className='MainShopContainer'>
                Product Detail Page
        </div>




    )
}
