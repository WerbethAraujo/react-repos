import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Repo from './pages/Repo';

import React from 'react';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/repo/:repo' element={<Repo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
