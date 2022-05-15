import React from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from '../views/Main';
import ProductForm from './components/ProductForm';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route element={<Main/>} path="/home" default />
        <Route element={<Detail/>} path="/product/:id" />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
