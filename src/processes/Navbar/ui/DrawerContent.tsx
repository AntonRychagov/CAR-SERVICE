import React from 'react';
import { Box, Typography, IconButton, List, ListItem, ListItemText } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { styled, Theme, useTheme } from '@mui/material/styles';
import { DrawerContentProps } from '../../../shared/types';
import { useAuth } from '../../../shared/lib/hooks/useAuth';
import { useTranslation } from 'react-i18next';

const StyledLink = styled(Link)(({ theme }: { theme: Theme }) => ({
  textDecoration: 'none',
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  fontSize: '1.25rem',
  fontWeight: 'bold',
  marginRight: theme.spacing(2),
}));

const DrawerContent: React.FC<DrawerContentProps> = ({
  handleLinkClick,
  handleDrawerToggle,
}) => {
  const theme = useTheme();
  const { isAuthenticated } = useAuth();
  const { t } = useTranslation();

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Box
        sx={{
          my: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 2,
        }}
      >
        <Typography variant="h6" noWrap>
          CAR SERVICE
        </Typography>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ color: theme.palette.mode === 'dark' ? 'white' : 'black' }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        <ListItem component={StyledLink} to="/" onClick={handleLinkClick}>
          <ListItemText primary={t('drawerContent.home')} />
        </ListItem>
        {isAuthenticated ? (
          <ListItem component={StyledLink} to="/account" onClick={handleLinkClick}>
            <ListItemText primary={t('drawerContent.account')} />
          </ListItem>
        ) : (
          <ListItem component={StyledLink} to="/login" onClick={handleLinkClick}>
            <ListItemText primary={t('drawerContent.login')} />
          </ListItem>
        )}
      </List>
    </Box>
  );
};

export { DrawerContent };
