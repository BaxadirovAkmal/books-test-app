import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/Sign-in';
import SignUp from './pages/Sign-up';
import NotFound from './pages/Not-found';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
