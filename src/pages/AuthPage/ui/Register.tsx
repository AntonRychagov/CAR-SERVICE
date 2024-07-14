// src/pages/Auth/Register.tsx
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

interface IRegisterFormInput {
  email: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
    clearErrors,
  } = useForm<IRegisterFormInput>();

  const onSubmit: SubmitHandler<IRegisterFormInput> = (data) => {
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Пароли не совпадают",
      });
      return;
    }

    clearErrors("confirmPassword");
    console.log(data);
    // Добавить логику регистрации
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
          Регистрация
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
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="confirmPassword"
            label="Подтвердите пароль"
            type="password"
            autoComplete="current-password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
            })}
            error={
              !!errors.confirmPassword ||
              watch("confirmPassword") !== watch("password")
            }
            helperText={
              errors.confirmPassword?.message ||
              (watch("confirmPassword") !== watch("password")
                ? "Пароли не совпадают"
                : "")
            }
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
            Зарегистрироваться
          </Button>
          <Box display="flex" justifyContent="space-between">
            <Link href="/login" variant="body2" sx={{ color: "#1a73e8" }}>
              Уже есть аккаунт? Войти
            </Link>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export { Register };
