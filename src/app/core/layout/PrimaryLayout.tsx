import { Outlet } from 'react-router-dom';

const PrimaryLayout = () => {
  return (
    <div>
      <h1>Primary Layout</h1>
      <nav>{/* Đặt các liên kết đến các trang con tại đây */}</nav>
      <Outlet />
    </div>
  );
};

export default PrimaryLayout;
