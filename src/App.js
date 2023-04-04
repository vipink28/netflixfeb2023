import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Homescreen from './pages/Homescreen';
import Navigation from './components/Navigation';
import Browse from './pages/Browse';

function App() {
  return (
   <BrowserRouter>
    <Navigation />
      <Routes>
         <Route path='/' element={<Homescreen />}></Route>
         <Route path='/browse' element={<Browse />}></Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
