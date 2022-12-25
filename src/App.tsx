import React from 'react';
import logo from './logo.svg';
// import './App.css';
import Topbar from './components/Topbar';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Services from './components/Services';
import Profile from './components/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={ <Profile/>} />
      </Routes>
       </BrowserRouter>
     
     
   
     
    </div>
  );
}

export default App;
