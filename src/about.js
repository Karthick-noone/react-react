import React from 'react';
import HeaderPage from './headermenu';
import myimages from './imgs/logo192.png';
import MainLayout from './mainlayout';

function AboutPage() {
  const containerStyle = {
    minHeight: '100vh', // Set a minimum height to fill the viewport
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  };

  const headerStyle = {
    marginBottom: '20px',
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    display: 'block', // Ensure the image is a block-level element
    margin: '0 auto',
    marginTop:'90px',// Center the image horizontally
  };

  const descriptionStyle = {
    marginLeft: '100px ',
    width:'90%',
    fontSize:'20px',
    marginTop:'-30px'
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


  const year = new Date();

  return (
    <MainLayout>
    <div style={containerStyle}>
      <HeaderPage style={headerStyle} />
      <div>
        <img src={myimages} alt="logo" style={imageStyle} />
        <div style={descriptionStyle}>
          <h1 style={{ fontSize: '25px' }}>About React.js</h1>
          <b>
            React.js, commonly referred to as React, is an open-source JavaScript library used for building user interfaces (UIs) and single-page applications. Developed and maintained by Facebook (now Meta) and a community of developers, React was first released in 2013 and has since gained widespread adoption in the web development community.
            React is built around the concept of reusable components. Components are self-contained, modular units that can be composed together to create complex user interfaces. This component-based approach makes it easier to manage and maintain large codebases.
            React uses a Virtual DOM (Document Object Model) to optimize the rendering process. Instead of directly manipulating the real DOM, React creates a virtual representation of it in memory. When there are changes, React calculates the most efficient way to update the real DOM, resulting in improved performance.
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

export default AboutPage;
