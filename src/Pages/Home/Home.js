import React from 'react'
import ButtonContainer from '../../Components/Buttons/ButtonContainer'
import './Home.css'

export default function Home() {
  return (

    <div className='HomeConatiner'>
      <div className='d-flex flex-column text-center  justify-content-center align-content-center'>
        <span className='text-danger  fs-2'>market<span className='fw-bold'>OD</span>.com</span>

        {/* //           <div className='d-flex flex-row justify-content-center align-content-center mt-lg-5 roundContainer'>
    //               <div className='rounded-circle  mx-5  bg-white'><i class="mt-3 fs-5 fab  fa-light fa-utensils"></i></div>
    //               <div className='rounded-circle mx-5  bg-white'><i class="fs-5 mt-3 fab fa-brands fa-shopify"></i></div>
    //               <div className='rounded-circle mx-5 bg-white'><i class="fs-5 mt-3 fab fa-brands fa-servicestack"></i></div>
    //               <div className='rounded-circle mx-5 bg-white'><i class="fs-5 mt-3 fab fa-brands fa-buffer"></i></div>
    //               <div className='rounded-circle mx-5 bg-white'><i class="fs-5 mt-3 fab fa-brands fa-bandcamp"></i></div>
    //           </div>
    //     </div>
    // </div> */}
        <div className='d-flex  flex-column mt-3 fs-4 fw-semibold'>

          <span>Shop Services and more</span>
          <span>come to tour door</span>
        </div>
        <div className="input-group rounded mt-4 px-lg-5 ">
          <span className="input-group-text border-0" id="search-addon">
            <i className="fas fa-search"></i>
          </span>
          <input type="search" className="form-control rounded me-3" placeholder="Search By City Pincode" aria-label="Search" aria-describedby="search-addon" />


        </div>
        <div className='mt-4'>

          <ButtonContainer class='btn btn-primary btn-block mb-4' text='SEARCH'></ButtonContainer>
        </div>
      </div>
      <div className='d-flex justify-content-center align-items-center'>

        <div class="card mb-3" style={{ 'maxWidth': '540px' }}>
          <div class="row no-gutters">
            <div class="col-md-4">
              <img style={{'height' : '100%'}} src="https://www.patnabeats.com/wp-content/uploads/2015/12/Aaman-Resturant-13.jpg" className=" rounded-end card-img" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
