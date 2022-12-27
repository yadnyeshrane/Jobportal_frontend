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
import EditProfile from './components/EditProfile';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={ <Profile/>} />
      <Route path='/edit_profile' element={<EditProfile/>}/>
      </Routes>
       </BrowserRouter>
     
     
   
     
    </div>
  );
}

export default App;
