import { Typography } from "@mui/material";
import UserInfo from "../../src/app/dbzuser/UserInfo";


export default async function ViewUser({ params }: { params: Promise<{ id: string }> }) {

    const id = (await params).id;

    // const resp = await fetch('http://localhost:3000/api/dbzusers/id', {
    //     method: "GET"
    // });
    // const json = await resp.json();
    // const data = json;
    // const users = data.users
    // console.log(users)

    return (
        <>
            {/* <UserInfo userid={userId} /> */}

            <Typography variant="h2">
                User information
            </Typography>
        </>
    )
}