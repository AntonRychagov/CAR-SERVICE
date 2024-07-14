import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const Search: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  // Пример данных для поиска
  const searchResults = [
    { id: "1", name: "Автосервис 1", description: "Описание автосервиса 1" },
    { id: "2", name: "Автосервис 2", description: "Описание автосервиса 2" },
  ];

  const filteredResults = searchResults.filter((service) =>
    service.name.toLowerCase().includes(query?.toLowerCase() || "")
  );

  const handleCardClick = (id: string) => {
    navigate(`/service/${id}`);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {filteredResults.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <Paper
              onClick={() => handleCardClick(service.id)}
              sx={{ padding: 2, cursor: "pointer" }}
            >
              <Typography variant="h6">{service.name}</Typography>
              <Typography>{service.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export { Search };
