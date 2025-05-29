import { Box, Container, Typography } from "@mui/material";




export default async function MongoUsers() {

    const resp = await fetch('http://localhost:3000/api/mongousers', {
        method: "GET"
    });
    const json = await resp.json();
    const data = json;
    const users = data.users


    return (

        <Container maxWidth={true} sx={{ h: 4, bgcolor: "cyan" }}>

            <Typography variant="h1">
                Mongo Users
            </Typography>

            <Box sx={{ bgcolor: "white" }}>
                <table style={{ border: "1px solid gray", width: "600px" }}>
                    <thead style={{ border: "1px solid gray" }}>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Date Added</th>
                    </thead>
                    <tbody>

                        {users ?
                            <>
                                {
                                    users.map((u: any) => (
                                        <tr key={u.id} style={{ border: "1px solid gray" }}>
                                            <td style={{ border: "1px solid gray" }}>{u.firstname} {u.lastname}</td>
                                            <td style={{ border: "1px solid gray" }}>{u.email}</td>
                                            <td style={{ border: "1px solid gray" }}>{u.dateadded}</td>
                                        </tr>
                                    ))
                                }
                            </>
                            :
                            <>
                                <Typography>
                                    Loading...
                                </Typography>
                            </>
                        }
                        
                    </tbody>
                </table>
            </Box>


        </Container>

    )

}