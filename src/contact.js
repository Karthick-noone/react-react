import React from 'react';
import HeaderPage from './headermenu';
import myimages from './imgs/logo192.png';
import MainLayout from './mainlayout';
function ContactPage() {
  const containerStyle = {
    height: '75px',
    display: 'flex',
    width:'auto'
  };
  const imageContainerStyle = {
    float: 'left',
    padding: '10px'
  };

  const descriptionStyle = {
    float: 'left',
    paddingTop: '20px',
    width: '970px'
    

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
 
  const map ={
    width:'600px',
    height:'450px',
    marginLeft:'200px',
    marginTop:'20px'
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
        <img src={myimages} alt="logo" width={"150px"} />
        </div>
        <div style={descriptionStyle}>
       
           
            
        <iframe style={map} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" allowFullScreen></iframe>
        </div>
      </div>

      <div style={footerStyle}>
      Copyrights &copy;{year.getFullYear()}
      </div>
    </div>
    </MainLayout>
  );
}

export default ContactPage;