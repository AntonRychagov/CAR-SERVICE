import React from "react";
import { Container, Grid, Paper, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BannerText } from "./BannerText";
import { YandexMap } from "./YandexMap";
import { Footer } from "./Footer";
import theme from "../../../app/theme";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (id: string) => {
    navigate(`/service/${id}`);
  };

  return (
    <>
      <Container>
        <BannerText />
        <Box
          sx={{
            mt: 4,
            mb: 4,
            [theme.breakpoints.down("sm")]: {
              mt: 2,
              mb: 6,
            },
          }}
        >
          <Grid container spacing={3} direction="column">
            <Grid item xs={12}>
              <Paper
                onClick={() => handleCardClick("1")}
                sx={{ padding: 2, cursor: "pointer" }}
              >
                <Typography variant="h6">Автосервис 555</Typography>
                <Typography>
                  Экспресс-пункт замены масла, Выкуп автомобилей, Автосервис,
                  Шиномонтаж
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper
                onClick={() => handleCardClick("2")}
                sx={{ padding: 2, cursor: "pointer" }}
              >
                <Typography variant="h6">Автосервис</Typography>
                <Typography>Автотехцентр</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper
                onClick={() => handleCardClick("3")}
                sx={{ padding: 2, cursor: "pointer" }}
              >
                <Typography variant="h6">АвтоДрайв</Typography>
                <Typography>Автотехцентр</Typography>
              </Paper>
            </Grid>
            {/* Добавить больше карточек автосервисов */}
          </Grid>
        </Box>
        <Box sx={{ mt: 12 }} />
        <YandexMap />
        <Box sx={{ mt: 15 }} />
      </Container>
      <Footer />
    </>
  );
};

export { Home };
