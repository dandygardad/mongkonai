import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App'
import Home from './pages/Home';
import Character from './pages/Character'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('mongkonai-root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* Routes */}
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="ch/:char" element={<Character />} />
        </Route>
      </Routes>
    {/* End of Routes */}
    </BrowserRouter>
  </React.StrictMode>
);