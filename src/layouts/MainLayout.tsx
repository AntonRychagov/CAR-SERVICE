import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../processes/Navbar/ui/Navbar';
import { MainRoutePath } from '../shared/config/routeConfig/routeConfig';

const MainLayout: React.FC = () => {
  const location = useLocation();

  const hideNavbar = [MainRoutePath.login, MainRoutePath.register].includes(
    location.pathname,
  );

  return (
    <div>
      {!hideNavbar && <Navbar />}
      <Outlet />
    </div>
  );
};

export default MainLayout;
