import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const OuterFooterContainer = styled(Box)({
  backgroundColor: '#1a1a1a',
  width: '100%',
  position: 'relative',
  bottom: 0,
});

const FooterContainer = styled(Container)({
  color: '#fff',
  padding: '16px',
  textAlign: 'center',
});

// Test develop branch

const Footer: React.FC = () => (
  <OuterFooterContainer>
    <FooterContainer maxWidth="lg">
      <Box mt={4}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} CAR SERVICE. Все права защищены.
        </Typography>
      </Box>
    </FooterContainer>
  </OuterFooterContainer>
);

export { Footer };
