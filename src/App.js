import React from 'react'
import NavbarMenu from './components/Navbar/NavbarMenu';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Home from "./components/Home/Home"
import About from "./components/About/About"
import NotFound from './components/NotFound/NotFound'



 function App() {
  return (
    <>
         <Router>
          <NavbarMenu/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
         </Router>
   
    </>
  )
}

export default App;