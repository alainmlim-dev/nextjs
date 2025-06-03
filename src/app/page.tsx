"use client";

import { Container, Typography, Box } from '@mui/material'
import Link from 'next/link';
import Blogs from './blogs/Blogs';

export default function Home() {

  return (
    <>
      {/* <Typography variant="h1">
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
      </Box> */}

      <Blogs />

    </>
  );
}
