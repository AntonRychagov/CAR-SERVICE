import { useForm, SubmitHandler } from "react-hook-form";
import { observer } from "mobx-react-lite";
import { Button, TextField, Container, Box, Typography } from "@mui/material";
import authStore from "../../../shared/lib/store/AuthStore";
import { IFormInput } from "../../../shared/types";


const Register = observer(() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    authStore.register(data.email, data.password);
  };

  return (
    <Container>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h4" gutterBottom>
          Register
        </Typography>
        <TextField
          label="Email"
          {...register("email", { required: "Введите email" })}
          error={!!errors.email}
          helperText={errors.email ? String(errors.email.message) : ""}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          {...register("password", { required: "Введите пароль" })}
          error={!!errors.password}
          helperText={errors.password ? String(errors.password.message) : ""}
          fullWidth
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={authStore.isLoading}
        >
          {authStore.isLoading ? "Registering..." : "Register"}
        </Button>
        {authStore.error && (
          <Typography color="error">{authStore.error}</Typography>
        )}
      </Box>
    </Container>
  );
});

export { Register } ;
