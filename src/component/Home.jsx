import { Container, Typography, Box, Stack } from '@mui/material';
import React from 'react';
import { Search } from './Search';

export const Home = () => {
  return (
    <React.Fragment>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          textAlign: 'center',
          minHeight: '100vh',
          width: '100%',
          background: '#000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box>
          <Stack direction="column" alignItems="center">
            <Stack direction="column" alignItems={'center'} sx={{ marginBottom: '5px' }}>
              <Box sx={{ height: '25px', width: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 0 15px 0' }}>
                <img src={`https://openweathermap.org/img/wn/${"02d"}@2x.png`} alt='logo' />
              </Box>
              <Typography
                sx={{
                  color: '#fff',
                  fontSize: '24px',
                  fontWeight: 700,
                  fontFamily: "Newsreader",
                }}
              >
                City Weather
              </Typography>
            </Stack>
            <Typography
              sx={{
                color: '#fff',
                fontSize: '16px',
                fontFamily: "Poppins",
                lineHeight: '1.5',
                letterSpacing: '0.5px',
              }}
            >
              Instantly view weather updates and forecasts for your city.
            </Typography>
          </Stack>
          <Search />
        </Box>
      </Container>
    </React.Fragment>
  );
}