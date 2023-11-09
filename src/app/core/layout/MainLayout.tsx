import { Outlet } from 'react-router-dom';
import Header from '@core/layout/components/Header';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <div className="main-layout-content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
