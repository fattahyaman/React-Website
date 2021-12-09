import React from 'react';
import {BrowserRouter , Route , Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/HomePage/Home';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route exact path='/' element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
