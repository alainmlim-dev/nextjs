import { Container, Typography } from '@mui/material'
import Home from '../page'
const axios = require('axios');

export default async function ServerComponent() {

    const name = "Alain Lim";
    let data: Array<object> = []
    let loadingState =  true

    const preRenderList = (jsonData: Array<object>) => {

        console.log("jsonData", jsonData)
        loadingState = false

        return (
            <>
                {jsonData.map(g => (
                    <Typography key={g.id} variant="body1">
                        {g.name} | {g.genre.join(',')}
                    </Typography>
                ))}
            </>

        )

    }


    try {
        const resp = await fetch('https://api.sampleapis.com/playstation/games');
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

