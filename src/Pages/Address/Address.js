import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function Address() {

    let location = useLocation()

    console.log(location.state.finalCart)




    const [finalCart, setFinalCart] = React.useState([]);

    useEffect(() => {
        setFinalCart(location.state.finalCart)
    }, [])


    return (
        <div className='MainShopContainer'>


            <div class="container my-5 py-5">


                <section>

                    <div class="row">

                        <div class="col-md-4 mb-4 position-static">
                            <div class="card mb-4">
                                <div class="card-header py-3">
                                    <h5 class="mb-0 text-font">{finalCart.length} item
                                        {/* <span class="float-end mt-1"
                                        style={{ fontSize: '13px' }}>Edit</span> */}
                                    </h5>
                                </div>
                                <div class="card-body ">
                                    {finalCart.map((item, index) => {
                                        return (
                                            <div class="row py-3">
                                                <div class="col-md-4">
                                                    <img src={item.img}
                                                        class="rounded-3" style={{ width: '100px' }} alt="Blue Jeans Jacket" />
                                                </div>
                                                <div class="col-md-6 ms-3">
                                                    <span class="mb-0 text-price">Rs {item.finalPrice}</span>
                                                    <p class="mb-0 text-descriptions">{item.name}</p>
                                                    <span class="text-descriptions fw-bold">Black</span> <span
                                                        class="text-descriptions fw-bold">UK 8</span>
                                                    <p class="text-descriptions mt-0">Qty:<span class="text-descriptions fw-bold">{item.quantity}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })}


                                    <div class="card-footer mt-4">
                                        <ul class="list-group list-group-flush">
                                            <li
                                                class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 text-muted">
                                                Subtotal
                                                <span>$35.00</span>
                                            </li>
                                            <li
                                                class="list-group-item d-flex justify-content-between align-items-center px-0 fw-bold text-uppercase">
                                                Total to pay
                                                <span>$35.00</span>
                                            </li>
                                        </ul>
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div class="col-md-8 mb-4">
                            <div class="card mb-4">
                                <div class="card-header py-3">
                                    <h5 class="mb-0 text-font text-uppercase">Delivery address</h5>
                                </div>
                                <div class="card-body">
                                    <form>

                                        <div class="row mb-4">
                                            <div class="col">
                                                <div class="form-outline">
                                                    <input type="text" id="form11Example1" class="form-control" />
                                                    <label class="form-label" for="form11Example1">First name</label>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-outline">
                                                    <input type="text" id="form11Example2" class="form-control" />
                                                    <label class="form-label" for="form11Example2">Last name</label>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="form-outline mb-4">
                                            <input type="text" id="form11Example3" class="form-control" />
                                            <label class="form-label" for="form11Example3">Company name</label>
                                        </div>


                                        <div class="form-outline mb-4">
                                            <input type="text" id="form11Example4" class="form-control" />
                                            <label class="form-label" for="form11Example4">Address</label>
                                        </div>


                                        <div class="form-outline mb-4">
                                            <input type="email" id="form11Example5" class="form-control" />
                                            <label class="form-label" for="form11Example5">Email</label>
                                        </div>


                                        <div class="form-outline mb-4">
                                            <input type="number" id="form11Example6" class="form-control" />
                                            <label class="form-label" for="form11Example6">Phone</label>
                                        </div>


                                        <div class="form-outline mb-4">
                                            <textarea class="form-control" id="form11Example7" rows="4"></textarea>
                                            <label class="form-label" for="form11Example7">Additional information</label>
                                        </div>


                                        <div class="form-check d-flex justify-content-center mb-2">
                                            <input class="form-check-input me-2" type="checkbox" value="" id="form11Example8" checked />
                                            <label class="form-check-label" for="form11Example8">
                                                Create an account?
                                            </label>
                                        </div>
                                    </form>
                                </div>

                            </div>
                            <div class=" card">
                                <div className='d-flex flex-row justify-content-evenly '>
                                    <Link to={'/cart/AddressSection/Payement'}
                                        state={{
                                            cartDetail: finalCart,
                                        }}
                                    >

                                        <div class="card-body">
                                            <button style={{  alignItems : 'center' }} type="button" class="btn btn-warning btn-block btn-lg">CHECKOUT</button>
                                        </div>
                                    </Link>

                               
                                </div>

                            </div>

                        </div>






                    </div>

                </section>


            </div>
        </div>
    )
}
