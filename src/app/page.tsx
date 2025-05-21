"use client";

import { Container, Typography } from '@mui/material'

export default function Home() {

  return (
    <Container>
      <Typography variant='h1' sx={{textAlign: "center", m: 4}}>
        Client Component
      </Typography>
    </Container>
  );
}
