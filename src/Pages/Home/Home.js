import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import ButtonContainer from '../../Components/Buttons/ButtonContainer'
import './Home.css'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { locationtContext } from '../../Components/Router/Routing'
import { motion } from "framer-motion"
import shops from '../../Icons/shops.png'
import appointment from '../../Icons/appointment.png'
import services1 from '../../Icons/services1.png'
import eateries from '../../Icons/eateries.png'
import booking from '../../Icons/booking.png'
import axios from 'axios'
import Footer from '../../Components/Footer/Footer'
//import axios from 'axios'



const API_endpoint = `https://api.openweathermap.org/data/3.0/onecall?`;

const API_Key = `f38bd9ef63f36730ac1d05a3aa4bbf09`;


export default function Home() {



  const [agree, setAgree] = React.useState(false);

  const { location, SetAddress } = useContext(locationtContext);


  const [latitude, SetLatitude] = useState('');
  const [longitude, SetLongitude] = useState('');




  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      // console.log(position);
      SetLatitude(position.coords.latitude);
      SetLongitude(position.coords.longitude);

    })


    console.log(latitude);
    console.log(longitude);

    console.log(`${API_endpoint}lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,daily,alerts,flags&appid=${API_Key}`);

    let finalAPIEndPont = `${API_endpoint}lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,daily,alerts,flags&appid=${API_Key}`;
    axios.get(finalAPIEndPont)
      .then(res => {
        console.log(res.data);
      }
      )
      .catch(err => {
        console.log(err);
      }
      )
    // console.log(axios.get(`${API_endpoint}lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,daily,alerts,flags&appid=${API_Key}`));

    // axios.get(`${API_endpoint}
    // lat=${latitude}
    // &lon=${longitude}
    // &exclude=minutely,hourly,daily,alerts,
    // flags&appid=${API_Key}`)
    // .then(res => {
    //   console.log(res.data);
    // })
  }, []);


  const [color, setColor] = React.useState('#bbb');

  const items = [
    {
      id: 0,
      name: 'Patna'
    },
    {
      id: 1,
      name: 'Delhi'
    },
    {
      id: 2,
      name: 'Odisha'
    },
    {
      id: 3,
      name: 'Kerla'
    },
    {
      id: 4,
      name: 'Chennai'
    }
  ]

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected

    SetAddress(item.name);
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }


  const formatResult = (item) => {
    return (
      <>

        <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
      </>
    )
  }


  const [data, setData] = React.useState([
    {
      id: 1,
      name: 'Enteries',
      color: '#2D3F50',
      text: 'abc',
      image: eateries,
    },
    {
      id: 2,
      name: 'Shop',
      color: '#2D3F50',
      text: 'abc',
      image: shops,
    },
    {
      id: 3,
      name: 'Services',
      color: '#2D3F50',
      text: 'abc',
      image: services1,
    },
    {
      id: 4,
      name: 'Booking',
      color: '#2D3F50',
      text: 'abc',
      image: booking,
    },
    {
      id: 5,
      name: 'Appointment',
      color: '#2D3F50',
      text: 'abc',
      image: appointment,
    }

  ]);

  const handleAgree = () => {
    setAgree(true);
  }

  const handleColor = (index, colors) => {
    if (colors === '#2D3F50') {
      setData(data.map(item => {
        if (item.id === index) {
          return {
            ...item,
            color: '#15A085'
          }
        }
        return item;
      }
      ))
    }
    else {
      setData(data.map(item => {
        if (item.id === index) {
          return {
            ...item,
            color: '#2D3F50'
          }
        }
        return item;
      }

      ))
    }

  }


  return (

    <div className='HomeConatiner'>

      {/* <AddressDialog agree={handleAgree} agreeStatus={agree} /> */}
      <div className='d-flex flex-column text-center justify-content-center align-content-center'>
        <motion.div animate={{ y: 10 }} transition={{ ease: "easeOut", duration: 2 }}>

          <span style={{ color: '#097054' }} className='fs-2'>market<span className='fw-bold'>OD</span>.com</span>
        </motion.div>


        <div className='justify-content-center my-3 checkBoxContainer IconsTab row'>

          <div className='checkthis'>
            {data.map((item, index) => {


              return (
                <>



                  <div onClick={() => handleColor(index + 1, item.color)} className="mt-5" style={{ borderRadius: '50%', backgroundColor: data[index].color, height: '65px', width: '65px', margin: '0px 22px', cursor: 'pointer' }}>
                    <motion.div whileHover={{
                      scale: 1.8,
                      transition: { duration: 0.5, ease: "easeOut" },
                    }} whileTap={{ scale: 0.9 }} className='Icon'>
                      <img src={item.image} style={{ height: '45px', width: '45px' }} alt='icon' />
                    </motion.div>
                    <label style={{ fontFamily: 'Oswald', fontSize: '20px' }} className='mt-3 '>{item.name}</label>

                  </div>
                </>
              )
            }
            )}
          </div>

        </div>








        <div className='d-flex  flex-column mt-5 fs-4 firstText'>

          <span>Shop Services and more</span>
          <span>come to tour door</span>
        </div>

        {/* <span className="input-group-text border-0" id="search-addon">
            <i className="fas fa-search"></i>
          </span> */}
        {/* <input   type="search" className="form-control rounded me-3" placeholder="Search By City Pincode" aria-label="Search" aria-describedby="search-addon" /> */}

        <div className='d-flex justify-content-center my-5' style={{ zIndex: '1' }} >
          <div style={{ width: 700 }}>
            <ReactSearchAutocomplete
              items={items}
              onSearch={handleOnSearch}
              onHover={handleOnHover}
              onSelect={handleOnSelect}
              onFocus={handleOnFocus}
              autoFocus
              formatResult={formatResult}
            />
          </div>

        </div>


        {/* <div className='mt-4'>

          <ButtonContainer class='btn btn-primary btn-block mb-4' text='SEARCH'></ButtonContainer>
        </div> */}
      </div>
      <div className='cardComtainer justify-content-center align-items-center'>

        <div className="card mb-3" style={{ 'maxWidth': '540px' }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img style={{ 'height': '100%' }} src="https://www.patnabeats.com/wp-content/uploads/2015/12/Aaman-Resturant-13.jpg" className=" rounded-end card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='cardComtainer justify-content-center align-items-center'>

        <div className="card mb-3" style={{ 'maxWidth': '540px' }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img style={{ 'height': '100%' }} src="https://www.patnabeats.com/wp-content/uploads/2015/12/Aaman-Resturant-13.jpg" className=" rounded-end card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='cardComtainer justify-content-center align-items-center'>

        <div className="card mb-3" style={{ 'maxWidth': '540px' }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img style={{ 'height': '100%' }} src="https://www.patnabeats.com/wp-content/uploads/2015/12/Aaman-Resturant-13.jpg" className=" rounded-end card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>



      <Footer/>

    </div>























  )
}




function AddressDialog(props) {

  const [open, setOpen] = React.useState(true);
  const [agree, setAgree] = React.useState(true);

  const { location, SetAddress } = useContext(locationtContext);



  const handleClickOpen = () => {
    setOpen(true);

  };

  const handleClose = () => {
    setOpen(false);
  };

  return (

    <>
      {props.agreeStatus ?
        <>
        </>

        : <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Use  location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Click On Agree To Give Access Location.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={props.agree} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      }
    </>
  )
}