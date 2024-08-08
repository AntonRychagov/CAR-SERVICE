import React from "react";
import { Container, Grid, Typography, Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Header } from "../../../shared/ui/components/Header";
import { ServiceCard } from "./ServiceCard";
import { Footer } from "../../../shared/ui/components/Footer";
import fluids from "../../../shared/assets/fluids.png";
import chassis from "../../../shared/assets/chassis.png";
import engine from "../../../shared/assets/engine.png";
import steering from "../../../shared/assets/steering.png";
import brake from "../../../shared/assets/brake-system.png";
import air from "../../../shared/assets/air.png";
import wheel from "../../../shared/assets/wheel-alignment.png";
import transmission from "../../../shared/assets/transmission.png";
import tyre from "../../../shared/assets/tyre-service.png";

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(6),
  color: "#fff",
  backgroundColor: "#ad1818", // Заданный цвет
  "&:hover": {
    backgroundColor: "#ad1818", // Цвет при наведении
  },
  borderRadius: theme.shape.borderRadius,
  textTransform: "none",
  padding: theme.spacing(1, 4),
  fontSize: "1rem",
  [theme.breakpoints.down("sm")]: {
    width: "100%", // Кнопка занимает всю ширину на мобильных устройствах
  },
}));

const ServicesContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(10), // Увеличиваем отступ
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(10), // Добавляем отступ снизу
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "flex-start", // Выравнивание для мобильных устройств
  },
}));

const services = [
  { id: 1, name: "Жидкости и фильтры", price: "от 390 ₽", image: fluids },
  { id: 2, name: "Ходовая часть", price: "от 890 ₽", image: chassis },
  { id: 3, name: "Двигатель", price: "от 790 ₽", image: engine },
  { id: 4, name: "Рулевое управление", price: "от 990 ₽", image: steering },
  { id: 5, name: "Тормозная система", price: "от 990 ₽", image: brake },
  { id: 6, name: "Система кондиционирования", price: "от 890 ₽", image: air },
  { id: 7, name: "Углы установки колес", price: "от 890 ₽", image: wheel },
  { id: 8, name: "Трансмиссия", price: "от 890 ₽", image: transmission },
  { id: 9, name: "Шиномонтаж", price: "от 500 ₽", image: tyre },
];

const ServiceProvider: React.FC = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Header />
        <ServicesContainer>
          <Typography variant="h5" component="div" gutterBottom>
            Услуги
          </Typography>
          <Grid container spacing={2}>
            {services.map((service) => (
              <Grid item xs={12} sm={6} md={4} key={service.id}>
                <ServiceCard
                  id={service.id}
                  name={service.name}
                  price={service.price}
                  image={service.image}
                />
              </Grid>
            ))}
          </Grid>
        </ServicesContainer>
        <ButtonContainer>
          <StyledButton
            variant="contained"
            href="tel:+79999999999" // Ссылка для звонка
          >
            Записаться на услугу
          </StyledButton>
        </ButtonContainer>
      </Container>
      <Footer />
    </>
  );
};

export { ServiceProvider };
