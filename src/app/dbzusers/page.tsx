import { Box, Container, Typography, Divider } from "@mui/material";
import AddUser from "./AddUser";
import DbzUsersTable from "./DbzUsersTable";


export default async function MongoUsers() {

    const resp = await fetch('http://localhost:3000/api/dbzusers', {
        method: "GET"
    });
    const json = await resp.json();
    const data = json;
    const users = data.users


    return (

        <Container maxWidth={"xl"} sx={{ h: 4, bgcolor: "cyan" }}>

            <Typography variant="h1">
                DBZ Users
            </Typography>

            <Divider />
            <AddUser />
            <Divider />

            {users ? <DbzUsersTable users={users} /> : <></>}


        </Container >

    )

}

