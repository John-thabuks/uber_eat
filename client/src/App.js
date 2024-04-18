import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navigation/Navbar';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/ContactUs';
import Login from "./Auth/Login"
import RideRequests from "./components/Rider/RideRequests"
import ViewAllRestaurants from "./components/Restaurant/ViewAllRestaurants"
import { AuthContext } from "./AuthContxt"

function App() {


  return (
    <AuthContext>
      <BrowserRouter>
        <>

          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/RideRequest' element={<RideRequests />} />
            <Route path='/AllRestaurants' element={<ViewAllRestaurants />} />
          </Routes>
          {/* <RideRequests baseURL={baseURL} /> */}
        </>
      </BrowserRouter>
    </AuthContext>
  );
}

export default App;



