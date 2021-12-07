import React from 'react';
import {BrowserRouter , Route , Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route  path='/'  />
    
    </Routes>
  </BrowserRouter>
  );
}

export default App;
