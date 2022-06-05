import React from 'react'
import { Link } from 'react-router-dom'
import ButtonContainer from '../../../Components/Buttons/ButtonContainer'
import TextFieldContainer from '../../../Components/TextField/TextFieldContainer'
import '../Login/Login.css'




export default function Login() {
  return (
    <div className="LoginContainer">
      <form className='d-flex flex-column justify-content-center align-items-center'>
        <p class="text-center text-primary fs-2 fw-bold">Log In</p>
        <TextFieldContainer  text = {'Email address'} type = {'email'}></TextFieldContainer>
        <TextFieldContainer  text = {'password'} type = {'password'}></TextFieldContainer>
        <div class="row mb-4">
          <div class="col d-flex justify-content-center">

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
              <label class="form-check-label" for="form2Example31"> Remember me </label>
            </div>
          </div>

          <div class="col">

            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <ButtonContainer class = 'btn btn-primary btn-block mb-4' text = 'Sign In' ></ButtonContainer>
     


        <div class="text-center">
          <p>Not a member? <Link to = {'/register'}>Register</Link></p>
          <p>or sign up with:</p>

          <ButtonContainer class = 'btn btn-link btn-floating mx-1' ><i class="fab fa-facebook-f"></i></ButtonContainer>
          <ButtonContainer class = 'btn btn-link btn-floating mx-1' ><i class="fab fa-google"></i></ButtonContainer>
          <ButtonContainer class = 'btn btn-link btn-floating mx-1' ><i class="fab fa-twitter"></i></ButtonContainer>
          <ButtonContainer class = 'btn btn-link btn-floating mx-1' > <i class="fab fa-github"></i></ButtonContainer>
     

        </div>
      </form>

    </div>


  )
}
