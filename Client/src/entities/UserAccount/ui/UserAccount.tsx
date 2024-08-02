import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";

const UserAccount: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Личный кабинет
      </Typography>
      <Typography variant="h6" gutterBottom>
        История записей
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Запись 1" secondary="Детали записи 1" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Запись 2" secondary="Детали записи 2" />
        </ListItem>
      </List>
      <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
        Редактировать информацию
      </Button>
    </Container>
  );
};

export { UserAccount };
