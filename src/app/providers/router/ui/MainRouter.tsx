import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  mainRouteConfig,
  MainRoutePath,
} from '../../../../shared/config/routeConfig/routeConfig';
import { Box, CircularProgress } from '@mui/material';
import MainLayout from '../../../../layouts/MainLayout';
import PrivateRoute from '../../../../shared/config/routeConfig/PrivateRoute';
import { useAuth } from '../../../../shared/lib/hooks/useAuth';

const MainRouter: FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route element={<MainLayout />}>
        {Object.values(mainRouteConfig).map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={
              <Suspense fallback={<CircularProgress />}>
                {path === MainRoutePath.account ? (
                  <PrivateRoute isAuth={isAuthenticated} element={element} />
                ) : (
                  <Box>{element}</Box>
                )}
              </Suspense>
            }
          />
        ))}
      </Route>
    </Routes>
  );
};

export default MainRouter;
