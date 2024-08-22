import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Grid,
  Paper,
  Typography,
  Box,
  CircularProgress,
  Pagination,
} from '@mui/material';
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
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 3; 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://gas159.ru/api/v1/company?page=${page}&size=${pageSize}`,
        );

        const items = data.items;
        const totalItems = data.total;
        const totalPagesCalculated = Math.ceil(totalItems / pageSize);

        setCompanys(items);
        setTotalPages(totalPagesCalculated);
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
  }, [page, pageSize]);

  const handleCardClick = (id: number) => {
    navigate(`/service/${id}`);
  };

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
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
        <>
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
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              shape="rounded"
              color="primary"
              variant="outlined"
            />
          </Box>
        </>
      )}
    </Box>
  );
};

export { CompanyList };
