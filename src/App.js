import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./home";
import Gallery from "./gallery";
import AboutPage from './about';
import ContactPage from './contact';
import Loginpage from './login';
import Register from './register';
import Viewdata from './viewdata';
import Editdata from './edit';
import Delete from './delete';



const App = () => {    //or function App(){
  return (
   <BrowserRouter>
    <Routes>
    
   {/*  <Route index element={<HomePage />} /> */}
    <Route path='home' element={<HomePage />} />
    <Route path='gallery' element={<Gallery />} />
    <Route path='about' element={<AboutPage />} />
    <Route path='contact' element={<ContactPage />} />
    <Route path='login' element={<Loginpage />}/>
    <Route path='register' element={<Register />}/>
    <Route path='viewdata' element={<Viewdata />}/>
    <Route path='edit' element={<Editdata />}/>
    <Route path='delete' element={<Delete />}/>
    
    </Routes>
   </BrowserRouter>
  )
}
export default App