import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

import PrimaryLayout from '@core/layout/PrimaryLayout';
import MainLayout from '@core/layout/MainLayout';
import Login from './features/auth/Login';
import Register from './features/auth/Register';
import Home from './features/HomePage/Home';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/primary" element={<PrimaryLayout />}>
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
};
export default App;