import './styles/app.css';
import Navbar from './components/navbar';
import NotFound from './pages/notFound';
import Home from './pages/home';
import Work from './pages/work';
import About from './pages/about';
import Contact from './pages/contact';
import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollTop from './components/scrollTop';




function App() {
  
  return (
    <div className="app-root">
      <ScrollTop />
      <Routes>  
        <Route index path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
        {/*
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects" element={<About />} />
        <Route path="/projects" element={<Contact />} />*/}
      </Routes>
    </div>
  );
}

export default App;
