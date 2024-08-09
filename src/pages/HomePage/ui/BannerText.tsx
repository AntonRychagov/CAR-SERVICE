import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import { useTheme, Theme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedText = styled(Typography)(({ theme }: { theme: Theme }) => ({
  animation: `${fadeIn} 1s ease-in-out`,
  fontSize: '2rem',
  fontWeight: 'bold',
  color: 'white',
  textAlign: 'center',
  margin: theme.spacing(4, 0),
  fontFamily: 'Inter, Arial, sans-serif',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.25rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '1rem',
  },
}));

const BackgroundBox = styled(Box)(({ theme }: { theme: Theme }) => ({
  backgroundColor: '#212529',
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  marginTop: theme.spacing(0),
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(9),
  },
}));

const BannerText: React.FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <BackgroundBox theme={theme}>
      <AnimatedText theme={theme} variant="h4">
        {t('banner.title')}
      </AnimatedText>
    </BackgroundBox>
  );
};

export { BannerText };
