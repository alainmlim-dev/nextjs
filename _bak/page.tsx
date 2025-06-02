import { Typography } from "@mui/material";


export default async function ViewUser({ params }: { params: Promise<{ id: string }> }) {

    const userId = (await params).id;

    const fetchUserData = async () => {

        const resp = await fetch('http://localhost:3000/api/dbzuser', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "userId": "testId"
            }
        });
        const json = await resp.json();
        const data = json;
        // console.log(data)

    }
    fetchUserData()



    return (
        <>
            <Typography variant="h1">
                View User: {userId}
            </Typography>
        </>
    )
}