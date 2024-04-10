import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navigation/Navbar';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/ContactUs';
import Login from "./Auth/Login"

function App() {

  return (
    <BrowserRouter>
      <>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path='Login' element={<Login />} />
        </Routes>
        {/* <RideRequests baseURL={baseURL} /> */}
      </>
    </BrowserRouter>
  );
}

export default App;



