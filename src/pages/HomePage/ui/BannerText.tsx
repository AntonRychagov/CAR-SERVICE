import React from "react";
import { Typography, Box } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import { useTheme, Theme } from "@mui/material/styles"; // Импортируем useTheme и Theme для использования темы

// Определение анимации
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

// Стили для текста
const AnimatedText = styled(Typography)(({ theme }: { theme: Theme }) => ({
  animation: `${fadeIn} 1s ease-in-out`,
  fontSize: "2rem",
  fontWeight: "bold",
  color: "white", // Устанавливаем белый цвет текста для контраста с подложкой
  textAlign: "center",
  margin: theme.spacing(4, 0),
  fontFamily: "Inter, Arial, sans-serif", // Используем шрифт Inter
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem", // Уменьшаем размер текста на средних экранах
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.25rem", // Еще меньше на маленьких экранах
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "1rem", // Самый маленький размер на очень маленьких экранах
  },
}));

// Стили для подложки
const BackgroundBox = styled(Box)(({ theme }: { theme: Theme }) => ({
  backgroundColor: "#212529", // Используем указанный цвет подложки
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  marginTop: theme.spacing(0), // Добавляем отступ сверху
  marginBottom: theme.spacing(4), // Добавляем отступ снизу
  [theme.breakpoints.down("sm")]: {
    marginTop: theme.spacing(2), // Уменьшаем отступ сверху на мобильных устройствах
    marginBottom: theme.spacing(9), // Уменьшаем отступ снизу на мобильных устройствах
  },
}));

const BannerText: React.FC = () => {
  const theme = useTheme(); // Получаем тему
  return (
    <BackgroundBox theme={theme}>
      <AnimatedText theme={theme} variant="h4">
        Подберите лучший автосервис в вашем городе
      </AnimatedText>
    </BackgroundBox>
  );
};

export { BannerText };
