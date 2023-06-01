import {lazy, ReactNode} from 'react';

// Lazy load components
const PrimaryLayout = lazy(() => import('./core/layout/PrimaryLayout'));
const Login = lazy(() => import('./features/auth/Login'));
const Register = lazy(() => import('./features/auth/Register'));
const Home = lazy(() => import('./features/HomePage/Home'));

interface RouteConfig {
    path: string;
    component: React.ComponentType<any>;
    children?: RouteConfig
    element?: ReactNode;
}
// Define router config
const routes = [
    {
        path: '/',
        component: PrimaryLayout,
        children: [
            {
                path: '/',
                element: () => Login
            },
            {
                path: 'register',
                element: Register,
            },
        ],
    },
];

export default routes;
