import React, { useState } from 'react';
import HeaderPage from './headermenu';
import myimages from './imgs/logo192.png';
import axios from 'axios';
import MainLayout from './mainlayout';

function Register() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    number: '',
    password: '',
    gender: '',
    languagesKnown: [],
  });

  const [errors, setErrors] = useState({
    email: '',
    number: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      // Handle checkboxes separately to update languagesKnown as an array
      setValues((prevValues) => ({
        ...prevValues,
        languagesKnown: checked
          ? [...prevValues.languagesKnown, name]
          : prevValues.languagesKnown.filter((lang) => lang !== name),
      }));
    } else {
      setValues({ ...values, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation here
    const { email, number, password } = values;
    const newErrors = {
      email: '',
      number: '',
      password: '',
    };

    // Basic email validation (you can customize this)
    if (!email || !email.match(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/)) {
      newErrors.email = <span style={{ color: 'red' }}>Invalid email address</span>;
    }

    // Basic phone number validation (you can customize this)
    if (!number || !number.match(/^\d{10}$/)) {
      newErrors.number = <span style={{ color: 'red' }}>Invalid phone number (10 digits)</span>;
    }

    // Basic password validation (you can customize this)
    if (!password || password.length < 6) {
      newErrors.password = <span style={{ color: 'red' }}>Password must be at least 6 characters</span>;
    }

    // If there are errors, don't submit the form
    if (newErrors.email || newErrors.number || newErrors.password) {
      setErrors(newErrors);
    } else {
      // Submit the form or make the API call here
      axios
        .post('http://localhost:7787/register', values) // Use '/register' endpoint for registration
        .then((res) => {
          if (res.data && res.data.message === 'Registration successful') {
            window.alert('Registered successfully!!');
            // Clear the form after successful registration
            setValues({
              name: '',
              email: '',
              number: '',
              password: '',
              gender: '',
              languagesKnown: [], // Clear the languagesKnown array
            });
            setErrors({
              email: '',
              number: '',
              password: '',
            });
          } else {
            window.alert('Registration failed.');
          }
        })
        .catch((err) => {
          console.error(err);
          window.alert('Registration failed.');
        });
    }
  };

  const containerStyle = {
    height: '75px',
    display: 'flex',
  };

  const imageContainerStyle = {
    float: 'left',
    padding: '10px',
  };

  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    height: '60px',
    width: '100%', // Set the width to 100%
     // Fixed position to stick to the bottom
    bottom: 0, // Stick to the bottom
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  };

  const descriptionStyle = {
    float: 'left',
    paddingTop: '20px',
    width: '970px',
  };

  const lp = {
    textAlign: 'center',
    marginTop: '-15px',
  };

  const year = new Date();

  return (
    <MainLayout>
    <div>
      <div style={containerStyle} className="bgcolor">
        <HeaderPage />
      </div>
      <div>
        <div style={imageContainerStyle}>
          <img src={myimages} alt="logo" width="150px" />
        </div>
      </div>
      <div style={descriptionStyle}>
        <div className="contact-form">
          <h2 style={lp}>Register Page</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name"><b>Name:</b></label>
              <input
                type="text"
                id="name"
                name="name"
                required
                onChange={handleChange}
                value={values.name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email"><b>Email:</b></label>
              <input
                type="email"
                id="email"
                name="email"
                required
                onChange={handleChange}
                value={values.email}
              />
              <div className="error-message">{errors.email}</div>
            </div>
            <div className="form-group">
              <label htmlFor="number"><b>Mobile number:</b></label>
              <input
                type="tel"
                id="number"
                name="number"
                required
                onChange={handleChange}
                value={values.number}
              />
              <div className="error-message">{errors.number}</div>
            </div>
            <div className="form-group">
              <label htmlFor="password"><b>Password:</b></label>
              <input
                type="password"
                id="password"
                name="password"
                required
                onChange={handleChange}
                value={values.password}
              />
              <div className="error-message">{errors.password}</div>
            </div>
            <div className="form-group" style={{ display: 'flex' }} >
              <label htmlFor="gender" ><b>Gender:</b></label>
              <input
                type="radio"
                id="male"
                name="gender"
                value="Male"
                required
                onChange={handleChange}
                style={{marginLeft:'75px'}}
                checked={values.gender === 'Male'}
              />
              <label htmlFor="male" style={{ marginLeft: '15px' }}>Male</label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="Female"
                onChange={handleChange}
                style={{marginLeft:'40px'}}
                checked={values.gender === 'Female'}
              />
              <label htmlFor="female" style={{ marginLeft: '15px' }}>Female</label>
            </div>
            <div className="form-group" style={{ display: 'flex' }}>
              <label htmlFor="languagesKnown"><b>Languages known:</b></label>
              <input
                type="checkbox"
                id="tamil"
                name="Tamil"
                value={'Tamil'}
                style={{ marginLeft: '10px' }}
                onChange={handleChange}
                checked={values.languagesKnown.includes('Tamil')}
              />
              <label htmlFor="tamil" style={{ marginLeft: '10px' }}>Tamil</label>
              <input
                type="checkbox"
                id="english"
                name="English"
                value={'English'}
                onChange={handleChange}
                style={{ marginLeft: '15px' }}
                checked={values.languagesKnown.includes('English')}
              />
              <label htmlFor="english" style={{ marginLeft: '10px' }}>English</label>
              <input
                type="checkbox"
                id="malayalam"
                name="Malayalam"
                value={'Malayalam'}
                onChange={handleChange}
                style={{ marginLeft: '15px' }}
                checked={values.languagesKnown.includes('Malayalam')}
              />
              <label htmlFor="malayalam" style={{ marginLeft: '10px' }}>Malayalam</label>
            </div>
            <button type="submit">Register</button>

          </form>
        </div>
      </div>
      <div style={footerStyle}>
      Copyrights &copy;{year.getFullYear()}
      </div>
    </div>
    </MainLayout>
  );
}

export default Register;


