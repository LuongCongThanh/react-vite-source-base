import { Outlet } from 'react-router-dom';
import Header from '@core/layout/components/Header';
import ToggleSwitchMode from '@shared/components/toggle-witch/ToggleSwitchMode';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <div className="main-layout-content">
        <ToggleSwitchMode />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
