import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./component/NavBar";
import Home from "./page/Home";
import About from "./page/About";
import Hobby from "./page/Hobby";
import Design from "./page/Design";
import Contact from "./page/Contact";

  
function App() {

  return (
    <>
    <Router>
      <NavBar />
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/hobby" element={<Hobby />} />
            <Route path="/design" element={<Design />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
    <Home/>
    <About/>
    <Hobby/>
    <Design/>
    <Contact/>
    </>
  )
}

export default App
