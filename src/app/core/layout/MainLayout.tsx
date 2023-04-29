import React from 'react';
import { Link } from 'react-router-dom';
import { RouterOutlet } from '../../App';
interface RouteConfig {
  path: string;
  component: React.ComponentType<any>;
  exact?: boolean;
  routes?: RouteConfig[];
}
interface MainLayoutProps {
  routes: RouteConfig[];
}

const MainLayout = ({ routes }: MainLayoutProps) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <div>
        <RouterOutlet routes={routes} />
      </div>
    </div>
  );
};

export default MainLayout;
