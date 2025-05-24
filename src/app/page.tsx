"use client";

import { Container, Typography, Box, Skeleton } from '@mui/material'
import { useEffect, useState } from 'react';

interface data {
  name: string
  games: any
  loadingState: boolean
}

export default function Home({ games, loadingState }: data) {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    setIsLoading(loadingState)

  }, [loadingState])

  return (
    <Container sx={{ border: "1px solid gold" }}>

      {isLoading ?
        <Skeleton variant="rectangular" height={118} />
        :
        <Box>
          <Typography variant='h1' sx={{ textAlign: "center", m: 4 }}>
            Client Component
          </Typography>
          <Typography variant='h5' sx={{ textAlign: "center", m: 4 }}>
            Welcome!
          </Typography>
          <Box>
            <Typography variant="h4">
              PS4 Games
            </Typography>

            {games}

          </Box>
        </Box>
      }



    </Container>
  );
}
