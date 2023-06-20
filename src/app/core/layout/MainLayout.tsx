import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <h1>Main Layout</h1>
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold text-blue-600">Install & Setup Vite + React + Typescript + Tailwind CSS 3</h1>
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
