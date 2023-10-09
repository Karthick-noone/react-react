import React from 'react';
import HeaderPage from './headermenu';
import myimages from './imgs/logo192.png';
import MainLayout from './mainlayout';
import backgroundImg from './img/8.jpg';

function HomePage() {
  const containerStyle = {
    backgroundColor: '#f4f4f5',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundAttachment:'fixed'
  };

  const headerStyle = {
    marginBottom: '20px',
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    display: 'block', // Ensure the image is a block-level element
    margin: '0 auto',
    marginTop: '100px', // Center the image horizontally
  };

  const descriptionStyle = {
    textAlign: 'center',
    margin: '20px 0',
    fontSize:'20px',
  };

  const footerStyle = {
    backgroundColor: '#333',
    color: 'white',
    height: '60px',
    width: '100%', // Set the width to 100%
    position: 'fixed', // Fixed position to stick to the bottom
    bottom: 0, // Stick to the bottom
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  };

  const year = new Date();

  return (
    <MainLayout>
      <div style={containerStyle}>
        <HeaderPage style={headerStyle} />
        <div>
          <img src={myimages} alt="logo" style={imageStyle} />
          <div style={descriptionStyle}>
            <h1 style={{ fontSize: '24px' }}>My Home Page</h1>
            <b>
              Welcome to my react website. This is a simple example of a react
              homepage.
            </b>
          </div>
        </div>
        <div style={footerStyle}>
          Copyrights &copy;{year.getFullYear()}
        </div>
      </div>
    </MainLayout>
  );
}

export default HomePage;
