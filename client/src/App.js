import About from './Pages/About'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navigation/Navbar'

function App() {
  return (
    <BrowserRouter>
      <>
        <h1>Welcome</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
