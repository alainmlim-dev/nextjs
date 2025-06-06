// src/app/dbzuser/[userid]/page.tsx

import { Typography, Box, Container, Divider } from "@mui/material";

export default async function ViewUser({ params }: { params: Promise<{ userid: string }> }) {

    const userid = (await params).userid;

    const resp = await fetch('http://localhost:3000/api/dbzusers/' + userid, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "userid": userid
        }
    });
    const json = await resp.json();
    const data = json;
    const user = data.user

    return (
        <>
            <Container maxWidth={"xl"} sx={{ m: 2 }}>
                <Typography variant="h2">
                    User information
                </Typography>

                <Divider sx={{ pt: 4, mb: 4 }} />

                {user ?
                    <Box>
                        <Typography variant="h4">
                            <strong>User ID:</strong> {userid} <br />
                            <strong>Name:</strong> {user.name} <br />
                            <strong>Planet:</strong> {user.planet} <br />
                            <strong>Spouse:</strong> {user.spouse}
                        </Typography>
                    </Box>
                    :
                    <Typography variant="body1">
                        Loading user data...
                    </Typography>

                }
            </Container>
        </>
    )
}