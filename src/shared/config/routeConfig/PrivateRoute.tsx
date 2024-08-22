import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { MainRoutePath } from './routeConfig';

interface PrivateRouteProps {
  element: ReactNode;
  isAuth: boolean;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ element, isAuth }) => {
  return isAuth ? element : <Navigate to={MainRoutePath.login} />;
};
export default PrivateRoute;
