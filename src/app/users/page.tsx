import { Typography } from "@mui/material";
import { Suspense } from "react";

export default async function Page() {

    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await data.json()

    return (
        <div>
            <Typography variant="h2" sx={{ mb: 2 }}>
                User List
            </Typography>

            <Suspense>
                {users.length > 0 ?
                    <ul>
                        {users.map((u: any) => (
                            <li key={u.id}>{u.name}</li>
                        ))}
                    </ul>
                    :
                    <p>Loading...</p>
                }
            </Suspense>
        </div>


    )
}