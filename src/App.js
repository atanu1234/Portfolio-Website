// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar2 from './components/Navbar2';
import Home2 from './components/Home2';
import About2 from './components/About2';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <>
      <Navbar2 />
      <div className="">
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="/about" element={<About2 />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
