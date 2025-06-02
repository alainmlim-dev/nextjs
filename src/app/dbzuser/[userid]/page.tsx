import { Typography } from "@mui/material";


export default async function ViewUser({ params }: { params: Promise<{ userid: string }> }) {

    const userid = (await params).userid;

    const resp = await fetch('http://localhost:3000/api/alain', {
        method: "GET"
    });
    const json = await resp.json();
    const data = json;
    const users = data.users
    console.log(data)

    return (
        <>
            <Typography variant="h2">
                User information
            </Typography>

            <Typography variant="body1">
                User ID: {userid}
            </Typography>
        </>
    )
}