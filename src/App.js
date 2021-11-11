import React from 'react';

import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { UserStorage } from './UserContext';

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
