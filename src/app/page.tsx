

import { Container, Typography, Box } from '@mui/material'
import Link from 'next/link';

export default function Home() {

  return (
    <Container sx={{ border: "1px solid gold" }}>
      <Typography variant="h1">
        Main App - Next.JS
      </Typography>

      

      <Box sx={{fontSize: "2rem", color: "blue", textDecoration: "underline"}}>
        <Link href="/users">Users</Link>
      </Box>

      <Box sx={{fontSize: "2rem", color: "blue", textDecoration: "underline"}}>
        <Link href="/mongousers">Mongo Users</Link>
      </Box>

      <Box sx={{fontSize: "2rem", color: "blue", textDecoration: "underline"}}>
        <Link href="/dbzusers">DBZ Users</Link>
      </Box>

    </Container>
  );
}
