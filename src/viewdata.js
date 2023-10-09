import React,{useEffect , useState} from 'react';
import HeaderPage from './headermenu';
import MainLayout from './mainlayout';

function Viewdata  ()  {
 const [data ,setData] = useState([]) 
 
  useEffect(()=> {
  fetch('http://localhost:7787/login1') //karthickmindtek.site.net:7787
  .then(res => res.json())
  .then(data => setData(data))
  .catch(err => console.log(err));
},[])

    const containerStyle = {
        height: '75px',
        display: 'flex',
       
      };
        const tbl ={
          
          border:'1px solid',
          borderCollapse:'collapse',
          width:'55%',
          marginLeft:'24%',
          marginTop:'10px',padding:'50px',
          marginBottom:'20px'
         
         
        };
        const thStyle = {
          border: '1px solid ',
          textAlign: 'center',
          padding: '10px',
          
          
        };
         const tdStyle = {
          border: '1px solid ',
          textAlign: 'center',
          padding: '8px',

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
        const year=new Date();
      
        
  return (
    <MainLayout>
    <div>
         <div style={containerStyle}  class="bgcolor">
      
      <HeaderPage />
      </div>
  
      <table className='blur' style={tbl}>
        <thead>
        <tr>
        <th style={thStyle}>Sl.no</th>
        <th style={thStyle}>Username</th>
        <th style={thStyle}>Password</th>
        <th style={thStyle}>Email</th>
        <th style={thStyle}>Mobile number</th>
        <th style={thStyle}>Gender</th>
        <th style={thStyle}>Languages_known</th>
        </tr>
        </thead>
        <tbody>

         {data.slice().reverse().map((data, i) =>(
           <tr key={i}>
           <td style={tdStyle}>{i+1}</td>
           <td style={tdStyle}>{data.Username}</td>
           <td style={tdStyle}>{data.Password}</td>
           <td style={tdStyle}>{data.email}</td>
           <td style={tdStyle}>{data.number}</td>
           <td style={tdStyle}>{data.gender}</td>
           <td style={tdStyle}>{data.languagesknown}</td>
         </tr>
         ))}


        
        </tbody>
        
      </table>
     
      <div style={footerStyle}>
      Copyrights &copy;{year.getFullYear()}
      </div>
    </div>
    </MainLayout>
  )
}

export default Viewdata


