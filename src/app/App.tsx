import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Routes as Route } from 'react-router-dom';

import MainLayout from '@core/layout/MainLayout';
import PrimaryLayout from '@core/layout/PrimaryLayout';

const Login = lazy(() => import('./features/auth/Login'));
const Register = lazy(() => import('./features/auth/Register'));
const Home = lazy(() => import('./features/HomePage/Home'));

interface RouteConfig {
  path: string;
  component: React.ComponentType<any>;
  exact?: boolean;
  routes?: RouteConfig[];
}

const routes = [
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/register',
    component: Register,
    exact: true,
  },
  {
    path: '/',
    component: MainLayout,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true,
      },
    ],
  },
];

export const RouterOutlet = ({ routes }: { routes: RouteConfig[] }) => {
  return (
    <Routes>
      {routes.map((route, i) => (
        <Route key={i} path={route.path} element={<route.component {...route} routes={route.routes} />} />
      ))}
    </Routes>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <PrimaryLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <RouterOutlet routes={routes} />
        </Suspense>
      </PrimaryLayout>
    </BrowserRouter>
  );
};

export default App;
