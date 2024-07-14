import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ServiceCardProps } from "../../../shared/types";

const Card = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: theme.shadows[4],
  },
  [theme.breakpoints.down("md")]: {
    "&:hover": {
      transform: "none",
      boxShadow: "none",
    },
    "&:active": {
      transform: "none",
      boxShadow: "none",
    },
    cursor: "default", // Изменяем курсор на обычный
  },
}));

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  name,
  price,
  image,
  onClick,
}) => (
  <Card
    onClick={() => {
      if (window.innerWidth >= 960) {
        onClick && onClick(id);
      }
    }}
  >
    <Box
      component="img"
      src={image}
      alt={name}
      sx={{
        height: 120,
        marginBottom: "16px",
        width: "100%",
        objectFit: "contain",
      }}
    />
    <Typography gutterBottom variant="h6" component="div">
      {name}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {price}
    </Typography>
  </Card>
);

export { ServiceCard };
