import { Box, Container, Typography, Divider, Button } from "@mui/material";
import AddButton from "./AddButton";
import AddUser from "./AddUser";


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

            <Box sx={{ bgcolor: "white", mt: 3 }}>
                <table style={{ border: "1px solid gray", width: "100%" }}>
                    <thead style={{ border: "1px solid gray" }}>
                        <th>Name</th>
                        <th>Planet</th>
                        <th>Spouse</th>
                    </thead>
                    <tbody>

                        {users ?
                            <>
                                {
                                    users.map((u: any) => (
                                        <tr key={u.id} style={{ border: "1px solid gray" }}>
                                            <td style={{ border: "1px solid gray" }}>{u.name}</td>
                                            <td style={{ border: "1px solid gray" }}>{u.planet}</td>
                                            <td style={{ border: "1px solid gray" }}>{u.spouse}</td>
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