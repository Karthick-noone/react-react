import React, { useState, useEffect } from 'react';
import HeaderPage from './headermenu';
import axios from 'axios';
import MainLayout from './mainlayout';

function Edit({ current, lists, setList, handleUpdate, handleDelete }) {
  const handleInput = (e) => {
    const newList = lists.map((li) =>
      li.id === current.id ? { ...li, [e.target.name]: e.target.value } : li
    );
    setList(newList);
  };

  const inputStyle = {
    width: 'auto',
  };

  return (
    <tr>
      <td>{current.id}</td>
      <td>
        <input type="text" name="Username" onChange={handleInput} value={current.Username} style={inputStyle} />
      </td>
      <td>
        <input type="password" name="Password" onChange={handleInput} value={current.Password} style={inputStyle} />
      </td>
      <td>
        <input type="email" name="email" onChange={handleInput} value={current.email} style={inputStyle} />
      </td>
      <td>
        <input type="tel" name="number" onChange={handleInput} value={current.number} style={inputStyle} />
      </td>
      <td>
        <button type="button" onClick={() => handleUpdate(current.id)}>Update</button>
        <button type="button" onClick={() => handleDelete(current.id)}>Delete</button>
      </td>
    </tr>
  );
}

function Viewdata() {
  const [lists, setList] = useState([]);
  const [updateState, setUpdateState] = useState(-1);

  useEffect(() => {
    // Fetch data from the database when the component mounts
    axios.get('http://localhost:7787/login1')
      .then((response) => {
        setList(response.data); // Update the state with the fetched data
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to run the effect only once

  /* const handleEdit = (id) => {
    setUpdateState(id);
  }; */

  const handleUpdate = (id) => {
    // Add your update logic here, e.g., send updated data to the server
    // After updating, reset updateState to -1
    setUpdateState(-1);
  };

  const handleDelete = (id) => {
    // Send a request to delete the item from the server
    axios.delete(`http://localhost:7787/login1/${id}`)
      .then(() => {
        // Remove the deleted item from the state
        const updatedList = lists.filter((item) => item.id !== id);
        setList(updatedList);
      })
      .catch((error) => {
        console.error('Error deleting data:', error);
      });
  };

  // Rest of your code remains the same
  const containerStyle = {
    height: '75px',
    display: 'flex',
  };
  const tbl = {
    border: '1px solid',
    borderCollapse: 'collapse',
    width: '60%',
    marginLeft: '20%',
    marginTop: '10px',
    padding: '50px',
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
  const btnStyle = {
    fontSize: '13px',
    paddingLeft: '15px',
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

  const year = new Date();

  return (
    <MainLayout>
    <div>
      <div style={containerStyle} class="bgcolor">
        <HeaderPage />
      </div>
      <table style={tbl} className='blur'>
        <thead>
          <tr>
            <th style={thStyle}>Sl.no</th>
            <th style={thStyle}>Username</th>
            <th style={thStyle}>Password</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Mobile number</th>
            <th style={thStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
        {lists.slice().reverse().map((current , index) => (
            updateState === current.id ? (
              <Edit
                key={current.id}
                current={current}
                lists={lists}
                setList={setList}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete} // Pass handleDelete function
              />
            ) : (
              <tr key={current.id}>
                <td style={tdStyle}>{index + 1}</td>
                <td style={tdStyle}>{current.Username}</td>
                <td style={tdStyle}>{current.Password}</td>
                <td style={tdStyle}>{current.email}</td>
                <td style={tdStyle}>{current.number}</td>
                <td>
                 
                  <button style={btnStyle} onClick={() => handleDelete(current.id)}>Delete</button> {/* Add Delete button */}
                </td>
              </tr>
            )
          ))}
        </tbody>
      </table>

      <div style={footerStyle}>
      Copyrights &copy;{year.getFullYear()}
      </div>
    </div>
    </MainLayout>
  );
}

export default Viewdata;
