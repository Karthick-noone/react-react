import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderPage from './headermenu';
import { Link } from 'react-router-dom';
import myimages from './imgs/logo192.png';
import axios from 'axios';
import './css/style.css'
import MainLayout from './mainlayout';

function Loginpage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const userData = { email, password };

    axios
      .post('http://localhost:7787/login1', userData) // Use '/login1' endpoint for login
      .then((res) => {
        if (res.data.message === 'Login successfully!!') {
          alert('Login successful :)');
          navigate('../gallery'); // Replace '/gallery' with your desired route
        } else {
          alert('Login unsuccessful :(');
        }
      })
      .catch((err) => {
        console.error(err);
        alert('Login unsuccessful :(');
      });
  }

  // Rest of your component code...


    const containerStyle = {
        height: '75px',
        display: 'flex'
      };
      const imageContainerStyle = {
        float: 'left',
        padding: '10px'
      };
      const footerStyle = {
        backgroundColor: '#333',
        color: '#fff',
        height: '60px',
        width: '100%', // Set the width to 100%
        position: 'fixed', // Fixed position to stick to the bottom
        bottom: 0, // Stick to the bottom
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
      }; 
      const descriptionStyle = {
        float:'left ',
        padding: '60px',
        width: '900px',

      };
      const lp ={
        textAlign:'center',
        marginTop:'5px'
      };
     
      const year=new Date();
  return (
    <MainLayout>
    <div>
    <div style={containerStyle}  class="bgcolor">
    <HeaderPage />
      </div>
      <div>
        <div style={imageContainerStyle}>
       <img src={myimages} alt="logo"  width={"150px"}/>
        </div>
        </div>

        <div style={descriptionStyle}>
       
       <div className="contact-form">
       <h2 style={lp}>Login Page</h2>
       <form onSubmit={handleSubmit}>
       <div className="form-group">
       <label htmlFor="name"><b>Email:</b></label>
       <input type="email" id="email" name="email" required onChange={(e) =>setEmail(e.target.value)} />
       </div>
       <div className="form-group">
       <label htmlFor="email"><b>Password:</b></label>
       <input type="password" id="password" name="password" required onChange={(e) =>setPassword(e.target.value)} />
       </div><br />
       <button type="submit" >Login </button> &nbsp; New to React?  <Link to="../register" style={{ textDecoration: 'none',color:'blue' }}><b>Register</b></Link>
       </form>
       </div>

       </div>
     
    
       <div style={footerStyle}>
      Copyrights &copy;{year.getFullYear()}
      </div>
      
      </div>
      </MainLayout>
    
  )
}

export default Loginpage