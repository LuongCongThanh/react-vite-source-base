// import { BrowserRouter, Routes, Route } from 'react-router-dom';
//
// import Home from '@features/HomePage/Home';
// import MainLayout from '@core/layout/MainLayout';
// import Login from '@features/auth/Login';
// import Register from '@features/auth/Register';
// import PrimaryLayout from '@core/layout/PrimaryLayout';
//
// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<MainLayout />}>
//           <Route path="home" element={<Home />} />
//         </Route>
//         <Route path="/primary" element={<PrimaryLayout />}>
//           <Route path="login" element={<Login />} />
//           <Route path="register" element={<Register />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };
// export default App;

// import { BrowserRouter as Router } from 'react-router-dom';
// import MainLayout from '@core/layout/MainLayout';
// import Home from '@features/HomePage/Home';
// import PrimaryLayout from '@core/layout/PrimaryLayout';
// import Login from '@features/auth/Login';
// import Register from '@features/auth/Register';
// import RouterOutlet from './router/routerOutlet';
//
// const routes = [
//   {
//     path: '/',
//     element: <MainLayout />,
//     children: [{ path: 'home', element: <Home /> }]
//   },
//   {
//     path: '/primary',
//     element: <PrimaryLayout />,
//     children: [
//       { path: 'login', element: <Login /> },
//       { path: 'register', element: <Register /> }
//     ]
//   }
//   // Thêm các route tương tự ở đây
// ];
//
// const App = () => {
//   return (
//     <Router>
//       <RouterOutlet routes={routes} />
//     </Router>
//   );
// };
//
// export default App;

import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Home from '@features/HomePage/Home';
import Login from '@features/auth/Login';
import Register from '@features/auth/Register';
import PrimaryLayout from '@core/layout/PrimaryLayout';
import MainLayout from '@core/layout/MainLayout';

const AuthRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </Routes>
);

const AdminRoutes = () => {
  // You can implement the logic to check if the user is authenticated here
  const isAuthenticated = true; // Replace this with your actual authentication check

  return isAuthenticated ? (
    <Routes>
      <Route index element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
    </Routes>
  ) : (
    <Navigate to="/login" />
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/auth/*" element={<PrimaryLayout />}>
        <Route index element={<AuthRoutes />} />
      </Route>
      <Route path="/admin/*" element={<MainLayout />}>
        <Route index element={<AdminRoutes />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
