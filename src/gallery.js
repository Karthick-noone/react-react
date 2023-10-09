import React from 'react';
import HeaderPage from './headermenu';
import image1 from './imgs/Surya.jpg';
import image2 from './imgs/face6.jpg';
import image3 from './imgs/face10.jpg';
import image4 from './imgs/face16.jpg';
import image5 from './imgs/suriyas.jpg';
import image6 from './imgs/s.jpg';
import MainLayout from './mainlayout';

function Gallery ()  {
    const containerStyle = {
        height: '75px',
        display: 'flex'
      };
      const descriptionStyle = {
        textAlign: 'center',
        margin: '20px 0',
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
      
      // Add a media query for screens with a maximum width of 768px (adjust as needed)
     
       const imageContainerStyle = {
        float: 'left',
        paddingLeft: '27%'
      };
  return (
    <MainLayout>
    <div>
      <div style={containerStyle}  class="bgcolor">
      <HeaderPage />
      </div>

      <div style={descriptionStyle}>
          <h1>Gallery</h1>
      </div>
      <div style={imageContainerStyle}>
        <div>
        <img src={image1} alt="surya" width={"200px"} height={"200px"} />&nbsp;&nbsp;&nbsp;
        <img src={image2} alt="surya" width={"200px"} />&nbsp;&nbsp;&nbsp;
        <img src={image3} alt="surya" width={"200px"} />&nbsp;&nbsp;&nbsp;
        </div><br />
        <div>
        <img src={image4} alt="surya" width={"200px"} />&nbsp;&nbsp;&nbsp;
        <img src={image5} alt="surya" width={"200px"} />&nbsp;&nbsp;&nbsp;
        <img src={image6} alt="surya" width={"200px"} height={"200px"} />&nbsp;&nbsp;&nbsp;
      </div>
      </div>
      <div style={footerStyle}>
      Copyrights &copy;{year.getFullYear()}
      </div>
    </div>
    </MainLayout>
  )
}

export default Gallery