// src/pages/Auth/Login.tsx
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  Container,
  Paper,
} from "@mui/material";

interface ILoginFormInput {
  email: string;
  password: string;
  remember: boolean;
}

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInput>();
  const onSubmit: SubmitHandler<ILoginFormInput> = (data) => {
    console.log(data);
    // Добавить логику авторизации
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          borderRadius: 3,
          textAlign: "center",
          backgroundColor: "#fff",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography component="h1" variant="h5" gutterBottom sx={{ color: '#000' }}>
          Авторизация
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email"
            autoComplete="email"
            autoFocus
            {...register("email", { required: "Email is required" })}
            error={!!errors.email}
            helperText={errors.email?.message}
            sx={{
              backgroundColor: "#fff",
              borderRadius: 1,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#000",
                },
                "&:hover fieldset": {
                  borderColor: "#000",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#000",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#000",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#000",
              },
            }}
            InputProps={{
              style: { color: "#000" },
            }}
            InputLabelProps={{
              style: { color: "#000" },
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="password"
            label="Пароль"
            type="password"
            autoComplete="current-password"
            {...register("password", { required: "Password is required" })}
            error={!!errors.password}
            helperText={errors.password?.message}
            sx={{
              backgroundColor: "#fff",
              borderRadius: 1,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#000",
                },
                "&:hover fieldset": {
                  borderColor: "#000",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#000",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#000",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#000",
              },
            }}
            InputProps={{
              style: { color: "#000" },
            }}
            InputLabelProps={{
              style: { color: "#000" },
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: "#1a73e8",
              color: "#fff",
              borderRadius: 1,
            }}
          >
            Войти
          </Button>
          <Box display="flex" justifyContent="space-between">
            <Link href="/register" variant="body2" sx={{ color: "#1a73e8" }}>
              Нету аккаунта? Регистрация
            </Link>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export { Login };
