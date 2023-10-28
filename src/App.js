// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Navigate } from "react-router-dom";
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Play from './components/Play';
import Celebrate from './components/Celebrate';
const App = ()=> {
  return (
  
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/play' element={<Play/>}/>
  <Route path='/celebrate' element={<Celebrate/>}/>

</Routes> 

  );
}

export default App;
