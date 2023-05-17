import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';
import React from 'react'
import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify';
import styled from 'styled-components';
import Logo from '../assets/Logo.png';
import {registerRoute} from"../utils/Routes.js";
import BackImg from '../assets/BackImg.jpg'




const Register =
    () => {
      const navigate = useNavigate();

      const [values, setValues] = useState({

        usernames: '',
        email: '',
        password: '',
        confirmPassword: '',
      });

      const tostOptions = {


        position: 'bottom-right',

        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
      }

      const handleSubmit = async (event) => {
        event.preventDefault();

        if (handleValidation()) {
          const {email, usernames, password} = values;

          const {data} = await axios.post(registerRoute, {


            email,
            usernames,
            password,
          });


          if (data.status === false) {
            toast.error(data.msg, tostOptions);
          }

          if (data.status === true) {
            localStorage.setItem('chat-app-user', JSON.stringify(data.Users));



            navigate('/');
          }
        }
      };

     

      const handleValidation = () => {
        const {password, email, confirmPassword, usernames} = values;


        if (password !== confirmPassword) {
          toast.error('Password did not match', tostOptions);

          return false;

        } else if (usernames.length < 3) {
          toast.error('username is shorter', tostOptions);

          return false;

        } else if (password.length < 8) {
          toast.error('Password is shorter ', tostOptions);

          return false;

        } else if (email === '') {
          toast.error('Email is required.', tostOptions);
          return false;
        }


        return true;
      };
      const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
      };



  return (
 

    <>

<div className = "Backimg">

<img src = {BackImg} alt='logo' id='img' />

</div>

  

    <FormContainer>

   
  

    <form action='' onSubmit={(event) => handleSubmit(event)}>

    

      <div className='Brand'>

      <img src = {Logo} alt='logo' height={
    100}/>

       <h1>Healthify</h1>

       </div>

       

       <input type = 'text' placeholder = ' UserName' name = 'usernames'onChange={(e) => handleChange(e)}/>
   
       <input type = 'email' placeholder = ' Email' name = 'email' onChange={
    (e) => handleChange(e)}/>

       <input type = 'password' placeholder = 'Password' name = 'password' onChange={(e) => handleChange(e)}/>
       
       <input type = 'password' placeholder = 'Confirm Password' name = 'confirmPassword' onChange={
    (e) => handleChange(e)}/>

 
        <button type='submit' id='btn'>Create User</button>

        <span>
            Already have an account ?  <Link to='/login'>LOGIN.</Link> </span>

    </form>

    

    <ToastContainer/>

    

     </FormContainer>
   
    </>
  )
    }

export default Register

const FormContainer = styled.div`

  height: 100vh;

  width: 100vw;


  display:flex;

  flex-direction: column;

  justify-content: center;

  align-items : center;
  
  

  
  
  

  


  gap: 1rem;

  form{

       display:flex;
       flex-direction: column;
       gap: 2rem;
       border-radius: 2rem;
       padding: 3rem 5rem;
       background-color:  white;
       border-radius: 2rem;
       margin-left: 700px;
       margin-top: -90rem;
       position:relative;
       top: 70px;
       left:-100px;
     
      

     
  }


  input{

    border:2px solid purple;
    background-color:transparent;
    padding: 1rem;
    border-radius: 0.4 rem;
    width:100%;
    width: 20rem;
    color:black;
    font-size: 1rem;
    margin-left: 0.4rem;


  }

 

  button{


      height: 3rem;
      width:20rem;
      background-color: blue;

      border-radius: 0.5rem;

      color: white;

      font-size: 1.2rem;

      font-weight: bold;
      margin-left: 0.4rem;
      border: none;

    
   }


  }

  span{

    color: black;
    font-size: 1.2rem;
    position: relative;
    left: 0.7rem;light blue hexcode
    
   

    a{

      text-transform: uppercase;
      text-decoration: none;
      color: blue;
      padding: 0.5rem;
    }
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    flex-direction: row;
    
   
  }

  h1 {
    color: black;
    position: relative;
    top: -4rem;
    left:6rem;
    font-size: 2.5rem;
    
  }

  img {
    height: 5rem;
    position: relative;
  }


  @media only screen and (max-width: 480px) and (min-width: 300px)  {

   form{

        margin-right: 400px;
        border: none;
        margin-top: 180px;
   }


  }

  @media only screen and (max-width: 769px) and (min-width: 481px) {

    form{
  
        margin-left: -20px;
  
    }


  }

  @media only screen and (max-width: 768px) and (min-width: 1024px) {

    form{
  
        margin-left: 220px;
  
    }

  }


    @media only screen and (max-width: 1200px) and (min-width: 1024px) {

      form{
      
          margin-left: -100px;
          
        
    
      }
  
  
    }
  

    @media only screen and (max-width: 1201px) {

      form{
      
          margin-left : -100px;
          
        
    
      }
  
  
    }
  





`
