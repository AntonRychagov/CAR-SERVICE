import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { Alert, AlertTitle } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";
import { ErrorBoxProps } from "../../../shared/types";

const ErrorBoxContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
  position: "fixed",
  left: 0,
  width: "100%",
  display: "flex",
  justifyContent: "center",
  zIndex: 1300, // Привязка поверх всех элементов
  transition: "transform 0.4s ease-in-out",
  transform: "translateX(-100%)",
  "&.show": {
    transform: "translateX(0)",
  },
  bottom: theme.spacing(5),
  [theme.breakpoints.down("md")]: {
    top: theme.spacing(8),
    bottom: "auto",
  },
}));

const ErrorBox: React.FC<ErrorBoxProps> = ({ showError, onHideError }) => {
  useEffect(() => {
    if (showError) {
      const timer = setTimeout(() => {
        onHideError();
      }, 3000); // скрыть сообщение через 3 секунды

      return () => clearTimeout(timer); // очистить таймер при размонтировании компонента
    }
  }, [showError, onHideError]);

  return (
    <ErrorBoxContainer className={showError ? "show" : ""}>
      <Alert severity="error">
        <AlertTitle>Ошибка</AlertTitle>
        Автосервис не найден, попробуем еще раз.
      </Alert>
    </ErrorBoxContainer>
  );
};

export { ErrorBox };
