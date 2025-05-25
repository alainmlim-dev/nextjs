import { Container, Typography } from '@mui/material'
import Home from '../page'

interface gameData {
    id: number;
    name: string;
    genre: Array<string>
}

let data: Array<gameData>

export default async function ServerComponent() {

    try {
        const resp = await fetch('http://localhost:3000/api/users', {
            method: "GET"
        });
        const json = await resp.json();
        data = json;
    } catch ({ err }: any) {
        console.log(err)
    }


    return (
        <Container sx={{ border: "1px solid blue", mt: 4, pb: 4 }}>
            <Typography variant='h1' sx={{ textAlign: "center", m: 4 }}>
                Server Component
            </Typography>

            <Home userData={data} />
        </Container>
    )
}

