import React from 'react';
import { Container, Box } from '@mui/material';
import { BannerText } from './BannerText';
import { YandexMap } from './YandexMap';
import { Footer } from './Footer';
import { CompanyList } from './CompanyList';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <BannerText />
        <CompanyList />
        <Box sx={{ mt: 12 }} />
        <YandexMap />
        <Box sx={{ mt: 15 }} />
      </Container>
      <Footer />
    </>
  );
};

export { Home };
