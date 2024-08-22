import { RouteProps } from 'react-router-dom';
import { Home } from '../../../pages/HomePage';
import { ServiceProvider } from '../../../pages/ServicesPage';
import { Search } from '../../../pages/SearchPage';
import { UserAccount } from '../../../entities/UserAccount';
import { ErrorPage } from '../../../pages/ErrorPage';
import { Login, Register } from '../../../pages/AuthPage';

export enum MainRoutes {
  MAIN = 'main',
  SERVICE = 'service',
  SEARCH = 'search',
  ACCOUNT = 'account',
  LOGIN = 'login',
  REGISTER = 'register',
  NOT_FOUND = 'not_found',
}

export const MainRoutePath: Record<MainRoutes, string> = {
  [MainRoutes.MAIN]: '/',
  [MainRoutes.SERVICE]: '/service/',
  [MainRoutes.SEARCH]: '/search',
  [MainRoutes.ACCOUNT]: '/account',
  [MainRoutes.LOGIN]: '/login',
  [MainRoutes.REGISTER]: '/register',
  [MainRoutes.NOT_FOUND]: '*',
};

export const mainRouteConfig: Record<MainRoutes, RouteProps> = {
  [MainRoutes.MAIN]: {
    path: MainRoutePath.main,
    element: <Home />,
  },
  [MainRoutes.SERVICE]: {
    path: `${MainRoutePath.service}:id`,
    element: <ServiceProvider />,
  },
  [MainRoutes.SEARCH]: {
    path: MainRoutePath.search,
    element: <Search />,
  },
  [MainRoutes.ACCOUNT]: {
    path: MainRoutePath.account,
    element: <UserAccount />,
  },
  [MainRoutes.LOGIN]: {
    path: MainRoutePath.login,
    element: <Login />,
  },
  [MainRoutes.REGISTER]: {
    path: MainRoutePath.register,
    element: <Register />,
  },
  [MainRoutes.NOT_FOUND]: {
    path: MainRoutePath.not_found,
    element: <ErrorPage />,
  },
};
