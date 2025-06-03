import { Typography } from "@mui/material";


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
    console.log(user)

    return (
        <>
            <Typography variant="h2">
                User information
            </Typography>

            {user ?
                <Typography variant="body1">
                    User ID: {userid} <br />
                    Name: {user.name} <br />
                    Planet: {user.planet} <br />
                    Spouse: {user.spouse}
                </Typography>
                :
                <Typography variant="body1">
                    Loading user data...
                </Typography>}


        </>
    )
}