import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { Route } from 'react-router-dom';
import './App.css';
import Sidenav from './component/Sidenav';
import Home from "./pages/Home";
import Networs from "./pages/Networks";
import About from './pages/About';
import Contact from './pages/Contact';
import Choice3 from './pages/Choice3';
import Network1 from './networks/Network1';
function App() {
  return (
    <BrowserRouter>
    <Sidenav/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/networks' element={<Networs/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/Choice3' element={<Choice3/>} />
      <Route path='//networks/network1' element={<Network1/>} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
