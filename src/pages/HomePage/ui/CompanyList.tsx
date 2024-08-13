import { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Paper, Typography, Box, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import theme from '../../../app/theme';

type Service = {
  id: number;
  name: string;
  description: string;
};

const CompanyList: React.FC = () => {
  const [companys, setCompanys] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://45.9.73.213:8001/api/v1/company');
        setCompanys(response.data.items);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error.message);
        } else {
          setError('Произошла ошибка');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleCardClick = (id: number) => {
    navigate(`/service/${id}`);
  };

  return (
    <Box
      sx={{
        mt: 4,
        mb: 4,
        [theme.breakpoints.down('sm')]: {
          mt: 2,
          mb: 6,
        },
      }}
    >
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error" sx={{ textAlign: 'center', mt: 4 }}>
          {error}
        </Typography>
      ) : (
        <Grid container spacing={3} direction="column">
          {companys.map((company) => (
            <Grid item xs={12} key={company.id}>
              <Paper
                onClick={() => handleCardClick(company.id)}
                sx={{ padding: 2, cursor: 'pointer' }}
              >
                <Typography variant="h6">{company.name}</Typography>
                <Typography>{company.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export { CompanyList };
