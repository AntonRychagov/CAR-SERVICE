import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { Alert, AlertTitle } from '@mui/material';
import { styled, Theme } from '@mui/material/styles';
import { ErrorBoxProps } from '../../../shared/types';
import { useTranslation } from 'react-i18next';

const ErrorBoxContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
  position: 'fixed',
  left: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  zIndex: 1300, // Привязка поверх всех элементов
  transition: 'transform 0.4s ease-in-out',
  transform: 'translateX(-100%)',
  '&.show': {
    transform: 'translateX(0)',
  },
  bottom: theme.spacing(5),
  [theme.breakpoints.down('md')]: {
    top: theme.spacing(8),
    bottom: 'auto',
  },
}));

const ErrorBox: React.FC<ErrorBoxProps> = ({ showError, onHideError }) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (showError) {
      const timer = setTimeout(() => {
        onHideError();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showError, onHideError]);

  return (
    <ErrorBoxContainer className={showError ? 'show' : ''}>
      <Alert severity="error">
        <AlertTitle>{t('errorBox.errorTitle')}</AlertTitle>
        {t('errorBox.errorMessage')}
      </Alert>
    </ErrorBoxContainer>
  );
};

export { ErrorBox };
