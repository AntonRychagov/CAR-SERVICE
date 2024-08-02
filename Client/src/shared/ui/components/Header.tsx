import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const HeaderContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#1a1a1a",
  color: "#fff",
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  textAlign: "center",
  marginBottom: theme.spacing(4),
}));

const Header: React.FC = () => (
  <HeaderContainer>
    <Typography variant="h4" component="h1" gutterBottom>
      Автосервис 555
    </Typography>
    <Typography variant="h6" gutterBottom>
      Мы предоставляем широкий спектр услуг по ремонту и обслуживанию
      автомобилей.
    </Typography>
  </HeaderContainer>
);

export { Header };
