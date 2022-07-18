import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './Payment.css';

export default function Payment() {


    let location = useLocation()

    console.log(location.state.finalCart)

    const [finalCart, setFinalCart] = React.useState([]);

    useEffect(() => {
        setFinalCart(location.state.cartDetail)
    }, [])

    return (
        <div className='MainShopContainer'>





            <div className='d-flex justify-content-between paymetnContainer'>


                <div class="mx-4 cardSelection">

                    <div class="card d-flex flex-column  h-50 " style={{ width: '200px' }}>


                        <ul class="list-group">
                            <li class="list-group-item">Credit/Denit Card</li>
                            <li class="list-group-item">Net Banking</li>
                            <li class="list-group-item">UPI</li>
                            <li class="list-group-item">CashOn Delivery</li>

                        </ul>

                    </div>
                </div>

                <div class="cardDetails">



                    <div class="">
                        <div class="card ">
                            <div class="card-header">
                                {/* <div class="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">

                                    <ul role="tablist" class="nav bg-light nav-pills rounded nav-fill mb-3">
                                        <li class="nav-item"> <a data-toggle="pill" href="#credit-card" class="nav-link active "> <i class="fas fa-credit-card mr-2"></i> Credit Card </a> </li>
                                        <li class="nav-item"> <a data-toggle="pill" href="#paypal" class="nav-link "> <i class="fab fa-paypal mr-2"></i> Paypal </a> </li>
                                        <li class="nav-item"> <a data-toggle="pill" href="#net-banking" class="nav-link "> <i class="fas fa-mobile-alt mr-2"></i> Net Banking </a> </li>
                                    </ul>
                                </div> */}



                                <div id="credit-card" class="tab-pane fade show active pt-3">
                                    <form role="form" >
                                        <div class="form-group"> <label for="username">
                                            <h6>Card Owner</h6>
                                        </label> <input type="text" name="username" placeholder="Card Owner Name" required class="form-control " /> </div>
                                        <div class="form-group"> <label for="cardNumber">
                                            <h6>Card number</h6>
                                        </label>
                                            <div class="input-group"> <input type="text" name="cardNumber" placeholder="Valid card number" class="form-control " required />
                                                <div class="input-group-append"> <span class="input-group-text text-muted"> <i class="fab fa-cc-visa mx-1"></i> <i class="fab fa-cc-mastercard mx-1"></i> <i class="fab fa-cc-amex mx-1"></i> </span> </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-8">
                                                <div class="form-group"> <label><span class="hidden-xs">
                                                    <h6>Expiration Date</h6>
                                                </span></label>
                                                    <div class="input-group"> <input type="number" placeholder="MM" name="" class="form-control" required /> <input type="number" placeholder="YY" name="" class="form-control" required /> </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="form-group mb-4"> <label data-toggle="tooltip" title="Three digit CV code on the back of your card">
                                                    <h6>CVV <i class="fa fa-question-circle d-inline"></i></h6>
                                                </label> <input type="text" required class="form-control" /> </div>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>



                        </div>
                    </div>






                    <div class="">
                        <div class="card d-flex flex-row">
                            <div class="card-body">
                                <button style={{ alignItems: 'center' }} type="button" class="btn btn-warning btn-block btn-lg">Proceed To Pay</button>
                            </div>

                            <div className=''>
                                <p className='m-4'>Rs 10000</p>
                            </div>


                        </div>


                    </div>

                </div>


                <div class="row mx-4">
                    <div className='d-flex flex-column'>


                        <div class="mb-4 position-static">
                            <div class="card mb-4">
                                <div class="card-header py-3">
                                    <h5 class="mb-0 text-font">{finalCart.length} item
                                        {/* <span class="float-end mt-1"
                                        style={{ fontSize: '13px' }}>Edit</span> */}
                                    </h5>
                                </div>
                                <div class="card-body ">

                                    <ul class="list-group list-group-flush">
                                        <li
                                            class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 text-muted">
                                            Cart Total
                                            <span>$35.00</span>
                                        </li>

                                        <li
                                            class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 text-muted">
                                            Discount
                                            <span>$35.00</span>
                                        </li>

                                        <li
                                            class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 text-muted">
                                            Shipping Charge
                                            <span>$35.00</span>
                                        </li>

                                    </ul>





                                    <div class="card-footer mt-4">
                                        <ul class="list-group list-group-flush">

                                            <li
                                                class="list-group-item d-flex justify-content-between align-items-center px-0 fw-bold text-uppercase">
                                                Total
                                                <span>$35.00</span>
                                            </li>
                                        </ul>
                                    </div>


                                </div>
                            </div>
                        </div>


                        <div class="row ">

                            <div class="mb-4 position-static">
                                <div class="card mb-4">
                                    <div class="card-header py-3">
                                        <h6 class="mb-0 text-font">Shipping Adddress
                                            {/* <span class="float-end mt-1"
                                        style={{ fontSize: '13px' }}>Edit</span> */}
                                        </h6>
                                    </div>

                                    <label class="form-label" for="form11Example7">Additional information</label>
                                    <textarea class="form-control" id="form11Example7" rows="4"></textarea>


                                    <div class="card-footer mt-4">
                                        <ul class="list-group list-group-flush">

                                            change
                                        </ul>
                                    </div>

                                </div>



                            </div>
                        </div>





                    </div>




                </div>





            </div>
        </div>


    )
}
