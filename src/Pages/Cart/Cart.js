import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';



const CartProduct = [
    {
        id: 1,
        name: 'Basi T-shirt',
        fixedPrice: '100',
        finalPrice: '100',
        img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp',
        quantity: 1
    },
    {
        id: 2,
        name: 'Basi T-shirt-2',
        fixedPrice: '200',
        finalPrice: '200',
        img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp',
        quantity: 2
    }
];

export default function Cart() {

    const [cart, setCart] = React.useState([]);
    const [update, setUpdate] = React.useState(false);
    const [Total, setTotal] = React.useState(0);



    useEffect(() => {
        setCart(CartProduct)
    }, [update]);

    function hadlePlusMius(id, type) {

        console.log(id, type);
        if (type === 'plus') {
            cart.map(item => {
                if (item.id === id) {
                    item.quantity += 1;
                    item.finalPrice = item.fixedPrice * item.quantity;
                }
            })
        } else {
            cart.map(item => {
                if (item.id === id) {
                    item.quantity -= 1;
                    item.finalPrice = item.fixedPrice * item.quantity;
                }
            })
        }
        setCart(cart);
        setUpdate(!update);
    }


    function handleRemove(id) {
        cart.map(item => {
            if (item.id === id) {
                cart.splice(cart.indexOf(item), 1);
            }
        }
        )
        setCart(cart);
        setUpdate(!update);
    }

    return (
        <div className='MainShopContainer'>


            <section class="h-100">
                <div class="container h-100 py-5">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-10">

                            <h3 class="fw-normal mb-4 text-black">Your Cart</h3>


                            {cart.map((item, index) => {


                                return (
                                    <div key={index} class="card rounded-3 mb-4">

                                        <div class="card-body p-4">
                                            <div class="row d-flex justify-content-between align-items-center">
                                                <div class="col-md-2 col-lg-2 col-xl-2">
                                                    <img
                                                        src={item.img}
                                                        class="img-fluid rounded-3" alt="product image" />
                                                </div>
                                                <div class="col-md-3 col-lg-3 col-xl-3">
                                                    <p class="lead fw-normal mb-2">{item.name}</p>
                                                    <p><span class="text-muted">Size: </span>M <span class="text-muted">Color: </span>Grey</p>
                                                </div>
                                                <div class="col-md-3 col-lg-3 col-xl-2 d-flex">

                                                    <button class="btn btn-link px-2"
                                                        onClick={() => hadlePlusMius(item.id, 'minus')} >
                                                        <i class="fas fa-minus"></i>
                                                    </button>
                                                    <input id="form1" value={item.quantity} name="quantity" type="text" readonly
                                                        class="form-control form-control-sm" />

                                                    <button class="btn btn-link px-2" onClick={() => hadlePlusMius(item.id, 'plus')}  >
                                                        <i class="fas fa-plus" ></i>
                                                    </button>
                                                </div>
                                                <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                    <h5 class="mb-0">Rs {item.finalPrice}</h5>
                                                </div>
                                                <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                                    <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg" onClick={() => handleRemove(item.id)}></i></a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                );
                            }

                            )}






                            <div class="d-flex justify-content-between p-2 mb-2" style={{ backgroundColor: 'white' }}>
                                <h5 class="fw-bold mb-0">Total:</h5>
                                <h5 class="fw-bold mb-0">Rs 100</h5>
                            </div>


                            <div class="card mb-4">
                                <div class="card-body p-4 d-flex flex-row">
                                    <div class="form-outline flex-fill">
                                        <input type="text" id="form1" class="form-control form-control-lg" />
                                        <label class="form-label" for="form1">Discound code</label>
                                    </div>
                                    <button type="button" class="btn btn-outline-warning btn-lg ms-3">Apply</button>
                                </div>
                            </div>

                            <div class=" card">
                                <div className='d-flex flex-row justify-content-evenly '>
                                    <Link to='/'>

                                        <div class="card-body">
                                            <button style={{ marginRight: '320px' }} type="button" class="btn btn-warning btn-block btn-lg">Continue Shopping</button>
                                        </div>
                                    </Link>

                                    <Link to={'/cart/AddressSection'}
                                        state={{
                                            finalCart: cart
                                        }}
                                    >

                                        <div class="card-body">
                                            <button type="button" class="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
                                        </div>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
