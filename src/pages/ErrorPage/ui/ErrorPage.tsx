import { Box, Link as MuiLink, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { MainRoutePath } from '../../../shared/config/routeConfig/routeConfig';

const ErrorPage = () => {
  return (
    <Box textAlign="center">
      <Typography pb={1}>Такой страницы не существует</Typography>
      <MuiLink component={RouterLink} to={MainRoutePath.main} underline="none">
        Вернуться домой
      </MuiLink>
    </Box>
  );
};

export { ErrorPage };
