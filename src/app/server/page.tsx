import { Container, Typography } from '@mui/material'
import Home from '../page'

interface gameData {
    id: number;
    name: string;
    genre: Array<string>
}

let data: Array<gameData>

export default async function ServerComponent() {

    const name = "Alain Lim";
    let loadingState =  true

    const preRenderList = (jsonData: Array<gameData>) => {

        loadingState = false
        console.log(jsonData)

        return (
            <>
                {jsonData.map(g => (
                    <Typography key={g.id} variant="body1">
                        {g.name} 
                    </Typography>
                ))}
            </>

        )

    }


    try {
        // https://api.sampleapis.com/playstation/games
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

            <Home games={preRenderList(data)} loadingState={loadingState} />
        </Container>
    )
}

