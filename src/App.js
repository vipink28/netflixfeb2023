import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Homescreen from './pages/Homescreen';
import Navigation from './components/Navigation';
import Browse from './pages/Browse';
import Popup from './components/Popup';
import BrowseByGenre from './pages/BrowseByGenre';

function App() {
  return (
   <BrowserRouter>
    <Navigation />
      <Routes>
         <Route path='/' element={<Homescreen />}></Route>
         <Route path='/browse/:platform' element={<Browse />}></Route>
         <Route path='/browsebygenre/:platform/:genrename/:genreid' element={<BrowseByGenre />}></Route>
      </Routes>
      <Popup />
   </BrowserRouter>
  );
}

export default App;
