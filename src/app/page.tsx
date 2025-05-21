"use client";

import { Container, Typography, Box, Skeleton } from '@mui/material'
import { useEffect, useState } from 'react';

interface data {
  name: string
  games: object[]
}

export default function Home({ name, games }: data) {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (games !== undefined) {
      if (games.length > 0) {
        setIsLoading(false)
      }
    }

  }, [games])

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
            Welcome, {name}!
          </Typography>
          <Box>
            <Typography variant="h4">
              PS4 Games
            </Typography>

            {games.map(g => (
              <Typography key={g.id} variant="body1">
                {g.name} | {g.genre.join(',')}
              </Typography>
            ))}

          </Box>
        </Box>
      }



    </Container>
  );
}
