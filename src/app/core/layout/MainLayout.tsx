// MainLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <h1>Main Layout</h1>
      <nav>{/* Đặt các liên kết đến các trang con tại đây */}</nav>
      <Outlet />
    </div>
  );
};

export default MainLayout;
