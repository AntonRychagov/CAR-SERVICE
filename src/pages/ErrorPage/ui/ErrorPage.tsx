import { Box, Link as MuiLink, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <Box textAlign="center">
      <Typography pb={1}>Такой страницы не существует</Typography>
      <MuiLink component={RouterLink} to={'/'} underline="none">
        Вернуться домой
      </MuiLink>
    </Box>
  );
};

export { ErrorPage };
